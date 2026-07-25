import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Settings, Instagram, Linkedin, Mail, Phone, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog";

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

function Blog() {
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

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
            <BookOpen className="h-3.5 w-3.5" />
            BLOG
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Blog o <span className="text-[var(--brand)]">projektowaniu 3D</span> i druku 3D
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Praktyczne poradniki, inspiracje i case study dotyczące projektowania 3D, modelowania 3D oraz
            druku 3D FDM i SLA. Dowiedz się, jak powstają profesjonalne modele 3D i jak wykorzystać druk 3D
            w biznesie oraz projektach indywidualnych.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="block h-[220px] w-full overflow-hidden"
              >
                <img
                  src={p.image.url}
                  alt={p.image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand)]">
                  {p.category}
                </div>
                <h2 className="mt-3 text-base font-semibold leading-snug">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="hover:text-[var(--brand)]"
                  >
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] hover:opacity-80"
                >
                  Czytaj więcej <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
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
