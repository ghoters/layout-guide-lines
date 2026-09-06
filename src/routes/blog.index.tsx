import { MobileNav } from "@/components/MobileNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  PenLine,
  Box,
} from "lucide-react";
import { useMemo, useState } from "react";
import { blogPosts, blogCategories, type BlogCategory } from "@/lib/blog";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/blog/")({
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
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let posts = active === "Wszystkie" ? blogPosts : blogPosts.filter((p) => p.category === active);
    const q = query.trim().toLowerCase();
    if (q) {
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    return posts;
  }, [active, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const paged = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center" aria-label="3dmodele.pl — strona główna">
          <Logo height={36} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeProps={{ className: "text-sm font-medium text-primary underline underline-offset-8" }}
              inactiveProps={{ className: "text-sm text-foreground/80 hover:text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/kontakt"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Wyślij zapytanie <ArrowRight className="h-4 w-4" />
        </Link>
      </header>
      <MobileNav />

      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              BLOG
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Blog o projektowaniu <span className="text-primary">3D</span>
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
              style={{ background: "radial-gradient(circle at 30% 30%, var(--color-primary), transparent 70%)" }}
            />
            <div
              aria-hidden
              className="absolute right-2 top-24 grid grid-cols-6 gap-2 opacity-40"
            >
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary/40" />
              ))}
            </div>
            <div
              className="absolute right-24 top-10 flex h-40 w-40 rotate-[-8deg] items-center justify-center rounded-[36px] shadow-2xl"
              style={{ background: "linear-gradient(135deg, var(--color-primary), color-mix(in oklab, var(--color-primary) 65%, black))" }}
            >
              <BookOpen className="h-16 w-16 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div
              aria-hidden
              className="absolute right-52 top-32 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-lg"
            >
              <PenLine className="h-7 w-7 text-primary" />
            </div>
            <div
              aria-hidden
              className="absolute right-8 top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-lg"
            >
              <Box className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-card text-foreground/80 hover:border-primary hover:text-primary")
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Szukaj artykułu..."
              className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm text-foreground outline-none ring-primary placeholder:text-muted-foreground focus:border-primary focus:ring-1 sm:w-64"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-10">
        {paged.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card py-16 text-center">
            <p className="text-muted-foreground">Nie znaleziono artykułów pasujących do kryteriów.</p>
            <button
              type="button"
              onClick={() => {
                setActive("Wszystkie");
                setQuery("");
                setPage(1);
              }}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Wyczyść filtry
            </button>
          </div>
        ) : (
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
                  <div className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {p.category}
                  </div>
                  <h2 className="mt-3 text-base font-semibold leading-snug">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">
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
                    className="mt-4 inline-flex items-center gap-1 self-end text-primary hover:opacity-80"
                    aria-label={`Czytaj więcej: ${p.title}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {paged.length > 0 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition hover:text-primary disabled:opacity-40"
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
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground/80 hover:text-primary")
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition hover:text-primary disabled:opacity-40"
              aria-label="Następna strona"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-10">
        <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-secondary px-8 py-8 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div>
            <h2 className="text-xl font-bold">Masz pomysł na projekt?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Napisz lub zadzwoń – chętnie pomogę.</p>
          </div>
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
              <Mail className="h-4 w-4" />
            </div>
            <span className="min-w-0 truncate text-sm">sebjara.ghoters@gmail.com</span>
          </div>
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-sm">+48 576 309 671</span>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Wyślij zapytanie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center">
            <Logo height={32} />
          </Link>
          <div className="text-xs text-muted-foreground">© 2024 Wszelkie prawa zastrzeżone.</div>
          <div className="flex items-center gap-4 text-primary">
            <Instagram className="h-4 w-4" />
            <span className="text-xs font-bold">A</span>
            <Linkedin className="h-4 w-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
