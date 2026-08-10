import type { CorsOptions } from "cors";

const allowedOrigins = [
	"http://localhost:3000",
	"http://127.0.0.1:3000",
	"http://localhost:5173",
	"http://127.0.0.1:5173",
	"http://localhost:8080",
	"http://127.0.0.1:8080",
].filter(Boolean) as string[];

export const corsOptions: CorsOptions = {
	origin: (origin, callback) => {
		if (!origin) return callback(null, true);
		if (allowedOrigins.includes(origin)) return callback(null, true);
		if (/^http:\/\/localhost(:\d+)?$/.test(origin) || /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)) {
			return callback(null, true);
		}

		console.warn("CORS blocked for origin:", origin);
		return callback(new Error("Not allowed by CORS"));
	},
	optionsSuccessStatus: 200,
};