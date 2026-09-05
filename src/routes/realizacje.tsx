import { MobileNav } from "@/components/MobileNav";
import { createFileRoute, Link, useSearch, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Box,
  ChevronDown,
  Cuboid,
  Gamepad2,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { categories, projects, type Category, type Project } from "@/lib/projects";
import { Lightbox } from "@/components/Lightbox";
import { Logo } from "@/components/Logo";
import { z } from "zod";

const searchSchema = z.object({
  open: z.string().optional(),
});

export const Route = createFileRoute("/realizacje")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Realizacje — Projektowanie 3D" },
      {
        name: "description",
        content:
          "Przegląd wybranych realizacji: modele 3D do druku, game assetów, wizualizacji i ilustracji.",
      },
      { property: "og:title", content: "Realizacje — Projektowanie 3D" },
      {
        property: "og:description",
        content:
          "Przegląd wybranych realizacji: modele 3D do druku, game assetów, wizualizacji i ilustracji.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.3dmodele.pl/realizacje" },
    ],
    links: [{ rel: "canonical", href: "https://www.3dmodele.pl/realizacje" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Realizacje — Projektowanie 3D",
          url: "https://www.3dmodele.pl/realizacje",
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            about: p.tag,
            image: `https://www.3dmodele.pl${p.fullImage.url}`,
          })),
        }),
      },
    ],
  }),
  component: Realizacje,
});

const navLinks = [
  { label: "Strona główna", to: "/" },
  { label: "Realizacje", to: "/realizacje" },
  { label: "Blog", to: "/blog" },
  { label: "Kontakt", to: "/kontakt" },
];

function Realizacje() {
  const { open } = useSearch({ from: "/realizacje" });
  const navigate = useNavigate({ from: "/realizacje" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<"Wszystkie" | Category>("Wszystkie");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    if (open) {
      const found = projects.find((p) => p.title === open) ?? null;
      setSelectedProject(found);
    } else {
      setSelectedProject(null);
    }
  }, [open]);

  const openProject = (p: Project) => {
    navigate({ to: "/realizacje", search: { open: p.title } });
  };

  const closeLightbox = () => {
    navigate({ to: "/realizacje", search: {} });
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Wszystkie" || project.category === activeCategory,
  );
  const visibleProjects = sortOrder === "newest" ? filteredProjects : [...filteredProjects].reverse();

  const categoryIcons = {
    "Druk 3D": Cuboid,
    CAD: Box,
    Gry: Gamepad2,
    Wizualizacje: Sparkles,
  } satisfies Record<Category, typeof Box>;

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      {/* NAV */}
      <header className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center" aria-label="3dmodele.pl — strona główna">
          <Logo height={36} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
            l.to.startsWith("#") ? (
              <a
                key={l.label}
                href={l.to}
                className="text-sm text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </a>
            ) : (
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
            )
          )}
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
                  PORTFOLIO
                </div>
                <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Realizacje</h1>
                <p className="mt-3 max-w-[590px] text-sm leading-6 text-muted-foreground">
                  Zobacz wybrane projekty 3D wykonane na zamówienie – od modeli do druku 3D,
                  przez części techniczne i CAD, aż po assety do gier oraz wizualizacje.
                  Każdy projekt powstaje indywidualnie, na podstawie Twoich potrzeb.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[var(--brand-soft)] px-5 py-4">
                <Sparkles className="h-5 w-5 shrink-0 text-[var(--brand)]" />
                <p className="text-xs leading-5 text-muted-foreground">
                  <strong className="block text-foreground">1000+ zrealizowanych projektów</strong>
                  dla klientów indywidualnych i firm
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS AND PROJECTS */}
        <section className="mx-auto max-w-[1200px] px-6 pb-12">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" aria-label="Kategorie realizacji">
              <button
                type="button"
                onClick={() => setActiveCategory("Wszystkie")}
                className={`inline-flex h-10 items-center rounded-lg border px-5 text-xs font-semibold transition-colors ${
                  activeCategory === "Wszystkie"
                    ? "border-[var(--brand)] bg-[var(--brand)] text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-[var(--brand)]"
                }`}
              >
                Wszystkie
              </button>
              {categories.map((category) => {
                const Icon = categoryIcons[category];
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-xs font-semibold transition-colors ${
                      activeCategory === category
                        ? "border-[var(--brand)] bg-[var(--brand)] text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-[var(--brand)]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category}
                  </button>
                );
              })}
            </div>
            <label className="relative w-fit">
              <span className="sr-only">Sortowanie realizacji</span>
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
            {visibleProjects.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => openProject(p)}
              className="group flex min-h-[390px] cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card text-left transition-[border-color,box-shadow] hover:border-[var(--brand)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={p.image.url}
                  alt={`${p.title} — ${p.desc}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-md bg-[var(--brand)] px-2 py-1 text-[10px] font-bold text-primary-foreground">
                  {p.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h2 className="text-sm font-bold">{p.title}</h2>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">{p.desc}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-bold text-[var(--brand)] transition-colors group-hover:text-foreground">
                  Zobacz projekt <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          ))}
          </div>

          {selectedProject && <Lightbox project={selectedProject} onClose={closeLightbox} />}
        </section>

        {/* CTA */}
        <section id="kontakt" className="mx-auto max-w-[1200px] px-6 pb-12">
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
