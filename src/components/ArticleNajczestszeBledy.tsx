import { MobileNav } from "@/components/MobileNav";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  Calendar,
  Clock,
  User,
  Sparkles,
  Plus,
  AlertTriangle,
  Ruler,
  Box,
  Layers,
  Compass,
  Minimize2,
  RotateCw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { blogPosts } from "@/lib/blog";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Strona główna", to: "/" as const },
  { label: "Realizacje", to: "/realizacje" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

const toc = [
  { id: "wprowadzenie", label: "Wprowadzenie" },
  { id: "cienkie-scianki", label: "Zbyt cienkie ścianki" },
  { id: "tolerancje", label: "Brak tolerancji" },
  { id: "fasetki", label: "Zapomniane fasetki" },
  { id: "geometria", label: "Błędy geometrii" },
  { id: "orientacja", label: "Zła orientacja" },
  { id: "detale", label: "Zbyt małe detale" },
  { id: "podsumowanie", label: "Podsumowanie" },
  { id: "faq", label: "FAQ" },
];

const bledy = [
  {
    icon: AlertTriangle,
    title: "Zbyt cienkie ścianki",
    desc: "Cienkie ścianki pękają lub w ogóle nie drukują się poprawnie.",
    fix: "Dla FDM utrzymuj min. 1,2 mm, dla SLA min. 0,8 mm grubości.",
  },
  {
    icon: Ruler,
    title: "Brak tolerancji",
    desc: "Elementy łączone bez luzów nie pasują do siebie po wydruku.",
    fix: "Zostaw 0,2–0,4 mm luzu w zależności od technologii i materiału.",
  },
  {
    icon: Box,
    title: "Zapomniane fasetki",
    desc: "Brak faz lub zaokrągleń utrudnia montaż i osadzanie elementów.",
    fix: "Dodaj fazy o kącie 45° i szerokości 0,5–1 mm na pasowaniach.",
  },
  {
    icon: Layers,
    title: "Błędy geometrii",
    desc: "Dziury, odwrócone normalne i podwójne ściany psują wydruk.",
    fix: "Sprawdź model w slicerze lub narzędziu do naprawy meshy (Meshmixer, Netfabb).",
  },
  {
    icon: Compass,
    title: "Zła orientacja",
    desc: "Nieprawidłowe ułożenie na stole zwiększa liczbę podpór i pogarsza wygląd.",
    fix: "Ustaw model tak, aby najmniej detali było podpartych, a widoczne powierzchnie były gładkie.",
  },
  {
    icon: Minimize2,
    title: "Zbyt małe detale",
    desc: "Drobne elementy mogą zostać niedrukowalne lub zlane podczas druku.",
    fix: "Unikaj detali poniżej 0,6 mm wysokości i otworów mniejszych niż 0,8 mm w FDM.",
  },
];

const faq = [
  { q: "Czy każdy błąd geometrii da się naprawić?", a: "Większość błędów typu dziury czy odwrócone normalne można naprawić automatycznie w programach takich jak Meshmixer, Netfabb czy 3D Builder. Bardzo złożone uszkodzenia mogą wymagać ręcznej poprawy modelu." },
  { q: "Jaką grubość ścianki przyjąć dla druku FDM?", a: "Dla druku FDM zalecam minimum 1,2 mm. Im grubsze ścianki, tym wydruk jest wytrzymalszy, ale równocześnie rośnie czas i zużycie materiału." },
  { q: "Jak sprawdzić, czy tolerancje pasowań są dobre?", a: "Najlepiej wykonać próbny wydruk małego fragmentu pasowania lub przesymulować luz w programie CAD. Typowy luz dla FDM to 0,2–0,4 mm." },
  { q: "Czy fasetki są konieczne w każdym modelu?", a: "Nie. Fasetki dodaje się tam, gdzie elementy mają się ze sobą stykać, osadzać lub montować – ułatwiają to montaż i zmniejszają ryzyko uszkodzenia krawędzi." },
];

function Header() {
  return (
    <>
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
    </>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center" aria-label="3dmodele.pl — strona główna">
          <Logo height={32} />
        </Link>
        <div className="text-xs text-muted-foreground">© 2024 Wszelkie prawa zastrzeżone.</div>
        <div className="flex items-center gap-4 text-[var(--brand)]">
          <Instagram className="h-4 w-4" />
          <Linkedin className="h-4 w-4" />
          <Mail className="h-4 w-4" />
          <Phone className="h-4 w-4" />
        </div>
      </div>
    </footer>
  );
}

function NumberedHeading({ id, num, children }: { id: string; num: number; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 flex items-center gap-3 text-2xl font-bold tracking-tight">
      <span className="text-[var(--brand)]">{num}.</span>
      {children}
    </h2>
  );
}

export default function ArticleNajczestszeBledy() {
  const related = blogPosts
    .filter((p) => p.slug !== "najczestsze-bledy-w-projektowaniu-modeli-do-druku-3d")
    .slice(0, 3);

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lockRef = useRef(false);
  const lockTimer = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
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
          <span className="text-foreground/80">Najczęstsze błędy w projektowaniu modeli do druku 3D</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Poradniki
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Najczęstsze błędy w projektowaniu modeli do druku <span className="text-[var(--brand)]">3D</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Zbyt cienkie ścianki, zapomniane tolerancje, brak fasek — omawiam najczęstsze błędy w projektowaniu modeli do druku 3D i podpowiadam, jak ich unikać.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--brand)]" />
                5 lutego 2025
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--brand)]" />
                5 min czytania
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                  <User className="h-3.5 w-3.5" />
                </span>
                Autor: 3dmodele.pl
              </span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 grid grid-cols-8 gap-3 opacity-30"
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]/40" />
              ))}
            </div>
            <img
              src="/assets/blog-bledy-hero.jpg"
              alt="Czarny wydrukowany model 3D"
              className="relative max-h-[320px] w-auto rounded-3xl object-contain shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr_260px]">
          {/* TOC Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-sm font-semibold">Spis treści</div>
              <ul className="mt-4 space-y-1">
                {toc.map((s, i) => {
                  const active = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(s.id);
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 96;
                            lockRef.current = true;
                            if (lockTimer.current) window.clearTimeout(lockTimer.current);
                            lockTimer.current = window.setTimeout(() => {
                              lockRef.current = false;
                            }, 800);
                            window.scrollTo({ top: y, behavior: "smooth" });
                            history.replaceState(null, "", `#${s.id}`);
                            setActiveId(s.id);
                          }
                        }}
                        className={
                          "flex items-center gap-3 rounded-lg px-2 py-1.5 text-xs transition " +
                          (active
                            ? "bg-[var(--brand-soft)] text-[var(--brand)] font-semibold"
                            : "text-foreground/70 hover:text-[var(--brand)]")
                        }
                      >
                        <span
                          className={
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold " +
                            (active
                              ? "bg-[var(--brand)] text-white"
                              : "bg-[var(--brand-soft)] text-[var(--brand)]")
                          }
                        >
                          {i + 1}
                        </span>
                        <span>{s.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Article */}
          <article className="min-w-0">
            <div>
              <p className="text-base leading-relaxed text-foreground/90">
                Projektowanie modeli do druku 3D wymaga uwzględnienia specyficznych ograniczeń technologicznych.
                Nawet drobny błąd w geometrii może sprawić, że wydruk będzie słaby, nieestetyczny lub wręcz niemożliwy do wykonania.
                Poniżej znajdziesz najczęstsze problemy i praktyczne wskazówki, jak ich unikać.
              </p>
            </div>

            <div className="mt-12">
              <NumberedHeading id="wprowadzenie" num={1}>Wprowadzenie</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Druk 3D daje ogromne możliwości, ale nie wybacza wszystkiego. Slicer przygotuje plik na podstawie tego,
                co otrzyma — jeśli model jest źle zaprojektowany, drukarka nie poprawi błędów sama.
                Warto zatem poświęcić chwilę na analizę projektu przed wysłaniem go do druku.
              </p>
            </div>

            <div className="mt-12">
              <NumberedHeading id="cienkie-scianki" num={2}>Zbyt cienkie ścianki</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Jednym z najczęstszych problemów są ścianki o zbyt małej grubości. Drukarka może nie zdążyć uformować
                takiej powierzchni, co skutkuje pęknięciami, odkształceniami lub brakiem wydruku.
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-semibold text-[var(--brand)]">Rozwiązanie</div>
                <p className="mt-2 text-sm text-foreground/90">
                  Dla technologii FDM utrzymuj grubość ścianek na poziomie min. 1,2 mm. Dla druku żywicą (SLA/DLP) minimum to ok. 0,8 mm.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="tolerancje" num={3}>Brak tolerancji pasowań</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Jeśli projektujesz elementy, które mają się ze sobą łączyć, musisz uwzględnić luz. Materiał zawsze lekko rozszerza się podczas druku,
                a ściany mogą być grubsze niż w modelu cyfrowym.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--brand-soft)]/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="px-5 py-3 font-semibold">Technologia</th>
                        <th className="px-5 py-3 font-semibold">Zalecany luz</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-semibold">FDM</td>
                        <td className="px-5 py-3 text-foreground/90">0,2 – 0,4 mm</td>
                      </tr>
                      <tr className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-semibold">SLA / DLP</td>
                        <td className="px-5 py-3 text-foreground/90">0,1 – 0,2 mm</td>
                      </tr>
                      <tr className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-semibold">SLS</td>
                        <td className="px-5 py-3 text-foreground/90">0,2 – 0,3 mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="fasetki" num={4}>Zapomniane fasetki i zaokrąglenia</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Fasetki ułatwiają montaż i osadzanie elementów, a zaokrąglenia zmniejszają koncentrację naprężeń.
                Ich brak może prowadzić do trudności w składaniu lub pękania krawędzi.
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-semibold text-[var(--brand)]">Wskazówka</div>
                <p className="mt-2 text-sm text-foreground/90">
                  Dodawaj fazy o kącie 45° i szerokości 0,5–1 mm na krawędziach pasowań. W miejscach narażonych na naprężenia stosuj zaokrąglenia o promieniu 1–2 mm.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="geometria" num={5}>Błędy geometrii</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Model musi być szczelny (manifold) — bez dziur, odwróconych normalnych i nakładających się ścian.
                Taka geometria jest niezbędna, aby slicer prawidłowo przetworzył plik.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "sprawdź model w podglądzie slicera",
                  "użyj narzędzi do naprawy meshy (Meshmixer, Netfabb)",
                  "eksportuj ponownie do STL lub 3MF",
                  "sprawdź, czy model jest zamknięty",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <RotateCw className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="orientacja" num={6}>Zła orientacja na stole</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Odpowiednie ułożenie modelu wpływa na jakość powierzchni, liczbę podpór i wytrzymałość wydruku.
                Często wystarczy obrócić model, by znacznie poprawić rezultat.
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-semibold text-[var(--brand)]">Złota zasada</div>
                <p className="mt-2 text-sm text-foreground/90">
                  Ustaw model tak, aby największe płaszczyzny były równoległe do stołu, a widoczne powierzchnie nie wymagały podpór.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="detale" num={7}>Zbyt małe detale</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Każda technologia druku ma swoje ograniczenia. Drobne detale, takie jak cienkie ścianki, małe otwory czy wypukłe napisy,
                mogą zostać niedrukowalne lub zlane w jedną plamę.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="text-sm font-semibold text-[var(--brand)]">Minimalna wysokość detalu</div>
                  <p className="mt-1 text-sm text-foreground/90">FDM: ok. 0,6 mm</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="text-sm font-semibold text-[var(--brand)]">Minimalna średnica otworu</div>
                  <p className="mt-1 text-sm text-foreground/90">FDM: ok. 0,8 mm</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="podsumowanie" num={8}>Podsumowanie</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Najczęstsze błędy w projektowaniu modeli do druku 3D można wyeliminować już na etapie modelowania.
                Pamiętaj o odpowiedniej grubości ścianek, tolerancjach, fasetkach, szczelnej geometrii i rozsądnej orientacji modelu.
                Dzięki temu zaoszczędzisz czas, materiał i nerwy przy kolejnych wydrukach.
              </p>
            </div>

            <div className="mt-12">
              <NumberedHeading id="faq" num={9}>FAQ – najczęściej zadawane pytania</NumberedHeading>
              <div className="mt-5 grid grid-cols-1 gap-3">
                {faq.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={f.q} className="rounded-xl border border-border bg-card">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-xs font-semibold"
                        aria-expanded={open}
                      >
                        <span>{f.q}</span>
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                          <Plus className={"h-3.5 w-3.5 transition-transform " + (open ? "rotate-45" : "")} />
                        </span>
                      </button>
                      {open && (
                        <div className="px-4 pb-4 text-xs leading-relaxed text-muted-foreground">{f.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                to="/blog/$slug"
                params={{ slug: "stl-czy-step-ktory-format-wybrac" }}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5" /> Poprzedni artykuł
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  STL czy STEP – który format wybrać?
                </div>
              </Link>
              <Link
                to="/blog"
                className="group rounded-2xl border border-border bg-card p-5 text-right transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Wróć do bloga <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </div>
          </article>

          {/* Right sidebar: CTA + related */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl bg-[var(--brand-soft)] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Potrzebujesz modelu 3D?</div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Stworzę model dopasowany do Twoich potrzeb – od pomysłu po gotowy plik.
                  </p>
                  <Link
                    to="/kontakt"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
                  >
                    Wyślij zapytanie <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-semibold">Powiązane artykuły</div>
                <div className="mt-4 space-y-4">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="group flex gap-3"
                    >
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[var(--brand-soft)]">
                        <img
                          src={p.image.url}
                          alt={p.image.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[9px] font-semibold uppercase tracking-wider text-[var(--brand)]">
                          {p.category}
                        </div>
                        <div className="mt-1 line-clamp-2 text-xs font-semibold group-hover:text-[var(--brand)]">
                          {p.title}
                        </div>
                        <div className="mt-1 text-[10px] text-muted-foreground">
                          {p.readingMinutes} min czytania
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/blog" className="mt-4 inline-block text-xs font-medium text-[var(--brand)] hover:underline">
                  Zobacz wszystkie
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
