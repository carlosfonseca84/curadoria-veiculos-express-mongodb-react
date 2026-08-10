import { useEffect, useState } from "react";
import type { Vehicle } from "../data/vehicles";

const VEHICLES_API_URL = "http://localhost:8000/veiculos";

function getUserFriendlyVehicleError(error: unknown): string {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    if (
      message.includes("failed to fetch") ||
      message.includes("networkrequestfailed") ||
      message.includes("load failed")
    ) {
      return "Não foi possível carregar os veículos no momento. Verifique a conexão com o servidor e tente novamente.";
    }
  }

  return "Não foi possível carregar os veículos no momento. Tente novamente.";
}

export async function fetchVehicles(): Promise<Vehicle[]> {
  try {
    const response = await fetch(VEHICLES_API_URL);

    if (!response.ok) {
      throw new Error("Não foi possível carregar os veículos no momento.");
    }

    let data: unknown;
    try {
      data = await response.json();
    } catch (err) {
      console.error("Erro ao interpretar resposta do backend:", err);
      throw new Error("Não foi possível carregar os veículos no momento.");
    }

    if (!Array.isArray(data)) {
      throw new Error("Não foi possível carregar os veículos no momento.");
    }

    return data.map(normalizeVehicle);
  } catch (error) {
    const friendlyMessage = getUserFriendlyVehicleError(error);
    console.error("Erro ao buscar veículos:", error);
    throw new Error(friendlyMessage);
  }
}

function toString(value: unknown, fallback = ""): string {
  if (value == null) return fallback;
  return String(value);
}

function toNumber(value: unknown, fallback = 0): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function asFuel(value: unknown): Vehicle["fuel"] {
  const v = toString(value, "Gasolina");
  if (v === "Gasolina" || v === "Híbrido" || v === "Elétrico") return v as Vehicle["fuel"];
  return "Gasolina";
}

function asTransmission(value: unknown): Vehicle["transmission"] {
  const v = toString(value, "Automático");
  if (v === "Automático" || v === "PDK" || v === "Manual") return v as Vehicle["transmission"];
  return "Automático";
}

function normalizeVehicle(item: unknown): Vehicle {
  let obj: Record<string, unknown>;
  if (typeof item === "object" && item !== null) {
    obj = item as Record<string, unknown>;
  } else {
    obj = {};
  }

  return {
    id: toString(obj.id, ""),
    name: toString(obj.name, ""),
    brand: toString(obj.brand, ""),
    model: toString(obj.model, ""),
    year: toNumber(obj.year, 0),
    engine: toString(obj.engine, ""),
    power: toString(obj.power, ""),
    price: toNumber(obj.price, 0),
    fuel: asFuel(obj.fuel),
    transmission: asTransmission(obj.transmission),
    color: toString(obj.color, ""),
    image: toString(obj.image, ""),
    description: toString(obj.description, ""),
  };
}

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchVehicles()
      .then((data) => {
        if (active) {
          setVehicles(data);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err instanceof Error ? err.message : String(err));
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { vehicles, loading, error };
}
