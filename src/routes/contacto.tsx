import { createFileRoute } from "@tanstack/react-router";
import { MapPin, FileText, Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/components/site-chrome";

export const Route = createFileRoute("/contacto")({
  head: () => ({ meta: [
    { title: "Contacto — Agro Soluções & Consultoria" },
    { name: "description", content: "Fale com a Agro Soluções & Consultoria na Beira, Moçambique." },
    { property: "og:title", content: "Contacto — Agro Soluções & Consultoria" },
    { property: "og:description", content: "Peça uma consultoria ou orçamento." },
  ] }),
  component: () => (
    <section className="mx-auto max-w-4xl px-5 py-20">
      <h1 className="text-5xl font-extrabold">Contacto</h1>
      <p className="mt-4 text-muted-foreground">Visite-nos ou envie-nos o seu pedido de consultoria.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6"><MapPin className="h-6 w-6 text-primary" /><p className="mt-3 font-semibold">{CONTACT.address}</p><p className="text-muted-foreground">{CONTACT.city}</p></div>
        <div className="rounded-2xl border border-border bg-card p-6"><FileText className="h-6 w-6 text-primary" /><p className="mt-3 font-semibold">NUIT {CONTACT.nuit}</p><p className="text-muted-foreground">Agro Soluções e Consultoria, SU, LDA</p></div>
        <a href={CONTACT.phoneHref} className="rounded-2xl border border-border bg-card p-6 hover:border-primary"><Phone className="h-6 w-6 text-primary" /><p className="mt-3 font-semibold">Chamadas</p><p className="text-muted-foreground">{CONTACT.phone}</p></a>
        <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border bg-card p-6 hover:border-primary"><MessageCircle className="h-6 w-6 text-primary" /><p className="mt-3 font-semibold">WhatsApp</p><p className="text-muted-foreground">{CONTACT.phone}</p></a>
      </div>
    </section>
  ),
});
