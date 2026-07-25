import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Settings, Instagram, Linkedin, Mail, Phone, BookOpen, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { blogPosts, blogCategories, type BlogCategory } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog o projektowaniu 3D i druku 3D | 3dmodele.pl" },
      {
        name: "description",
        content:
          "Praktyczne poradniki, inspiracje i case study o projektowaniu 3D, modelowaniu 3D oraz druku 3D FDM i SLA. Dowiedz się, jak powstają profesjonalne modele 3D.",
      },
      { property: "og:title", content: "Blog o projektowaniu 3D i druku 3D | 3dmodele.pl" },
      {
        property: "og:description",
        content:
          "Praktyczne poradniki, inspiracje i case study o projektowaniu 3D, modelowaniu 3D oraz druku 3D FDM i SLA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.3dmodele.pl/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.3dmodele.pl/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog 3dmodele.pl — projektowanie 3D i druk 3D",
          url: "https://www.3dmodele.pl/blog",
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `https://www.3dmodele.pl/blog/${p.slug}`,
            image: `https://www.3dmodele.pl${p.image.url}`,
            datePublished: p.date,
            articleSection: p.category,
          })),
        }),
      },
    ],
  }),
  component: Blog,
});

const navLinks = [
  { label: "Strona główna", to: "/" as const },
  { label: "Realizacje", to: "/realizacje" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

const PAGE_SIZE = 8;

const filters: Array<"Wszystkie" | BlogCategory> = ["Wszystkie", ...blogCategories];

function formatDate(iso: string) {
  const months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
    "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
  ];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function Blog() {
  const [active, setActive] = useState<(typeof filters)[number]>("Wszystkie");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (active === "Wszystkie" ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const paged = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
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
              to={l.to}
              activeProps={{ className: "text-sm font-medium text-[var(--brand)] underline underline-offset-8" }}
              inactiveProps={{ className: "text-sm text-foreground/80 hover:text-foreground" }}
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

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              BLOG
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Blog o projektowaniu <span className="text-[var(--brand)]">3D</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Porady, case studies i praktyczne wskazówki ze świata projektowania 3D,
              druku 3D, wizualizacji oraz tworzenia modeli do gier.
            </p>
          </div>
          <div className="relative hidden h-[280px] lg:block">
            <div
              aria-hidden
              className="absolute right-16 top-6 h-40 w-40 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle at 30% 30%, var(--brand-soft), transparent 70%)" }}
            />
            <div
              aria-hidden
              className="absolute right-2 top-24 grid grid-cols-6 gap-2 opacity-40"
            >
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]/40" />
              ))}
            </div>
            <div
              className="absolute right-24 top-10 flex h-40 w-40 rotate-[-8deg] items-center justify-center rounded-[36px] shadow-2xl"
              style={{ background: "linear-gradient(135deg, var(--brand), color-mix(in oklab, var(--brand) 65%, black))" }}
            >
              <BookOpen className="h-16 w-16 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setActive(f);
                  setPage(1);
                }}
                className={
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
                  (isActive
                    ? "bg-[var(--brand)] text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-foreground/80 hover:border-[var(--brand)] hover:text-[var(--brand)]")
                }
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paged.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="block aspect-[4/3] w-full overflow-hidden bg-muted"
              >
                <img
                  src={p.image.url}
                  alt={p.image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="inline-flex w-fit items-center rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand)]">
                  {p.category}
                </div>
                <h2 className="mt-3 text-base font-semibold leading-snug">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-[var(--brand)]">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(p.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {p.readingMinutes} min czytania
                  </span>
                </div>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex items-center gap-1 self-end text-[var(--brand)] hover:opacity-80"
                  aria-label={`Czytaj więcej: ${p.title}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition hover:text-[var(--brand)] disabled:opacity-40"
              aria-label="Poprzednia strona"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const isActive = n === current;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={
                    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition " +
                    (isActive
                      ? "bg-[var(--brand)] text-primary-foreground"
                      : "border border-border bg-card text-foreground/80 hover:text-[var(--brand)]")
                  }
                >
                  {n}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={current === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition hover:text-[var(--brand)] disabled:opacity-40"
              aria-label="Następna strona"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-10">
        <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-[var(--brand-soft)] px-8 py-8 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div>
            <h2 className="text-xl font-bold">Masz pomysł na projekt?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Napisz lub zadzwoń – chętnie pomogę.</p>
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
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Wyślij zapytanie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

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
