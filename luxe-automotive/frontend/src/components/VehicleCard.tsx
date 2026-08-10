import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, type Vehicle } from "@/data/vehicles";

type Props = {
  vehicle: Vehicle;
  size?: "sm" | "lg";
};

export function VehicleCard({ vehicle, size = "sm" }: Props) {
  const isLarge = size === "lg";
  return (
    <Link
      to="/veiculos"
      className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-metal/50"
    >
      <div
        className={`relative overflow-hidden bg-graphite ${isLarge ? "aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-70" />
        <span className="text-hairline absolute left-6 top-6 text-foreground/80">
          {vehicle.brand}
        </span>
      </div>

      <div className={`flex flex-1 flex-col gap-4 p-6 ${isLarge ? "md:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className={`font-display font-light tracking-tight text-foreground ${
                isLarge ? "text-3xl md:text-4xl" : "text-2xl"
              }`}
            >
              {vehicle.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {vehicle.model} · {vehicle.year}
            </p>
          </div>
          {isLarge && (
            <span className="text-hairline shrink-0 text-muted-foreground">{vehicle.power}</span>
          )}
        </div>

        {!isLarge && (
          <p className="line-clamp-2 text-sm text-muted-foreground">{vehicle.description}</p>
        )}

        {isLarge && (
          <div className="grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            <Meta label="Motor" value={vehicle.engine} />
            <Meta label="Potência" value={vehicle.power} />
            <Meta label="Câmbio" value={vehicle.transmission} />
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-lg text-foreground">{formatPrice(vehicle.price)}</span>
          <span className="text-hairline inline-flex items-center gap-2 text-foreground transition-transform group-hover:translate-x-1">
            Ver mais
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-hairline text-muted-foreground">{label}</p>
      <p className="mt-1 truncate text-sm text-foreground">{value}</p>
    </div>
  );
}
