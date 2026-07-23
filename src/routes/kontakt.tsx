import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "@/lib/contact.functions";
import {
  ArrowRight,
  Settings,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Projektowanie 3D" },
      {
        name: "description",
        content:
          "Skontaktuj się ze mną. Omówimy Twój projekt 3D, wycenę i termin realizacji.",
      },
      { property: "og:title", content: "Kontakt — Projektowanie 3D" },
      {
        property: "og:description",
        content:
          "Skontaktuj się ze mną. Omówimy Twój projekt 3D, wycenę i termin realizacji.",
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
  { label: "Kontakt", to: "/kontakt" },
];

function Kontakt() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const send = useServerFn(sendContactMessage);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await send({ data: form });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Nie udało się wysłać wiadomości."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      {/* NAV */}
      <header className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
            <Settings className="h-5 w-5" />
          </div>
          <span className="hidden truncate text-sm font-semibold tracking-wide sm:inline">3dmodele.pl</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to as "/" | "/realizacje" | "/blog" | "/kontakt"}
              activeProps={{
                className:
                  "text-sm font-medium text-[var(--brand)] underline underline-offset-8",
              }}
              inactiveProps={{
                className: "text-sm text-foreground/80 hover:text-foreground",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/kontakt"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--brand)] px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Wyślij zapytanie <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            KONTAKT
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Porozmawiajmy o <span className="text-[var(--brand)]">projekcie</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Napisz lub zadzwoń - chętnie omówię szczegóły, zakres i wycenę. Odpowiadam
            zazwyczaj tego samego dnia.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* INFO */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">E-mail</div>
                  <a
                    href="mailto:sebjara.ghoters@gmail.com"
                    className="text-sm font-semibold hover:text-[var(--brand)]"
                  >
                    sebjara.ghoters@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Telefon</div>
                  <a
                    href="tel:+48576309671"
                    className="text-sm font-semibold hover:text-[var(--brand)]"
                  >
                    +48 576 309 671
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">Wiadomość wysłana</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-medium text-[var(--brand)] hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                      <User className="h-4 w-4 text-[var(--brand)]" />
                      Imię i nazwisko
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="h-4 w-4 text-[var(--brand)]" />
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]"
                      placeholder="jan@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                      <MessageSquare className="h-4 w-4 text-[var(--brand)]" />
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]"
                      placeholder="Opisz krótko swój projekt..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Wysyłanie..." : "Wyślij wiadomość"} <Send className="h-4 w-4" />
                </button>
                {error && (
                  <p className="text-center text-sm text-red-600">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 pb-10">
        <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-[var(--brand-soft)] px-8 py-8 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div>
            <h2 className="text-xl font-bold">Wolisz napisać bezpośrednio?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Jestem też dostępny mailowo i telefonicznie.
            </p>
          </div>
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
              <Mail className="h-4 w-4" />
            </div>
            <span className="min-w-0 truncate text-sm">sebjara.ghoters@gmail.com</span>
          </div>
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-sm">+48 576 309 671</span>
          </div>
          <a
            href="mailto:sebjara.ghoters@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Napisz maila <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
              <Settings className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold tracking-wide">3dmodele.pl</span>
          </Link>
          <div className="text-xs text-muted-foreground">© 2024 Wszelkie prawa zastrzeżone.</div>
          <div className="flex items-center gap-4 text-[var(--brand)]">
            <Instagram className="h-4 w-4" />
            <span className="text-xs font-bold">A</span>
            <Linkedin className="h-4 w-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
