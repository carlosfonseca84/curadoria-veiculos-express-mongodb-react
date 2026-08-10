import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useMemo } from "react";

import heroImage from "@/assets/hero-car.jpg";
import articleClassics from "@/assets/article-classics.jpg";
import articleTech from "@/assets/article-tech.jpg";
import articleHistory from "@/assets/article-history.jpg";
import aboutShowroom from "@/assets/about-showroom.jpg";
import { useVehicles } from "@/data/vehiclesApi";
import { vehicles as staticVehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";

export const Route = createFileRoute("/")({
  component: Index,
});

const articles = [
  {
    tag: "História",
    title: "A herança que atravessa gerações",
    excerpt:
      "Como as grandes maisons automotivas construíram um legado que ultrapassa a engenharia e se torna cultura.",
    image: articleHistory,
  },
  {
    tag: "Clássicos",
    title: "Ícones eternos sobre rodas",
    excerpt:
      "Uma curadoria dos modelos que definiram épocas e continuam ditando o conceito de beleza mecânica.",
    image: articleClassics,
  },
  {
    tag: "Tecnologia",
    title: "Artesania encontra o futuro",
    excerpt:
      "Materiais raros, sistemas híbridos e interiores conectados: a nova era do luxo automotivo.",
    image: articleTech,
  },
];

function Index() {
  const { vehicles, loading, error } = useVehicles();
  const currentVehicles = useMemo(() => {
    const merged = new Map<string, (typeof staticVehicles)[number]>();
    staticVehicles.forEach((vehicle) => merged.set(vehicle.id, vehicle));
    vehicles.forEach((vehicle) => merged.set(vehicle.id, vehicle));
    return Array.from(merged.values());
  }, [vehicles]);
  const featured = currentVehicles.slice(0, 3);
  const supers = currentVehicles.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-screen w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Supercarro de luxo em estúdio escuro"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-linear-to-r from-background/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-6 pt-24 pb-24 md:px-10 md:pt-28 md:pb-32">
          <span className="text-hairline animate-fade-in text-muted-foreground">
            Coleção 2025 · Curadoria VIP
          </span>
          <h1 className="mt-6 max-w-2xl animate-fade-in font-display text-4xl font-light leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            O luxo em
            <br />
            <span className="italic text-muted-foreground">sua forma mais pura.</span>
          </h1>
          <p className="mt-8 max-w-xl animate-fade-in text-base text-muted-foreground md:text-lg">
            Uma seleção rigorosa dos automóveis mais desejados do mundo, reunida em um único espaço
            concebido para colecionadores.
          </p>
          <div className="mt-10 animate-fade-in">
            <Link
              to="/veiculos"
              className="group inline-flex items-center gap-4 border border-foreground/80 px-8 py-4 font-display text-sm tracking-[0.28em] uppercase text-foreground transition-all duration-500 hover:bg-foreground hover:text-primary-foreground"
            >
              Conheça nossa coleção
              <ArrowRight
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-6 z-10 flex items-center gap-3 md:right-10">
          <span className="text-hairline text-muted-foreground">Scroll</span>
          <span className="h-px w-16 bg-muted-foreground/60" />
        </div>
      </section>

      {/* SECTION 1 — Featured */}
      <SectionShell eyebrow="Destaques" title="A coleção do mês">
        {loading && (
          <div className="rounded border border-border bg-card p-6 text-sm text-muted-foreground">
            Carregando veículos do backend...
          </div>
        )}
        {error && (
          <div className="rounded border border-destructive bg-destructive/10 p-6 text-sm text-destructive">
            Erro ao carregar veículos: {error}
          </div>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </SectionShell>

      {/* SECTION 2 — Paixão sobre rodas */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <span className="text-hairline text-muted-foreground">Editorial</span>
              <h2 className="mt-6 font-display text-5xl font-light leading-tight tracking-tight md:text-6xl">
                Paixão sobre
                <br />
                <span className="italic text-muted-foreground">rodas.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              Histórias, clássicos e tecnologia. Um olhar curatorial sobre o universo dos automóveis
              que transcendem o transporte e se tornam obra.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col border border-border bg-card transition-all duration-500 hover:border-metal/50"
              >
                <div className="aspect-4/3 overflow-hidden bg-graphite">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1200 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <span className="text-hairline text-muted-foreground">{a.tag}</span>
                  <h3 className="font-display text-2xl font-light leading-snug tracking-tight text-foreground">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{a.excerpt}</p>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-hairline text-foreground transition-transform group-hover:translate-x-1"
                  >
                    Leia mais
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Super Carros */}
      <SectionShell
        eyebrow="Vitrine"
        title="Super carros"
        caption="Uma seleção rara para os mais exigentes."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {supers.map((v) => (
            <VehicleCard key={v.id + "-lg"} vehicle={v} size="lg" />
          ))}
        </div>
      </SectionShell>

      {/* SECTION 4 — Sobre */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-4/5 md:aspect-auto">
            <img
              src={aboutShowroom}
              alt="Showroom LUX IMPORTS"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-card p-10 md:p-20">
            <span className="text-hairline text-muted-foreground">Sobre a LUX IMPORTS</span>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight tracking-tight md:text-5xl">
              A tecnologia, o conforto e a exclusividade{" "}
              <span className="italic text-muted-foreground">sobre rodas.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Os modelos mais procurados em diversas categorias. A melhor experiência para adquirir
              seu automóvel premium, com opções variadas de modelos, cores, potência, acabamento e
              tecnologias de última geração para proporcionar máxima satisfação.
            </p>
            <div className="mt-10">
              <Link
                to="/sobre"
                className="group inline-flex items-center gap-4 border border-foreground/80 px-8 py-4 font-display text-sm tracking-[0.28em] uppercase text-foreground transition-all duration-500 hover:bg-foreground hover:text-primary-foreground"
              >
                Ver mais
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionShell({
  eyebrow,
  title,
  caption,
  children,
}: {
  eyebrow: string;
  title: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-hairline text-muted-foreground">{eyebrow}</span>
            <h2 className="mt-4 font-display text-5xl font-light leading-tight tracking-tight md:text-6xl">
              {title}
            </h2>
          </div>
          {caption && <p className="max-w-md text-muted-foreground md:text-right">{caption}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
