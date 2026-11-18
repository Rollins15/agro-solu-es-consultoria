import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-campo.jpg";
import consult from "@/assets/consultoria.jpg";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Agro Soluções & Consultoria — Beira, Moçambique" },
    { name: "description", content: "Produção agrícola, pecuária, piscicultura, consultoria e comércio de insumos na Beira, Sofala." },
    { property: "og:title", content: "Agro Soluções & Consultoria" },
    { property: "og:description", content: "Soluções completas para o agronegócio em Moçambique." },
  ] }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Campo de milho na Beira" width={1600} height={912} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-5 py-28 text-navy-foreground sm:py-40">
          <p className="mb-4 inline-block rounded-full bg-leaf/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-leaf">Beira · Sofala · Moçambique</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] sm:text-7xl">Do campo ao mercado, cultivamos resultados.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Produção, consultoria e comércio para agricultores, criadores e empresas do agronegócio.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/servicos" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Nossos serviços <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contacto" className="rounded-full border border-navy-foreground/40 px-6 py-3 font-semibold hover:bg-navy-foreground/10">Pedir consultoria</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-extrabold">O que fazemos</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <img src={consult} alt="Consultora a examinar folhas de soja" loading="lazy" width={1200} height={912} className="rounded-3xl object-cover" />
          <div>
            <h2 className="text-4xl font-extrabold">Assistência técnica no terreno</h2>
            <p className="mt-4 text-muted-foreground">Estamos ao lado do produtor em cada fase - do solo à colheita - com conhecimento local e soluções práticas.</p>
            <Link to="/sobre" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Conheça a empresa <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
