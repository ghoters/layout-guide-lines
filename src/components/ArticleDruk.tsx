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
  RefreshCcw,
  Minus,
  Scale,
  Box,
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
  { id: "wstep", label: "Wstęp" },
  { id: "geometria", label: "Sprawdzenie geometrii" },
  { id: "skalowanie", label: "Skalowanie modelu" },
  { id: "orientacja", label: "Orientacja modelu" },
  { id: "grubosci", label: "Grubości ścianek" },
  { id: "podpory", label: "Podpory" },
  { id: "detale", label: "Detale i tolerancje" },
  { id: "eksport", label: "Eksport pliku" },
  { id: "bledy", label: "Najczęstsze błędy" },
  { id: "podsumowanie", label: "Podsumowanie" },
  { id: "faq", label: "FAQ" },
];

const geometriaChecks = [
  "użyj narzędzi do naprawy w programach typu Meshmixer, Blender, 3D Builder",
  "sprawdź model w podglądzie slicera",
  "napraw błędy STL (dziury, odwrócone normalne, podwójne ściany)",
];

const orientacjaInfluence = [
  "jakość powierzchni",
  "ilość podpór",
  "wytrzymałość wydruku",
  "czas druku",
];

const grubosciRows = [
  { tech: "FDM (PLA, PETG)", min: "0,8 mm", zal: "1,2 – 2,0 mm" },
  { tech: "RESIN (SLA, DLP)", min: "0,4 mm", zal: "0,6 – 1,2 mm" },
  { tech: "SLS (Nylon)", min: "1,0 mm", zal: "1,5 – 2,5 mm" },
];

const podporyList = [
  "używaj podpór drzewiastych (mniej śladów)",
  "unikaj podpór w widocznych powierzchniach",
  "sprawdź kąt nachylenia – poniżej 45° mogą być zbędne",
];

const detaleList = [
  "minimalna średnica otworu (FDM): ~0,8 mm",
  "minimalna wysokość detalu (FDM): ~0,6 mm",
  "luz między elementami: 0,2 – 0,5 mm",
];

const eksportFormaty = [
  { name: "STL", desc: "najczęściej używany w druku 3D" },
  { name: "OBJ", desc: "z teksturami (jeśli potrzebne)" },
  { name: "3MF", desc: "nowoczesny format zawierający więcej informacji" },
];

const bledy = [
  { icon: AlertTriangle, label: "dziury w modelu" },
  { icon: RefreshCcw, label: "odwrócone normalne" },
  { icon: Minus, label: "zbyt cienkie ścianki" },
  { icon: Scale, label: "brak podpór" },
  { icon: Box, label: "zły rozmiar modelu" },
];

const faq = [
  { q: "Czy mój model jest gotowy do druku?", a: "Model jest gotowy, jeśli ma zamkniętą, szczelną geometrię, poprawne grubości ścianek i właściwą skalę. Warto sprawdzić go dodatkowo w slicerze." },
  { q: "Czy muszę dodawać podpory?", a: "Nie zawsze — podpory dodaje slicer automatycznie. Warto jednak zaprojektować model tak, aby ich potrzebować jak najmniej." },
  { q: "Jak sprawdzić, czy model jest szczelny?", a: "Skorzystaj z narzędzi typu Meshmixer, Netfabb lub 3D Builder — pokazują dziury i odwrócone normalne oraz naprawiają je automatycznie." },
  { q: "Jaki format pliku jest najlepszy do druku 3D?", a: "Najbezpieczniejszy wybór to STL. Jeśli chcesz przekazać więcej informacji (kolory, materiały) — użyj 3MF." },
];

