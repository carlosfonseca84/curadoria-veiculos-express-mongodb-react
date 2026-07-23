import fs from "fs";
import path from "path";
import multer from "multer";

const uploadsDirectory = "uploads";
fs.mkdirSync(uploadsDirectory, { recursive: true });

export const upload = multer({
	storage: multer.diskStorage({
		destination: uploadsDirectory,
		filename: (_req, file, callback) => {
			const extension = path.extname(file.originalname || "").toLowerCase();
			const baseName = path.basename(file.originalname || "upload", extension).replace(/\s+/g, "-").toLowerCase();
			callback(null, `${Date.now()}-${baseName}${extension}`);
		},
	}),
	limits: { fileSize: 5 * 1024 * 1024 },
});

export { uploadsDirectory };