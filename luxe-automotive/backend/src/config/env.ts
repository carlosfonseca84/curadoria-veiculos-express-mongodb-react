import "dotenv/config";

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL não foi configurada no arquivo .env");
}

export const env = {
	databaseUrl: process.env.DATABASE_URL,
	backendUrl: process.env.BACKEND_URL || "http://localhost:8000",
	port: process.env.PORT || "8000",
};