function Header() {
  return (
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

export default function ArticleDruk() {
  const related = blogPosts
    .filter((p) => p.slug !== "jak-przygotowac-model-do-druku-3d")
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
          <span className="text-foreground/80">Jak przygotować model do druku 3D?</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Druk 3D
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Jak przygotować model<br />
              do druku <span className="text-[var(--brand)]">3D</span>?
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Najważniejsze zasady przygotowania pliku do druku 3D.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--brand)]" />
                5 maja 2024
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--brand)]" />
                8 min czytania
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
              className="pointer-events-none absolute -right-4 top-1/2 grid h-40 w-40 -translate-y-1/2 grid-cols-6 gap-3 opacity-40"
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]/50" />
              ))}
            </div>
            <div aria-hidden className="absolute inset-0 -z-0 mx-auto my-auto h-72 w-72 rounded-full bg-[var(--brand-soft)]/70 blur-2xl" />
            <img
              src="/assets/blog-druk-hero.jpg"
              alt="Model 3D drukowany w drukarce 3D"
              className="relative z-10 h-auto w-full max-w-[420px] object-contain drop-shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
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
            {/* Wstęp */}
            <div>
              <p className="text-sm leading-relaxed text-foreground/90">
                Dobrze przygotowany model to klucz do udanego wydruku. Nawet najlepsza drukarka nie poprawi
                błędów w pliku. Poniżej znajdziesz kompletny przewodnik, który pomoże Ci przygotować model do
                druku 3D krok po kroku.
              </p>

              <div className="mt-10">
                <NumberedHeading id="wstep" num={1}>Wstęp</NumberedHeading>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  Przygotowanie modelu do druku 3D to proces, który ma bezpośredni wpływ na jakość, wytrzymałość
                  i estetykę wydruku. Warto poświęcić kilka minut na analizę i poprawki.
                </p>
              </div>
            </div>

            {/* Geometria */}
            <div className="mt-12">
              <NumberedHeading id="geometria" num={2}>Sprawdzenie geometrii</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Upewnij się, że model jest watertight (szczelny) – nie posiada dziur, nakładających się ścian
                ani niepołączonych powierzchni.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[1fr_180px] md:items-center">
                <div>
                  <div className="text-sm font-semibold">Jak sprawdzić geometrię?</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {geometriaChecks.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span className="text-foreground/90">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Box className="h-14 w-14" />
                  </div>
                </div>
              </div>
            </div>

            {/* Skalowanie */}
            <div className="mt-12">
              <NumberedHeading id="skalowanie" num={3}>Skalowanie modelu</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Sprawdź wymiary modelu i upewnij się, że są zgodne z rzeczywistością. Pamiętaj o tolerancjach –
                szczególnie przy elementach ruchomych.
              </p>
            </div>

            {/* Orientacja */}
            <div className="mt-12">
              <NumberedHeading id="orientacja" num={4}>Orientacja modelu</NumberedHeading>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1fr_260px]">
                <div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    Odpowiednie ułożenie modelu na stole roboczym wpływa na:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {orientacjaInfluence.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span className="text-foreground/90">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-[var(--brand-soft)] p-5">
                  <div className="text-sm font-bold text-[var(--brand)]">Złota zasada</div>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                    drukuj tak, aby największe płaszczyzny były równoległe do stołu.
                  </p>
                </div>
              </div>
            </div>

            {/* Grubości ścianek */}
            <div className="mt-12">
              <NumberedHeading id="grubosci" num={5}>Grubości ścianek</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Zadbaj o odpowiednią grubość ścianek, aby wydruk był trwały.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--brand-soft)]/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="px-5 py-3 font-semibold">Technologia</th>
                        <th className="px-5 py-3 font-semibold">Minimalna grubość ścianki</th>
                        <th className="px-5 py-3 font-semibold">Zalecana grubość</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grubosciRows.map((r) => (
                        <tr key={r.tech} className="border-b border-border last:border-0">
                          <td className="px-5 py-3 font-semibold">{r.tech}</td>
                          <td className="px-5 py-3 text-foreground/90">{r.min}</td>
                          <td className="px-5 py-3 text-foreground/90">{r.zal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Podpory + Detale */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <NumberedHeading id="podpory" num={6}>Podpory</NumberedHeading>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  Dodawaj podpory tylko tam, gdzie są naprawdę potrzebne.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {podporyList.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                      <span className="text-foreground/90">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <NumberedHeading id="detale" num={7}>Detale i tolerancje</NumberedHeading>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  Zwróć uwagę na minimalne wymiary detali oraz luz między ruchomymi elementami.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {detaleList.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                      <span className="text-foreground/90">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Eksport */}
            <div className="mt-12">
              <NumberedHeading id="eksport" num={8}>Eksport pliku</NumberedHeading>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1fr_280px]">
                <div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    Najlepsze formaty do druku 3D:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {eksportFormaty.map((f) => (
                      <li key={f.name} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span className="text-foreground/90"><strong>{f.name}</strong> – {f.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="text-sm font-semibold">Ustawienia eksportu STL:</div>
                  <ul className="mt-3 space-y-1.5 text-xs text-foreground/80">
                    <li>format: binarny</li>
                    <li>jednostki: milimetry</li>
                    <li>tolerancja: średnia (0.01 – 0.05 mm)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Błędy */}
            <div className="mt-12">
              <NumberedHeading id="bledy" num={9}>Najczęstsze błędy</NumberedHeading>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {bledy.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.label} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4 text-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-xs font-medium text-foreground/90">{b.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Podsumowanie */}
            <div className="mt-12">
              <NumberedHeading id="podsumowanie" num={10}>Podsumowanie</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Prawidłowe przygotowanie modelu do druku 3D to klucz do sukcesu. Poświęć czas na analizę, poprawki
                i testy – dzięki temu unikniesz nieudanych wydruków i zaoszczędzisz czas oraz materiał.
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <NumberedHeading id="faq" num={11}>FAQ</NumberedHeading>
              <div className="mt-5 flex flex-col gap-3">
                {faq.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <button
                      key={f.q}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="rounded-2xl border border-border bg-card p-4 text-left transition hover:border-[var(--brand)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-xs font-semibold">{f.q}</div>
                        <Plus className={"h-4 w-4 shrink-0 text-[var(--brand)] transition-transform " + (open ? "rotate-45" : "")} />
                      </div>
                      {open && (
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{f.a}</p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA + Related */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr]">
              <div className="rounded-2xl bg-[var(--brand-soft)] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold">Potrzebujesz projektu 3D?</div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Masz pomysł na projekt? Napisz do mnie – chętnie przygotuję wycenę.
                    </p>
                    <Link
                      to="/kontakt"
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
                    >
                      Wyślij zapytanie <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              {related.length > 0 && (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm font-semibold">Powiązane artykuły</div>
                    <Link to="/blog" className="text-xs font-medium text-[var(--brand)] hover:underline">
                      Zobacz więcej →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {related.map((p) => (
                      <Link
                        key={p.slug}
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="group overflow-hidden rounded-xl border border-border bg-card"
                      >
                        <div className="h-24 w-full overflow-hidden bg-[var(--brand-soft)]">
                          <img src={p.image.url} alt={p.image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        </div>
                        <div className="p-3">
                          <div className="text-[9px] font-semibold uppercase tracking-wider text-[var(--brand)]">
                            {p.category}
                          </div>
                          <div className="mt-1 line-clamp-2 text-xs font-semibold group-hover:text-[var(--brand)]">
                            {p.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
                  Wróć do bloga
                </div>
              </Link>
              <Link
                to="/blog/$slug"
                params={{ slug: "stl-czy-step-ktory-format-wybrac" }}
                className="group rounded-2xl border border-border bg-card p-5 text-right transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Następny artykuł <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  STL czy STEP – który format wybrać?
                </div>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}