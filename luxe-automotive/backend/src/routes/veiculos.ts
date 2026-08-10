import { Router, type Request, type Response } from "express";
import { prisma } from "../ultils/prisma.js";
import { env } from "../config/env.js";
import { invalidateVeiculosCache, isRedisAvailable, redisClient } from "../infrastructure/redis.js";
import { upload } from "../infrastructure/upload.js";

const router = Router();
const requiredFields = ["name", "brand", "model", "year", "engine", "power", "price", "fuel", "transmission", "color", "image", "description"];
const allowedPatchFields = [...requiredFields];

router.get("/", async (_req: Request, res: Response) => {
	if (isRedisAvailable()) {
		try {
			const cachedVehicles = await redisClient.get("veiculos");
			if (cachedVehicles) {
				console.log("Dados encontrados no cache Redis");
				return res.json(JSON.parse(cachedVehicles));
			}
		} catch (error) {
			console.warn("Falha ao acessar o cache Redis, continuando com o banco:", error);
		}
	}

	const vehicles = await prisma.importados.findMany();
	if (isRedisAvailable()) {
		try {
			await redisClient.set("veiculos", JSON.stringify(vehicles), { EX: 3600 });
		} catch (error) {
			console.warn("Não foi possível gravar no cache Redis:", error);
		}
	}
	return res.json(vehicles);
});

router.get("/:id", async (req: Request, res: Response) => {
	const vehicle = await prisma.importados.findUnique({ where: { id: String(req.params.id) } });
	if (!vehicle) return res.status(404).json({ erro: "veiculo não localizado" });
	return res.json(vehicle);
});

router.post("/", upload.single("image"), async (req: Request, res: Response) => {
	try {
		const data = req.body;
		const vehicle = {
			...data,
			image: req.file ? `${env.backendUrl}/uploads/${req.file.filename}` : data.image,
			year: Number(data.year),
			power: Number(data.power),
			price: String(data.price),
		};

		if (requiredFields.some((field) => !vehicle[field])) {
			return res.status(400).json({ erro: "Todos os campos (name, brand, model, year, engine, power, price, fuel, transmission, color, image, description) são obrigatórios." });
		}

		const createdVehicle = await prisma.importados.create({
			data: {
				name: vehicle.name,
				brand: vehicle.brand,
				model: vehicle.model,
				year: vehicle.year,
				engine: vehicle.engine,
				power: vehicle.power,
				price: vehicle.price,
				fuel: vehicle.fuel,
				transmission: vehicle.transmission,
				color: vehicle.color,
				image: vehicle.image,
				description: vehicle.description,
			},
		});
		await invalidateVeiculosCache();
		return res.status(201).json({ mensagem: "Veículo criado com sucesso!", veiculo: createdVehicle });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ erro: "Erro interno do servidor" });
	}
});

router.put("/:id", async (req: Request, res: Response) => {
	try {
		const { name, brand, model, year, engine, power, price, fuel, transmission, color, image, description } = req.body;
		const values = { name, brand, model, year, engine, power, price, fuel, transmission, color, image, description };
		if (Object.values(values).some((value) => !value)) {
			return res.status(400).json({ erro: "Todos os campos (name, brand, model, year, engine, power, price, fuel, transmission, color, image, description) são obrigatórios." });
		}

		const updatedVehicle = await prisma.importados.update({
			where: { id: String(req.params.id) },
			data: { name, brand, model, year: Number(year), engine: String(engine), power: Number(power), price: String(price), fuel, transmission, color, image, description },
		});
		await invalidateVeiculosCache();
		return res.json(updatedVehicle);
	} catch (error) {
		console.error(error);
		return res.status(404).json({ erro: "veiculo não localizado" });
	}
});

router.patch("/:id", upload.single("image"), async (req: Request, res: Response) => {
	try {
		const data = req.body ?? {};
		if (!req.file && Object.keys(data).length === 0) return res.status(400).json({ erro: "Envie ao menos um campo para atualizar ou um arquivo de imagem." });

		const invalidField = Object.keys(data).find((field) => !allowedPatchFields.includes(field));
		if (invalidField) return res.status(400).json({ erro: `Campo inválido: ${invalidField}` });

		const updateData: Record<string, unknown> = {};
		for (const field of Object.keys(data)) updateData[field] = data[field];
		if (data.year !== undefined) updateData.year = Number(data.year);
		if (data.engine !== undefined) updateData.engine = String(data.engine);
		if (data.power !== undefined) updateData.power = Number(data.power);
		if (data.price !== undefined) updateData.price = String(data.price);
		if (req.file) {
			updateData.image = `${env.backendUrl}/uploads/${req.file.filename}`;
		} else if (data.image !== undefined) {
			const image = String(data.image);
			updateData.image = image.startsWith("http") ? image : image.startsWith("/") ? `${env.backendUrl}${image}` : `${env.backendUrl}/uploads/${image}`;
		}

		const updatedVehicle = await prisma.importados.update({ where: { id: String(req.params.id) }, data: updateData });
		await invalidateVeiculosCache();
		return res.json(updatedVehicle);
	} catch (error) {
		console.error(error);
		return res.status(404).json({ erro: "veiculo não localizado" });
	}
});

router.delete("/:id", async (req: Request, res: Response) => {
	try {
		const deletedVehicle = await prisma.importados.delete({ where: { id: String(req.params.id) } });
		await invalidateVeiculosCache();
		return res.json({ mensagem: "Veículo removido com sucesso", veiculo: deletedVehicle });
	} catch (error) {
		console.error(error);
		return res.status(404).json({ erro: "veiculo não localizado" });
	}
});

export default router;