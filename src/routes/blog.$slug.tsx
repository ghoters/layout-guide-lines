import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Settings, Instagram, Linkedin, Mail, Phone, ChevronRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artykuł niedostępny — 3dmodele.pl" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `https://www.3dmodele.pl/blog/${params.slug}`;
    const image = `https://www.3dmodele.pl${post.image.url}`;
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
        { property: "article:section", content: post.category },
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            image,
            datePublished: post.date,
            mainEntityOfPage: url,
            articleSection: post.category,
            keywords: post.keyword,
            author: { "@type": "Person", name: "3dmodele.pl" },
            publisher: {
              "@type": "Organization",
              name: "3dmodele.pl",
              url: "https://www.3dmodele.pl",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.3dmodele.pl/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.3dmodele.pl/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPost,
});

const navLinks = [
  { label: "Strona główna", to: "/" as const },
  { label: "Realizacje", to: "/realizacje" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

function SiteHeader() {
  return (
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
  );
}

function SiteFooter() {
  return (
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
  );
}

function PostNotFound() {
  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[800px] px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Nie znaleziono artykułu</h1>
        <p className="mt-3 text-sm text-muted-foreground">Artykuł, którego szukasz, nie istnieje lub został przeniesiony.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Wróć do bloga <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = related.length ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      <SiteHeader />

      <article className="mx-auto max-w-[820px] px-6 pb-16 pt-6">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[var(--brand)]">Strona główna</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/blog" className="hover:text-[var(--brand)]">Blog</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/80">{post.title}</span>
        </nav>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand)]">
          {post.category}
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {post.h1}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}</time>
          <span>•</span>
          <span>{post.readingMinutes} min czytania</span>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <img
            src={post.image.url}
            alt={post.image.alt}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/90">{post.intro}</p>

        {post.sections.map((s) => {
          const Heading = s.level === 3 ? "h3" : "h2";
          return (
            <section key={s.heading} className="mt-8">
              <Heading className={s.level === 3 ? "text-lg font-semibold" : "text-2xl font-bold tracking-tight"}>
                {s.heading}
              </Heading>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-foreground/90">{p}</p>
              ))}
            </section>
          );
        })}

        {/* FAQ */}
        {post.faq.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">Najczęściej zadawane pytania</h2>
            <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
              {post.faq.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                    {f.q}
                    <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 rounded-2xl bg-[var(--brand-soft)] p-8">
          <h2 className="text-xl font-bold">Chcesz zamówić projekt 3D?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {post.cta ?? "Masz pomysł na model 3D? Skontaktuj się ze mną i otrzymaj bezpłatną wycenę projektu."}
          </p>
          <Link
            to="/kontakt"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Wyślij zapytanie <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </article>

      {/* Related */}
      {fallback.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <h2 className="mb-6 text-xl font-bold tracking-tight">Zobacz również</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallback.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-border bg-card">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block h-[180px] w-full overflow-hidden">
                  <img src={p.image.url} alt={p.image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
                <div className="p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--brand)]">{p.category}</div>
                  <h3 className="mt-2 text-sm font-semibold">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-[var(--brand)]">{p.title}</Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Contact strip */}
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

      <SiteFooter />
    </div>
  );
}
