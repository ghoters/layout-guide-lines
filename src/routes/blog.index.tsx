import { MobileNav } from "@/components/MobileNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Box,
  Calendar,
  ChevronDown,
  Clock,
  Cuboid,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  Phone,
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

const filters: Array<"Wszystkie" | BlogCategory> = ["Wszystkie", ...blogCategories];

const categoryIcons = {
  "Projektowanie 3D": Lightbulb,
  "Druk 3D": Cuboid,
  Poradniki: BookOpen,
  "Modele 3D": Box,
} satisfies Partial<Record<BlogCategory, typeof Box>>;

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
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filtered = useMemo(() => {
    const list = active === "Wszystkie" ? blogPosts : blogPosts.filter((p) => p.category === active);
    return sortOrder === "newest" ? [...list].reverse() : list;
  }, [active, sortOrder]);

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      {/* NAV */}
      <header className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center" aria-label="3dmodele.pl — strona główna">
          <Logo height={36} />
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
      <MobileNav />

      <main>
        {/* HERO */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-12 lg:pb-12 lg:pt-14">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  BLOG
                </div>
                <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Blog o projektowaniu <span className="text-[var(--brand)]">3D</span></h1>
                <p className="mt-3 max-w-[590px] text-sm leading-6 text-muted-foreground">
                  Porady, case studies i praktyczne wskazówki ze świata projektowania 3D,
                  druku 3D, wizualizacji oraz tworzenia modeli do gier.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[var(--brand-soft)] px-5 py-4">
                <BookOpen className="h-5 w-5 shrink-0 text-[var(--brand)]" />
                <p className="text-xs leading-5 text-muted-foreground">
                  <strong className="block text-foreground">{blogPosts.length} artykułów o projektowaniu 3D</strong>
                  praktyczna wiedza o modelowaniu i druku
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS AND POSTS */}
        <section className="mx-auto max-w-[1200px] px-6 pb-12">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" aria-label="Kategorie artykułów">
              {filters.map((f) => {
                const isActive = f === active;
                const Icon =
                  f === "Wszystkie"
                    ? null
                    : (categoryIcons as Partial<Record<BlogCategory, typeof Box>>)[f] ?? Box;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActive(f)}
                    className={`inline-flex h-10 items-center gap-2 rounded-lg border text-xs font-semibold transition-colors ${
                      Icon ? "px-4" : "px-5"
                    } ${
                      isActive
                        ? "border-[var(--brand)] bg-[var(--brand)] text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-[var(--brand)]"
                    }`}
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                    {f}
                  </button>
                );
              })}
            </div>
            <label className="relative w-fit">
              <span className="sr-only">Sortowanie artykułów</span>
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value as "newest" | "oldest")}
                className="h-10 appearance-none rounded-lg border border-border bg-card py-0 pl-4 pr-10 text-xs font-semibold text-foreground outline-none transition-colors hover:border-[var(--brand)] focus:border-[var(--brand)]"
              >
                <option value="newest">Najnowsze</option>
                <option value="oldest">Najstarsze</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <article
                key={p.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-xl"
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
                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-[11px] font-medium text-muted-foreground">
                    <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      {formatDate(p.date)}
                    </span>
                    <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      {p.readingMinutes} min
                    </span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)] transition-colors hover:bg-[var(--brand)] hover:text-primary-foreground"
                      aria-label={`Czytaj więcej: ${p.title}`}
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1200px] px-6 pb-12">
          <div className="grid items-center gap-5 rounded-lg bg-[var(--brand-soft)] px-5 py-6 sm:px-7 lg:grid-cols-[auto_minmax(0,1.2fr)_1fr_1fr_auto]">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background text-[var(--brand)] ring-4 ring-background/60">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Masz pomysł na projekt?</h2>
              <p className="mt-1 max-w-[390px] text-xs leading-5 text-muted-foreground">
                Niezależnie od tego, czy potrzebujesz modelu do druku 3D, części technicznej,
                assetu do gry czy wizualizacji – przygotuję projekt dopasowany do Twoich potrzeb.
              </p>
            </div>
            <a href="mailto:sebjara.ghoters@gmail.com" className="flex min-w-0 items-center gap-3 text-xs">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
                <Mail className="h-4 w-4" />
              </span>
              <span className="min-w-0 truncate">sebjara.ghoters@gmail.com</span>
            </a>
            <a href="tel:+48576309671" className="flex items-center gap-3 text-xs">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
                <Phone className="h-4 w-4" />
              </span>
              <span>+48 576 309 671</span>
            </a>
            <Link
              to="/kontakt"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-5 text-xs font-bold text-primary-foreground hover:opacity-90"
            >
              Opowiedz o projekcie <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center">
            <Logo height={32} />
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
