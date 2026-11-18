import { Link } from "@tanstack/react-router";
import logoAzul from "@/assets/logo-azul.png.asset.json";
import logoBranco from "@/assets/logo-branco.png.asset.json";

export const CONTACT = { city: "Beira, Sofala - Moçambique", address: "4º Bairro, Rua S/N, Beira", nuit: "402 103 396" };

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={light ? logoBranco.url : logoAzul.url}
        alt="Agro Soluções & Consultoria"
        width={44}
        height={46}
        className="h-11 w-auto shrink-0"
      />
      <span className={`leading-none ${light ? "text-navy-foreground" : "text-foreground"}`}>
        <span className="block font-display text-xl font-extrabold">AGRO</span>
        <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-70">Soluções & Consultoria</span>
      </span>
    </Link>
  );
}

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="flex items-center gap-1 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="hidden rounded-md px-3 py-2 text-muted-foreground hover:text-foreground sm:block" activeProps={{ className: "text-primary" }}>{l.label}</Link>
          ))}
          <Link to="/contacto" className="ml-2 rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">Fale connosco</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div><Logo light /><p className="mt-4 text-sm opacity-70">Agro Soluções e Consultoria, SU, LDA</p></div>
        <div className="text-sm opacity-80"><p className="font-semibold">Morada</p><p>{CONTACT.address}</p><p>{CONTACT.city}</p></div>
        <div className="text-sm opacity-80"><p className="font-semibold">NUIT</p><p>{CONTACT.nuit}</p></div>
      </div>
      <p className="border-t border-navy-foreground/10 py-4 text-center text-xs opacity-60">© {new Date().getFullYear()} Agro Soluções & Consultoria</p>
    </footer>
  );
}
