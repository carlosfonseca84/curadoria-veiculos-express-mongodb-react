import type { RequestHandler } from "express";

export const requestLogger: RequestHandler = (req, _res, next) => {
	console.log(`Requisição recebida: ${req.method} ${req.url}`);
	next();
};