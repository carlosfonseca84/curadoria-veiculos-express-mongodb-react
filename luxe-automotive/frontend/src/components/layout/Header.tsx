import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, Store, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/veiculos", label: "Veículos" },
  { to: "/historia", label: "História" },
  { to: "/super-carros", label: "Super Carros" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid h-20 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10">
          <div className="flex items-center">
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-foreground transition-all hover:border-border hover:bg-secondary/40"
            >
              <Menu className="h-5 w-5 transition-transform group-hover:scale-110" strokeWidth={1.5} />
            </button>
          </div>

          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-[0.32em] text-foreground md:text-xl"
          >
            LUX <span className="text-muted-foreground">IMPORTS</span>
          </Link>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              aria-label="Loja"
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary/40"
            >
              <Store className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Carrinho"
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary/40"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
            </button>
          </div>
        </div>
      </header>

      {/* Side drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-background/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute inset-y-0 left-0 flex w-full max-w-md flex-col border-r border-border bg-background transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between px-8">
            <span className="text-hairline text-muted-foreground">Menu</span>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary/40"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="metal-divider mx-8" />
          <nav className="flex flex-col gap-1 px-8 py-10">
            {navLinks.map((link, i) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group flex items-baseline justify-between border-b border-border/40 py-5 font-display text-3xl font-light tracking-tight transition-colors md:text-4xl ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{
                    transitionDelay: open ? `${100 + i * 60}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-20px)",
                    transitionProperty: "opacity, transform, color",
                    transitionDuration: "600ms",
                  }}
                >
                  <span>{link.label}</span>
                  <span className="text-hairline text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto px-8 pb-10">
            <p className="text-hairline text-muted-foreground">Atendimento VIP</p>
            <p className="mt-2 font-display text-lg text-foreground">+55 11 3000 0000</p>
            <p className="mt-1 text-sm text-muted-foreground">concierge@luximports.com</p>
          </div>
        </aside>
      </div>
    </>
  );
}