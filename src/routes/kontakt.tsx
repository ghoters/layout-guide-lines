import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "@/lib/contact.functions";
import { Logo } from "@/components/Logo";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Instagram,
  Linkedin,
  LockKeyhole,
  Mail,
  MessageCircleMore,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Projektowanie 3D" },
      {
        name: "description",
        content: "Skontaktuj się ze mną. Omówimy Twój projekt 3D, wycenę i termin realizacji.",
      },
      { property: "og:title", content: "Kontakt — Projektowanie 3D" },
      {
        property: "og:description",
        content: "Skontaktuj się ze mną. Omówimy Twój projekt 3D, wycenę i termin realizacji.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.3dmodele.pl/kontakt" },
    ],
    links: [{ rel: "canonical", href: "https://www.3dmodele.pl/kontakt" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt — 3dmodele.pl",
          url: "https://www.3dmodele.pl/kontakt",
          mainEntity: {
            "@type": "Person",
            name: "3dmodele.pl",
            email: "sebjara.ghoters@gmail.com",
            telephone: "+48576309671",
          },
        }),
      },
    ],
  }),
  component: Kontakt,
});

const navLinks = [
  { label: "Strona główna", to: "/" },
  { label: "Realizacje", to: "/realizacje" },
  { label: "Blog", to: "/blog" },
  { label: "Kontakt", to: "/kontakt" },
];

function Kontakt() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const send = useServerFn(sendContactMessage);

  const trackConversion = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18326049899/wmdkCLLcq-QcEOuoxaJE",
      });
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await send({ data: form });
      trackConversion();
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nie udało się wysłać wiadomości.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--page)] font-contact-body text-foreground">
      <header className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center" aria-label="3dmodele.pl — strona główna">
          <Logo height={36} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to as "/" | "/realizacje" | "/blog" | "/kontakt"}
              activeProps={{ className: "text-sm font-semibold text-[var(--brand)] underline underline-offset-8" }}
              inactiveProps={{ className: "text-sm text-foreground/80 transition-colors hover:text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="h-auto rounded-lg bg-[var(--brand)] px-3 py-2 text-xs font-semibold hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm">
          <Link to="/kontakt">
            Wyślij zapytanie <ArrowRight />
          </Link>
        </Button>
      </header>
      <MobileNav />

      <main className="border-t border-border bg-contact-surface">
        <section className="relative mx-auto grid max-w-[1200px] gap-12 overflow-hidden px-6 py-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:py-20">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              KONTAKT
            </div>

            <h1 className="mt-8 max-w-[520px] font-contact-display text-5xl font-bold leading-[1.08] md:text-6xl">
              Masz pomysł?
              <br />
              Stwórzmy go <span className="text-[var(--brand)]">w 3D.</span>
            </h1>

            <p className="mt-7 max-w-[500px] text-base leading-7 text-muted-foreground">
              Masz pomysł na model, potrzebujesz projektu do druku 3D albo szukasz kogoś do stworzenia modelu od podstaw? Napisz — opisz krótko swój projekt, a wrócę do Ciebie z odpowiedzią.
            </p>

            <div className="mt-9 space-y-5">
              <a href="mailto:sebjara.ghoters@gmail.com" className="group flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-contact-icon text-[var(--brand)] shadow-sm transition-transform group-hover:-translate-y-0.5">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <strong className="block truncate text-base font-bold">sebjara.ghoters@gmail.com</strong>
                  <span className="mt-0.5 block text-sm text-muted-foreground">E-mail</span>
                </span>
              </a>

              <a href="tel:+48576309671" className="group flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-contact-icon text-[var(--brand)] shadow-sm transition-transform group-hover:-translate-y-0.5">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <strong className="block text-base font-bold">+48 576 309 671</strong>
                  <span className="mt-0.5 block text-sm text-muted-foreground">Telefon</span>
                </span>
              </a>

              <div className="flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-contact-icon text-[var(--brand)] shadow-sm">
                  <Clock3 className="h-5 w-5" />
                </span>
                <span>
                  <strong className="block text-base font-bold">Odpowiadam zazwyczaj</strong>
                  <strong className="block text-base font-bold">w ciągu 24h</strong>
                </span>
              </div>
            </div>

            <div aria-hidden="true" className="mt-10 grid w-20 grid-cols-5 gap-3 opacity-40">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-[var(--brand)]" />
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-2xl border border-border bg-card p-6 shadow-[0_22px_60px_color-mix(in_oklab,var(--brand)_10%,transparent)] sm:p-8 lg:p-10">
            {sent ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-contact-icon text-[var(--brand)]">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-contact-display text-3xl font-bold">Wiadomość wysłana</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                </p>
                <Button variant="link" onClick={() => setSent(false)} className="mt-5 text-[var(--brand)]">
                  Wyślij kolejną wiadomość
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="mb-7 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-contact-icon text-[var(--brand)]">
                    <MessageCircleMore className="h-6 w-6" />
                  </span>
                  <h2 className="font-contact-display text-2xl font-bold">Napisz wiadomość</h2>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold">Imię / Nazwa firmy</label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15"
                      placeholder="Wpisz swoje imię lub nazwę firmy"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold">Adres e-mail</label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15"
                      placeholder="Wpisz adres e-mail"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold">Opisz swój projekt</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      maxLength={5000}
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm leading-6 outline-none transition-shadow placeholder:text-muted-foreground focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15"
                      placeholder="Opisz krótko swój projekt, jego przeznaczenie, oczekiwania i termin realizacji..."
                    />
                  </div>
                </div>

                <Button type="submit" disabled={submitting} className="mt-6 h-14 w-full rounded-lg bg-[var(--brand)] text-base font-bold shadow-lg shadow-primary/15 transition-transform hover:-translate-y-0.5 hover:opacity-90">
                  {submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  <ArrowRight className="h-5 w-5" />
                </Button>

                {error ? <p className="mt-3 text-center text-sm text-destructive">{error}</p> : null}

                <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                  <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>Odpowiadając na wiadomość, możesz od razu przesłać informacje dotyczące projektu, jego przeznaczenia oraz oczekiwanego terminu realizacji.</p>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-[var(--page)]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
          <Link to="/" aria-label="3dmodele.pl — strona główna"><Logo height={32} /></Link>
          <div className="text-xs text-muted-foreground">© 2024 Wszelkie prawa zastrzeżone.</div>
          <div className="flex items-center gap-4 text-[var(--brand)]" aria-label="Media społecznościowe">
            <Instagram className="h-4 w-4" />
            <span className="text-xs font-bold">A</span>
            <Linkedin className="h-4 w-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
