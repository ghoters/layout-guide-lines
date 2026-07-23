import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Settings, Instagram, Linkedin, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts, blogCategories, type BlogCategory } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog o projektowaniu 3D i druku 3D | 3dmodele.pl" },
      { name: "description", content: "Porady, case studies i praktyczne wskazówki ze świata projektowania 3D, druku 3D, wizualizacji oraz tworzenia modeli do gier." },
      { property: "og:title", content: "Blog o projektowaniu 3D i druku 3D | 3dmodele.pl" },
      { property: "og:description", content: "Porady, case studies i praktyczne wskazówki ze świata projektowania 3D, druku 3D, wizualizacji oraz tworzenia modeli do gier." },
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
          name: "Blog 3dmodele.pl",
          url: "https://www.3dmodele.pl/blog",
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `https://www.3dmodele.pl/blog/${p.slug}`,
            datePublished: p.date,
            image: `https://www.3dmodele.pl${p.image.url}`,
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

function Blog() {
  const [activeCategory, setActiveCategory] = useState<"Wszystkie" | BlogCategory>("Wszystkie");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (activeCategory === "Wszystkie" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const pills: ("Wszystkie" | BlogCategory)[] = ["Wszystkie", ...blogCategories];

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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-6 pb-8 pt-8 lg:grid-cols-[1.4fr_1fr] lg:pb-16 lg:pt-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              BLOG
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Blog o projektowaniu <span className="text-[var(--brand)]">3D</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Porady, case studies i praktyczne wskazówki ze świata projektowania 3D, druku 3D, wizualizacji oraz tworzenia modeli do gier.
            </p>
          </div>

          {/* Decorative 3D icon + dot pattern */}
          <div className="relative hidden h-[260px] items-center justify-center lg:flex">
            <DotPattern className="absolute -left-6 top-2 h-24 w-40 text-[var(--brand)]/25" />
            <DotPattern className="absolute -right-2 bottom-4 h-24 w-40 text-[var(--brand)]/25" />
            <div className="absolute right-8 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[var(--brand-soft)] blur-2xl" />
            <img
              src="/assets/blog/hero-icon.png"
              alt=""
              aria-hidden="true"
              width={260}
              height={260}
              className="relative z-10 h-64 w-64 object-contain drop-shadow-[0_20px_40px_rgba(120,80,220,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {pills.map((c) => {
            const active = activeCategory === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setActiveCategory(c);
                  setPage(1);
                }}
                className={
                  "rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm " +
                  (active
                    ? "border-[var(--brand)] bg-[var(--brand)] text-primary-foreground shadow-sm"
                    : "border-border bg-card text-foreground/80 hover:border-[var(--brand)]/40 hover:text-foreground")
                }
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        {visible.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
            Brak artykułów w tej kategorii.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block h-[190px] w-full overflow-hidden">
                  <img
                    src={p.image.url}
                    alt={p.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="inline-flex w-fit items-center rounded-full bg-[var(--brand-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand)]">
                    {p.category}
                  </div>
                  <h2 className="mt-3 text-sm font-semibold leading-snug">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-[var(--brand)]">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{p.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between pt-4 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(p.date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {p.readingMinutes} min
                      </span>
                    </div>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      aria-label={`Czytaj: ${p.title}`}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-primary-foreground"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Paginacja">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 disabled:cursor-not-allowed disabled:opacity-40 hover:border-[var(--brand)]/40"
              aria-label="Poprzednia strona"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === currentPage;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={
                    "flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-xs font-semibold transition " +
                    (active
                      ? "bg-[var(--brand)] text-primary-foreground shadow-sm"
                      : "border border-border bg-card text-foreground/70 hover:border-[var(--brand)]/40")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {n}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 disabled:cursor-not-allowed disabled:opacity-40 hover:border-[var(--brand)]/40"
              aria-label="Następna strona"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}
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

function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 96" fill="currentColor" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 10 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={4 + c * 16} cy={4 + r * 16} r={2} />
        )),
      )}
    </svg>
  );
}
