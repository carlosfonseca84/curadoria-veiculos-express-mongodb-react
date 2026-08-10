import { createFileRoute } from "@tanstack/react-router";
import articleHistory from "@/assets/article-history.jpg";
import articleClassics from "@/assets/article-classics.jpg";
import articleTech from "@/assets/article-tech.jpg";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "História — LUX IMPORTS" },
      {
        name: "description",
        content:
          "A trajetória da LUX IMPORTS e a herança das grandes maisons automotivas que compõem nossa curadoria.",
      },
      { property: "og:title", content: "História — LUX IMPORTS" },
      { property: "og:description", content: "Herança, artesania e legado sobre rodas." },
    ],
  }),
  component: HistoriaPage,
});

const chapters = [
  {
    year: "1908",
    title: "A origem do luxo",
    text: "Quando o automóvel deixou de ser máquina e se tornou desejo. As primeiras carrocerias artesanais definiram um padrão que atravessa gerações.",
    image: articleHistory,
  },
  {
    year: "1963",
    title: "A era dos ícones",
    text: "Modelos que nasceram para durar. Linhas atemporais, motores rugidores e uma reverência estética sem precedentes.",
    image: articleClassics,
  },
  {
    year: "2024",
    title: "O futuro da tradição",
    text: "Hibridização, eletrificação e materiais raros. A nova era preserva a alma e reinventa a performance.",
    image: articleTech,
  },
];

function HistoriaPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <span className="text-hairline text-muted-foreground">Herança</span>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
          Mais de um século de{" "}
          <span className="italic text-muted-foreground">obsessão pelo excepcional.</span>
        </h1>
      </section>

      <div className="space-y-24 pb-32 md:space-y-40">
        {chapters.map((c, i) => (
          <section key={c.year} className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/3] overflow-hidden border border-border bg-graphite">
                <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="text-hairline text-muted-foreground">{c.year}</span>
                <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight md:text-5xl">
                  {c.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {c.text}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}