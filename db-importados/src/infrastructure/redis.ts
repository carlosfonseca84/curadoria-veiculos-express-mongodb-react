import { createClient } from "redis";
import type { RedisClientType } from "redis";

export const redisClient: RedisClientType = createClient();
let redisAvailable = false;

redisClient.on("error", (error) => {
	redisAvailable = false;
	console.error("Redis Client Error:", error);
});
redisClient.on("connect", () => console.log("Redis client connecting..."));
redisClient.on("ready", () => {
	redisAvailable = true;
	console.log("Redis client ready and connected!");
});

export function isRedisAvailable(): boolean {
	return redisAvailable;
}

export async function connectRedis(): Promise<void> {
	try {
		await redisClient.connect();
	} catch (error) {
		redisAvailable = false;
		console.warn("Redis indisponível, continuando sem cache:", error);
	}
}

export async function invalidateVeiculosCache(): Promise<void> {
	if (!redisAvailable) return;
	await redisClient.del("veiculos");
}