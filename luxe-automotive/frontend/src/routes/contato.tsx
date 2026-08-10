import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — LUX IMPORTS" },
      {
        name: "description",
        content:
          "Fale com o concierge da LUX IMPORTS. Agende visitas privadas, test drives e acesso à nossa coleção.",
      },
      { property: "og:title", content: "Contato — LUX IMPORTS" },
      { property: "og:description", content: "Agende uma visita privada ao nosso showroom." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-hairline text-muted-foreground">Fale conosco</span>
            <h1 className="mt-4 font-display text-5xl font-light leading-tight tracking-tight md:text-6xl">
              Uma visita<br />
              <span className="italic text-muted-foreground">à altura da coleção.</span>
            </h1>
            <p className="mt-8 text-muted-foreground md:text-lg">
              Nosso concierge está à disposição para agendar apresentações privadas,
              test drives e consultoria de aquisição.
            </p>

            <div className="mt-12 space-y-6">
              <Info label="Showroom" value="Av. das Nações Unidas, 12.000 — São Paulo" />
              <Info label="Concierge" value="+55 11 3000 0000" />
              <Info label="E-mail" value="concierge@luximports.com" />
              <Info label="Horário" value="Seg – Sáb · 10h às 20h" />
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="border border-border bg-card p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="Nome" name="nome" />
              <FormField label="Sobrenome" name="sobrenome" />
              <FormField label="E-mail" name="email" type="email" />
              <FormField label="Telefone" name="telefone" />
            </div>
            <div className="mt-6">
              <label className="text-hairline mb-3 block text-muted-foreground">Mensagem</label>
              <textarea rows={5} className="w-full border border-border bg-background px-3 py-3 text-sm text-foreground outline-none focus:border-metal" />
            </div>
            <button
              type="submit"
              className="mt-8 w-full border border-foreground/80 px-8 py-4 font-display text-sm uppercase tracking-[0.28em] transition-all hover:bg-foreground hover:text-primary-foreground"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-hairline text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-lg text-foreground">{value}</p>
    </div>
  );
}

function FormField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-hairline mb-3 block text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border border-border bg-background px-3 py-3 text-sm text-foreground outline-none focus:border-metal"
      />
    </div>
  );
}