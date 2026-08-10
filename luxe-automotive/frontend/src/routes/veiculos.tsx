import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";

import { VehicleCard } from "@/components/VehicleCard";
import { useVehicles } from "@/data/vehiclesApi";
import { brands, colors, fuels, transmissions, vehicles as staticVehicles } from "@/data/vehicles";

export const Route = createFileRoute("/veiculos")({
  head: () => ({
    meta: [
      { title: "Veículos — LUX IMPORTS" },
      {
        name: "description",
        content:
          "Explore a coleção completa de carros importados de luxo da LUX IMPORTS. Filtre por marca, modelo, ano, preço, combustível, potência, transmissão e cor.",
      },
      { property: "og:title", content: "Veículos — LUX IMPORTS" },
      {
        property: "og:description",
        content: "A coleção completa. Super esportivos, GTs e sedans premium.",
      },
    ],
  }),
  component: VeiculosPage,
});

function VeiculosPage() {
  const [brand, setBrand] = useState<string>("");
  const [fuel, setFuel] = useState<string>("");
  const [transmission, setTransmission] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(5_000_000);
  const [showFilters, setShowFilters] = useState(false);
  const { vehicles, loading, error } = useVehicles();
  const currentVehicles = useMemo(() => {
    const merged = new Map<string, (typeof staticVehicles)[number]>();
    staticVehicles.forEach((vehicle) => merged.set(vehicle.id, vehicle));
    vehicles.forEach((vehicle) => merged.set(vehicle.id, vehicle));
    return Array.from(merged.values());
  }, [vehicles]);

  const filtered = useMemo(() => {
    return currentVehicles.filter((v) => {
      if (brand && v.brand !== brand) return false;
      if (fuel && v.fuel !== fuel) return false;
      if (transmission && v.transmission !== transmission) return false;
      if (color && v.color !== color) return false;
      if (year && String(v.year) !== year) return false;
      if (v.price > maxPrice) return false;
      return true;
    });
  }, [brand, fuel, transmission, color, year, maxPrice, currentVehicles]);

  return (
    <div className="pt-20">
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
          <span className="text-hairline text-muted-foreground">Coleção</span>
          <h1 className="mt-4 font-display text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Nossos <span className="italic text-muted-foreground">veículos.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
            {filtered.length} de {currentVehicles.length} automóveis disponíveis na sua curadoria.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-12 md:px-10 md:py-20">
        <button
          type="button"
          onClick={() => setShowFilters((s) => !s)}
          className="mb-8 inline-flex items-center gap-2 border border-border px-4 py-2 text-hairline text-foreground transition-colors hover:bg-secondary/40 lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
          Filtros
        </button>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="sticky top-28 space-y-8 border border-border bg-card p-6">
              <h3 className="text-hairline text-muted-foreground">Filtros</h3>

              <Field label="Marca">
                <Select value={brand} onChange={setBrand} options={brands} />
              </Field>
              <Field label="Ano">
                <Select value={year} onChange={setYear} options={["2023", "2024"]} />
              </Field>
              <Field label="Combustível">
                <Select value={fuel} onChange={setFuel} options={fuels} />
              </Field>
              <Field label="Transmissão">
                <Select value={transmission} onChange={setTransmission} options={transmissions} />
              </Field>
              <Field label="Cor">
                <Select value={color} onChange={setColor} options={colors} />
              </Field>
              <Field label="Preço máx.">
                <input
                  type="range"
                  min={500_000}
                  max={5_000_000}
                  step={50_000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[color:var(--accent)]"
                />
                <p className="mt-2 text-sm text-foreground">
                  Até{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    maximumFractionDigits: 0,
                  }).format(maxPrice)}
                </p>
              </Field>

              <button
                type="button"
                onClick={() => {
                  setBrand("");
                  setFuel("");
                  setTransmission("");
                  setColor("");
                  setYear("");
                  setMaxPrice(5_000_000);
                }}
                className="w-full border border-border px-4 py-3 text-hairline text-foreground transition-colors hover:bg-secondary/40"
              >
                Limpar filtros
              </button>
            </div>
          </aside>

          <div>
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
            {!loading && filtered.length === 0 ? (
              <div className="border border-border p-12 text-center text-muted-foreground">
                Nenhum veículo corresponde aos filtros selecionados.
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((v) => (
                  <VehicleCard key={v.id} vehicle={v} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-hairline mb-3 block text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-metal"
    >
      <option value="">Todos</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
