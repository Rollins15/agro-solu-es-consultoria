import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "Sobre — Agro Soluções & Consultoria" },
    { name: "description", content: "Empresa moçambicana sediada na Beira, constituída em 2025, dedicada ao agronegócio." },
    { property: "og:title", content: "Sobre a Agro Soluções & Consultoria" },
    { property: "og:description", content: "Conheça a nossa empresa na Beira, Sofala." },
  ] }),
  component: () => (
    <section className="mx-auto max-w-4xl px-5 py-20">
      <h1 className="text-5xl font-extrabold">Sobre nós</h1>
      <p className="mt-6 text-lg text-muted-foreground">A Agro Soluções e Consultoria, SU, LDA é uma sociedade unipessoal moçambicana, com sede na cidade da Beira, província de Sofala. Actuamos na produção agrícola e pecuária, pesca e piscicultura, consultoria e assistência técnica, indústria transformadora e no comércio, importação e exportação de produtos e equipamentos agrícolas.</p>
      <dl className="mt-12 grid gap-4">
        {[["NUIT", "402 103 396"]].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-navy p-6 text-navy-foreground"><dt className="text-xs uppercase tracking-widest opacity-60">{k}</dt><dd className="mt-2 font-display text-2xl font-bold">{v}</dd></div>
        ))}
      </dl>
    </section>
  ),
});
