import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({ meta: [
    { title: "Serviços — Agro Soluções & Consultoria" },
    { name: "description", content: "Agricultura, pecuária, piscicultura, consultoria, indústria e comércio de insumos agrícolas." },
    { property: "og:title", content: "Serviços — Agro Soluções & Consultoria" },
    { property: "og:description", content: "Tudo o que oferecemos ao agronegócio moçambicano." },
  ] }),
  component: () => (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-5xl font-extrabold">Serviços</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Uma cadeia de valor completa, da produção à comercialização.</p>
      <div className="mt-12 divide-y divide-border border-y border-border">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="grid gap-4 py-8 sm:grid-cols-[80px_1fr_2fr] sm:items-center">
            <span className="font-display text-3xl font-extrabold text-leaf">0{i + 1}</span>
            <h2 className="flex items-center gap-3 text-2xl font-bold"><s.icon className="h-6 w-6 text-primary" />{s.title}</h2>
            <p className="text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  ),
});
