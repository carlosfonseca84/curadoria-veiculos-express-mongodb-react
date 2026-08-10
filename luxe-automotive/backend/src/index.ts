import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { corsOptions } from "./config/cors.js";
import { requestLogger } from "./middlewares/request-logger.js";
import { connectRedis } from "./infrastructure/redis.js";
import { uploadsDirectory } from "./infrastructure/upload.js";
import veiculosRouter from "./routes/veiculos.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", express.static(uploadsDirectory));
app.use(requestLogger);
app.get("/favicon.ico", (_req, res) => res.status(204).end());
app.use("/veiculos", veiculosRouter);

void connectRedis();
app.listen(env.port, () => {
	console.log(`Servidor rodando na porta ${env.port}`);
});