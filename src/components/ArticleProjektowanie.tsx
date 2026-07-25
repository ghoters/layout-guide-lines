import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  Settings,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Box,
  CheckCheck,
  FileCheck2,
  Calendar,
  Clock,
  User,
  FolderOpen,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { blogPosts } from "@/lib/blog";

const navLinks = [
  { label: "Strona główna", to: "/" as const },
  { label: "Realizacje", to: "/realizacje" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

const toc = [
  { id: "kontakt", label: "1. Kontakt i analiza potrzeb" },
  { id: "szkice", label: "2. Szkice i koncepcja" },
  { id: "modelowanie", label: "3. Modelowanie 3D" },
  { id: "weryfikacja", label: "4. Weryfikacja i poprawki" },
  { id: "pliki", label: "5. Przygotowanie plików" },
  { id: "opcjonalnie", label: "6. Opcjonalnie: druk 3D lub wizualizacja" },
];

const analizaPunkty = [
  "do czego ma służyć model,",
  "w jakiej technologii będzie wykonany (druk 3D, produkcja, wizualizacja, gra),",
  "jakie są wymagania techniczne,",
  "jaki jest oczekiwany termin realizacji.",
];

const steps = [
  { icon: Lightbulb, title: "Koncepcja", desc: "Pomysł i analiza" },
  { icon: Box, title: "Model 3D", desc: "Tworzenie modelu" },
  { icon: CheckCheck, title: "Weryfikacja", desc: "Sprawdzenie wymagań" },
  { icon: FileCheck2, title: "Gotowy projekt", desc: "Pliki do użycia" },
];

const formats = [
  { format: "STL", use: "Druk 3D", desc: "Najczęściej używany format do druku 3D." },
  { format: "STEP / STP", use: "Produkcja", desc: "Format CAD do produkcji i obróbki CNC." },
  { format: "OBJ / FBX", use: "Gry i wizualizacje", desc: "Formaty używane w silnikach gier i programach 3D." },
  { format: "GLTF", use: "Web i VR/AR", desc: "Nowoczesny format do prezentacji online." },
];

function Header() {
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

function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
              <Settings className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-wide">3dmodele.pl</span>
          </Link>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Projektowanie 3D, druk 3D, modele do gier i wizualizacje. Od pomysłu do gotowego modelu.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Nawigacja</div>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-[var(--brand)]">Strona główna</Link></li>
            <li><Link to="/realizacje" className="hover:text-[var(--brand)]">Realizacje</Link></li>
            <li><Link to="/blog" className="hover:text-[var(--brand)]">Blog</Link></li>
            <li><Link to="/kontakt" className="hover:text-[var(--brand)]">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Usługi</div>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li>Projektowanie 3D</li>
            <li>Druk 3D</li>
            <li>Modele do gier</li>
            <li>Wizualizacje 3D</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Kontakt</div>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li>sebjara.ghoters@gmail.com</li>
            <li>+48 576 309 671</li>
          </ul>
          <div className="mt-4 flex items-center gap-3 text-[var(--brand)]">
            <Instagram className="h-4 w-4" />
            <Linkedin className="h-4 w-4" />
            <Mail className="h-4 w-4" />
            <Phone className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 text-[11px] text-muted-foreground">
          <span>© 2025 3dmodele.pl. Wszystkie prawa zastrzeżone.</span>
          <div className="flex gap-4">
            <span>Polityka prywatności</span>
            <span>Regulamin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 flex items-center gap-3 text-2xl font-bold tracking-tight">
      <span className="flex h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
      {children}
    </h2>
  );
}

export default function ArticleProjektowanie() {
  const related = blogPosts
    .filter((p) => p.slug !== "jak-wyglada-proces-projektowania-modelu-3d")
    .slice(0, 3);

  const [activeId, setActiveId] = useState<string>(toc[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    toc.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pb-6 pt-2">
        <nav className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[var(--brand)]">Strona główna</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/blog" className="hover:text-[var(--brand)]">Blog</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/80">Jak wygląda proces projektowania modelu 3D na zamówienie?</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Projektowanie 3D
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Jak wygląda proces projektowania modelu 3D na zamówienie?
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Zobacz, jak krok po kroku powstaje profesjonalny model 3D – od pomysłu,
              przez projekt, aż po gotowy plik do druku lub produkcji.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--brand)]" />
                15 stycznia 2025
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--brand)]" />
                6 min czytania
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                  <User className="h-3.5 w-3.5" />
                </span>
                Konrad Żurawski
              </span>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-4 top-6 grid grid-cols-4 gap-2 opacity-40"
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]/40" />
              ))}
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-[var(--brand-soft)]">
              <img
                src="/assets/blog-projektowanie.jpg"
                alt="Model 3D — proces projektowania"
                className="h-[340px] w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          {/* Article */}
          <article className="min-w-0">
            <p className="text-base leading-relaxed text-foreground/90">
              Projektowanie modelu 3D na zamówienie to proces, który łączy kreatywność, wiedzę techniczną
              i nowoczesne narzędzia. Każdy projekt jest inny, ale istnieje sprawdzona ścieżka, którą
              przechodzimy wspólnie z klientem, aby osiągnąć najlepszy efekt.
            </p>

            {/* 1 */}
            <div className="mt-10">
              <SectionHeading id="kontakt">1. Kontakt i analiza potrzeb</SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Wszystko zaczyna się od rozmowy. Chcemy jak najlepiej zrozumieć Twoje potrzeby, cel projektu
                oraz jego przeznaczenie.
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-[var(--brand-soft)]/50 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">Na tym etapie ustalamy:</div>
                    <ul className="mt-4 space-y-3 text-sm">
                      {analizaPunkty.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                          <span className="text-foreground/90">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden shrink-0 sm:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-lg">
                      <MessageSquare className="h-7 w-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="mt-12">
              <SectionHeading id="szkice">2. Szkice i koncepcja</SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Na podstawie zebranych informacji przygotowujemy wstępną koncepcję. Może to być szkic 2D,
                model poglądowy lub kilka propozycji rozwiązania.
              </p>
            </div>

            {/* 3 */}
            <div className="mt-12">
              <SectionHeading id="modelowanie">3. Modelowanie 3D</SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Gdy koncepcja zostanie zaakceptowana, przechodzimy do tworzenia szczegółowego modelu 3D
                w programach takich jak Fusion 360, Blender, SolidWorks czy ZBrush.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="rounded-2xl border border-border bg-card p-5 text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-sm font-semibold">{s.title}</div>
                      <div className="mt-1 text-[11px] text-muted-foreground">{s.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4 */}
            <div className="mt-12">
              <SectionHeading id="weryfikacja">4. Weryfikacja i poprawki</SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Przed finalizacją przedstawiamy projekt do akceptacji. Na tym etapie wprowadzamy ewentualne
                poprawki, aby model w 100% spełniał Twoje oczekiwania.
              </p>
            </div>

            {/* 5 */}
            <div className="mt-12">
              <SectionHeading id="pliki">5. Przygotowanie plików</SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Gotowy model eksportujemy do odpowiednich formatów, takich jak STL, STEP, OBJ, FBX
                czy GLTF – w zależności od zastosowania.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="border-b border-border bg-[var(--brand-soft)]/40 px-5 py-3 text-xs font-semibold">
                  Najczęściej dostarczamy pliki w formatach:
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="px-5 py-3 font-semibold">Format</th>
                        <th className="px-5 py-3 font-semibold">Zastosowanie</th>
                        <th className="px-5 py-3 font-semibold">Opis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formats.map((f) => (
                        <tr key={f.format} className="border-b border-border last:border-0">
                          <td className="px-5 py-3 font-semibold text-[var(--brand)]">{f.format}</td>
                          <td className="px-5 py-3 text-foreground/90">{f.use}</td>
                          <td className="px-5 py-3 text-muted-foreground">{f.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="mt-12">
              <SectionHeading id="opcjonalnie">6. Opcjonalnie: druk 3D lub wizualizacja</SectionHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Na życzenie możemy wykonać wydruk 3D gotowego modelu lub przygotować fotorealistyczne
                wizualizacje produktu.
              </p>
            </div>

            {/* Inline CTA */}
            <div className="mt-12 rounded-2xl bg-[var(--brand-soft)] p-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold">Potrzebujesz projektu 3D?</div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Opisz swój pomysł, a my zajmiemy się resztą – od projektu po gotowy efekt.
                    </p>
                  </div>
                </div>
                <Link
                  to="/kontakt"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Wyślij zapytanie <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                to="/blog"
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5" /> Poprzedni artykuł
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  FDM czy SLA – którą technologię druku 3D wybrać?
                </div>
              </Link>
              <Link
                to="/blog/$slug"
                params={{ slug: "jak-przygotowac-model-do-druku-3d" }}
                className="group rounded-2xl border border-border bg-card p-5 text-right transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Następny artykuł <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  Jak przygotować model 3D do druku?
                </div>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-sm font-semibold">Spis treści</div>
              <ul className="mt-4 space-y-2">
                {toc.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={
                          "flex items-start gap-3 rounded-lg px-3 py-2 text-xs transition " +
                          (active
                            ? "bg-[var(--brand-soft)] text-[var(--brand)] font-semibold"
                            : "text-foreground/70 hover:text-[var(--brand)]")
                        }
                      >
                        <span
                          className={
                            "mt-0.5 h-4 w-0.5 shrink-0 rounded " +
                            (active ? "bg-[var(--brand)]" : "bg-transparent")
                          }
                        />
                        <span>{s.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl bg-[var(--brand-soft)] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="mt-4 text-sm font-bold">Masz pomysł na projekt?</div>
              <p className="mt-2 text-xs text-muted-foreground">
                Skontaktuj się ze mną i otrzymaj bezpłatną wycenę.
              </p>
              <Link
                to="/kontakt"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-4 py-2.5 text-xs font-medium text-primary-foreground hover:opacity-90"
              >
                Wyślij zapytanie <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <ul className="space-y-4 text-xs">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <FolderOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Kategoria</div>
                    <div className="font-semibold">Projektowanie 3D</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Data publikacji</div>
                    <div className="font-semibold">15 stycznia 2025</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Czas czytania</div>
                    <div className="font-semibold">6 minut</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Autor</div>
                    <div className="font-semibold">Konrad Żurawski</div>
                  </div>
                </li>
              </ul>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-semibold">Powiązane artykuły</div>
                <ul className="mt-4 space-y-4">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="group flex items-start gap-3"
                      >
                        <img
                          src={p.image.url}
                          alt={p.image.alt}
                          className="h-14 w-14 shrink-0 rounded-lg object-cover"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <div className="line-clamp-2 text-xs font-semibold leading-snug group-hover:text-[var(--brand)]">
                            {p.title}
                          </div>
                          <div className="mt-1 text-[10px] text-muted-foreground">
                            {new Date(p.date).toLocaleDateString("pl-PL", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/blog"
                  className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-[var(--brand)] px-4 py-2 text-xs font-medium text-[var(--brand)] hover:bg-[var(--brand-soft)]"
                >
                  Zobacz wszystkie artykuły <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}