import { createFileRoute } from "@tanstack/react-router";
import aboutShowroom from "@/assets/about-showroom.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — LUX IMPORTS" },
      {
        name: "description",
        content:
          "Uma concessionária concebida para colecionadores. Conheça a filosofia, o showroom e o atendimento VIP da LUX IMPORTS.",
      },
      { property: "og:title", content: "Sobre — LUX IMPORTS" },
      { property: "og:description", content: "Uma casa dedicada ao automóvel como obra." },
    ],
  }),
  component: SobrePage,
});

const pillars = [
  { n: "01", t: "Curadoria", d: "Cada veículo passa por seleção rigorosa antes de integrar a coleção." },
  { n: "02", t: "Atendimento VIP", d: "Concierge dedicado, apresentações privadas e test drives sob agendamento." },
  { n: "03", t: "Procedência", d: "Documentação impecável e histórico verificado de origem a entrega." },
  { n: "04", t: "Exclusividade", d: "Acesso antecipado a lançamentos e edições limitadas das principais maisons." },
];

function SobrePage() {
  return (
    <div className="pt-20">
      <section className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[720px]">
          <img src={aboutShowroom} alt="Showroom LUX IMPORTS" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-card p-10 md:p-20">
          <span className="text-hairline text-muted-foreground">Sobre nós</span>
          <h1 className="mt-6 font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Uma casa dedicada ao{" "}
            <span className="italic text-muted-foreground">automóvel como obra.</span>
          </h1>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            A LUX IMPORTS nasceu do encontro entre paixão automotiva e cultura do luxo.
            Reunimos, sob um mesmo teto, exemplares raros das maisons que definem o
            estado da arte da mobilidade premium.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.n} className="border border-border p-8">
                <span className="text-hairline text-muted-foreground">{p.n}</span>
                <h3 className="mt-6 font-display text-2xl font-light tracking-tight">{p.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}