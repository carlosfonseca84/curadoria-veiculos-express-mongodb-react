import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";

const columns = [
  {
    title: "Carros Esportivos",
    items: ["Coupé GT", "Roadster", "Super Esportivos", "Track Edition", "Hypercars"],
  },
  {
    title: "Marcas",
    items: ["Bentley", "Mercedes-Benz", "Porsche", "Lamborghini", "Ferrari", "Rolls-Royce"],
  },
  {
    title: "Estilos",
    items: ["Grand Tourer", "Sedan de Luxo", "SUV Premium", "Clássicos", "Elétricos"],
  },
  {
    title: "Serviços",
    items: ["Curadoria VIP", "Test Drive", "Financiamento", "Blindagem", "Concierge"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-hairline mb-6 text-muted-foreground">{col.title}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="metal-divider mt-16" />

        <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="font-display text-xl font-semibold tracking-[0.32em]">
            LUX <span className="text-muted-foreground">IMPORTS</span>
          </Link>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LUX IMPORTS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}