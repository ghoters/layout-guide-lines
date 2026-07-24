import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  Settings,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  Calendar,
  Clock,
  User,
  Quote,
  Info,
  Lightbulb,
} from "lucide-react";
import {
  blogPosts,
  buildToc,
  getAdjacentPosts,
  getPostBySlug,
  getRelatedPosts,
  sectionId,
  type BlogPost,
  type BlogSection,
} from "@/lib/blog";

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
        { name: "twitter:title", content: post.metaTitle },
        { name: "twitter:description", content: post.metaDescription },
        { name: "twitter:image", content: image },
        { property: "article:section", content: post.category },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author?.name ?? "3dmodele.pl" },
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
            dateModified: post.date,
            mainEntityOfPage: url,
            articleSection: post.category,
            keywords: post.keyword,
            wordCount: estimateWordCount(post),
            author: {
              "@type": "Person",
              name: post.author?.name ?? "3dmodele.pl",
            },
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
  component: BlogPostPage,
});

function estimateWordCount(post: BlogPost): number {
  const text = [post.intro, ...post.sections.flatMap((s) => s.paragraphs ?? [])].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

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

function Callout({ callout }: { callout: NonNullable<BlogSection["callout"]> }) {
  const Icon = callout.style === "tip" ? Lightbulb : callout.style === "quote" ? Quote : Info;
  const isQuote = callout.style === "quote";
  return (
    <aside
      className={
        "mt-6 flex gap-4 rounded-2xl border p-5 " +
        (isQuote
          ? "border-[var(--brand)]/30 bg-[var(--brand-soft)]"
          : "border-border bg-card")
      }
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-primary-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className={"text-sm leading-relaxed " + (isQuote ? "italic text-foreground/90" : "text-foreground/90")}>
          {callout.text}
        </p>
        {callout.author && (
          <p className="mt-2 text-xs font-semibold text-[var(--brand)]">— {callout.author}</p>
        )}
      </div>
    </aside>
  );
}

function SectionList({ list }: { list: NonNullable<BlogSection["list"]> }) {
  const Tag = list.style === "number" ? "ol" : "ul";
  return (
    <Tag
      className={
        "mt-4 space-y-2 pl-5 text-sm leading-relaxed text-foreground/90 " +
        (list.style === "number" ? "list-decimal" : "list-disc")
      }
    >
      {list.items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </Tag>
  );
}

function SectionTable({ table }: { table: NonNullable<BlogSection["table"]> }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-[var(--brand-soft)] text-left text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
          <tr>
            {table.headers.map((h) => (
              <th key={h} className="px-4 py-3">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {table.rows.map((row, i) => (
            <tr key={i} className="text-foreground/90">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionImage({ image }: { image: NonNullable<BlogSection["image"]> }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-border">
      <img src={image.url} alt={image.alt} loading="lazy" className="h-auto w-full object-cover" />
      {image.caption && (
        <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">{image.caption}</figcaption>
      )}
    </figure>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const toc = buildToc(post);
  const { prev, next } = getAdjacentPosts(post.slug);
  const related = getRelatedPosts(post.slug, 3);
  const author = post.author;

  const publishedDate = new Date(post.date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-[1200px] px-6 pt-4">
        <nav className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[var(--brand)]">Strona główna</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/blog" className="hover:text-[var(--brand)]">Blog</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-foreground/80">{post.title}</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1200px] px-6 pt-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand)]">
          {post.category}
        </div>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          {post.h1}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          {author && (
            <span className="inline-flex items-center gap-2">
              {author.avatar ? (
                <img src={author.avatar} alt={author.name} className="h-6 w-6 rounded-full object-cover" />
              ) : (
                <User className="h-3.5 w-3.5" />
              )}
              <span className="font-semibold text-foreground/80">{author.name}</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.date}>{publishedDate}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingMinutes} min czytania
          </span>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <img
            src={post.image.url}
            alt={post.image.alt}
            className="h-auto w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* CONTENT + TOC */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="min-w-0">
            <p className="text-base leading-relaxed text-foreground/90">{post.intro}</p>

            {post.sections.map((s) => {
              const id = sectionId(s.heading);
              const Heading = s.level === 3 ? "h3" : "h2";
              return (
                <section key={id} id={id} className="mt-10 scroll-mt-24">
                  <Heading className={s.level === 3 ? "text-lg font-semibold" : "text-2xl font-bold tracking-tight"}>
                    {s.heading}
                  </Heading>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-3 text-sm leading-relaxed text-foreground/90">{p}</p>
                  ))}
                  {s.list && <SectionList list={s.list} />}
                  {s.table && <SectionTable table={s.table} />}
                  {s.image && <SectionImage image={s.image} />}
                  {s.callout && <Callout callout={s.callout} />}
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
              <h2 className="text-xl font-bold">Potrzebujesz projektu 3D?</h2>
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

            {/* PREV / NEXT */}
            {(prev || next) && (
              <nav className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Nawigacja między artykułami">
                {prev ? (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: prev.slug }}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:border-[var(--brand)]/40"
                  >
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      <ArrowLeft className="h-3 w-3" /> Poprzedni
                    </span>
                    <span className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">{prev.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    to="/blog/$slug"
                    params={{ slug: next.slug }}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-5 text-right transition hover:border-[var(--brand)]/40"
                  >
                    <span className="inline-flex items-center justify-end gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Następny <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">{next.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            )}
          </article>

          {/* STICKY TOC */}
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-6 rounded-2xl border border-border bg-card p-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand)]">
                  Spis treści
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {toc.map((t) => (
                    <li key={t.id} className={t.level === 3 ? "pl-4" : ""}>
                      <a
                        href={`#${t.id}`}
                        className="block leading-snug text-foreground/80 transition hover:text-[var(--brand)]"
                      >
                        {t.heading}
                      </a>
                    </li>
                  ))}
                </ul>
                {author && (
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    {author.avatar && (
                      <img src={author.avatar} alt={author.name} className="h-10 w-10 rounded-full object-cover" />
                    )}
                    <div className="min-w-0">
                      <div className="truncate text-xs font-semibold">{author.name}</div>
                      {author.role && (
                        <div className="truncate text-[11px] text-muted-foreground">{author.role}</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <h2 className="mb-6 text-xl font-bold tracking-tight">Powiązane artykuły</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-border bg-card">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block h-[180px] w-full overflow-hidden">
                  <img
                    src={p.image.url}
                    alt={p.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--brand)]">
                    {p.category}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-[var(--brand)]">
                      {p.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT STRIP */}
      <section className="mx-auto max-w-[1200px] px-6 pb-10">
        <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-[var(--brand-soft)] px-8 py-8 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div>
            <h2 className="text-xl font-bold">Masz pomysł na projekt?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Napisz lub zadzwoń - chętnie pomogę.</p>
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

// Ensure blogPosts is referenced so tree-shaking preserves the JSON glob during build.
void blogPosts;
