import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { VehicleCard } from "@/components/VehicleCard";
import { useVehicles } from "@/data/vehiclesApi";
import { vehicles as staticVehicles } from "@/data/vehicles";

export const Route = createFileRoute("/super-carros")({
  head: () => ({
    meta: [
      { title: "Super Carros — LUX IMPORTS" },
      {
        name: "description",
        content:
          "Uma vitrine dedicada aos super esportivos mais desejados do mundo. Performance, artesania e exclusividade.",
      },
      { property: "og:title", content: "Super Carros — LUX IMPORTS" },
      {
        property: "og:description",
        content: "Hypercars e super esportivos em curadoria exclusiva.",
      },
    ],
  }),
  component: SuperCarrosPage,
});

function SuperCarrosPage() {
  const { vehicles, loading, error } = useVehicles();
  const currentVehicles = useMemo(() => {
    const merged = new Map<string, (typeof staticVehicles)[number]>();
    staticVehicles.forEach((vehicle) => merged.set(vehicle.id, vehicle));
    vehicles.forEach((vehicle) => merged.set(vehicle.id, vehicle));
    return Array.from(merged.values());
  }, [vehicles]);

  return (
    <div className="pt-20">
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <span className="text-hairline text-muted-foreground">Vitrine</span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
            Super <span className="italic text-muted-foreground">carros.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground md:text-lg">
            Máquinas que existem para um único propósito: superar limites. Cada exemplar da nossa
            vitrine é resultado de décadas de engenharia obsessiva.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        {loading && (
          <div className="border border-border p-12 text-center text-muted-foreground">
            Carregando veículos...
          </div>
        )}
        {error && (
          <div className="border border-destructive p-12 text-center text-destructive">
            Não foi possível carregar os veículos: {error}
          </div>
        )}
        <div className="grid gap-8 md:grid-cols-2">
          {currentVehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} size="lg" />
          ))}
        </div>
      </section>
    </div>
  );
}
