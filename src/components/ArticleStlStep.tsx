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
  CheckCircle2,
  Calendar,
  Clock,
  User,
  FolderOpen,
  Sparkles,
  Plus,
  FileType2,
  Boxes,
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
  { id: "czym-stl", label: "Czym jest STL?" },
  { id: "czym-step", label: "Czym jest STEP?" },
  { id: "roznice", label: "STL vs STEP – kluczowe różnice" },
  { id: "kiedy-stl", label: "Kiedy używać STL?" },
  { id: "kiedy-step", label: "Kiedy używać STEP?" },
  { id: "tabela", label: "Tabela porównawcza" },
  { id: "inne-formaty", label: "Inne popularne formaty" },
  { id: "podsumowanie", label: "Podsumowanie" },
  { id: "faq", label: "FAQ" },
];

const stlCechy = [
  "zapisuje tylko geometrię powierzchniową (siatkę trójkątów)",
  "lekki plik, idealny do druku 3D",
  "nie przechowuje informacji o historii modelu",
  "szeroko wspierany przez slicery i drukarki 3D",
];

const stepCechy = [
  "przechowuje pełną geometrię i strukturę modelu",
  "idealny do inżynierii, CAD i produkcji",
  "obsługuje tolerancje, materiały, złożenia",
  "pliki są zazwyczaj większe niż STL",
];

const kiedyStl = [
  "gdy chcesz wydrukować model na drukarce 3D",
  "gdy zależy Ci na lekkim pliku",
  "gdy model nie będzie dalej modyfikowany w CAD",
  "gdy pracujesz w programach do slicowania",
];

const kiedyStep = [
  "gdy model ma być dalej edytowany",
  "gdy projektujesz części do produkcji",
  "gdy potrzebujesz precyzyjnych wymiarów i tolerancji",
  "gdy pracujesz w środowisku CAD",
];

const inneFormaty = [
  { name: "OBJ", desc: "popularny w grafice i grach" },
  { name: "IGES", desc: "starszy format CAD" },
  { name: "FBX", desc: "animacje i modele 3D" },
  { name: "3MF", desc: "nowszy format do druku 3D, zawiera więcej informacji niż STL" },
];

const porownanie = [
  { cecha: "Typ danych", stl: "Siatka trójkątów", step: "Geometria bryłowa" },
  { cecha: "Edytowalność", stl: "Ograniczona", step: "Pełna" },
  { cecha: "Zastosowanie", stl: "Druk 3D, wizualizacja", step: "CAD, produkcja, analiza" },
  { cecha: "Informacje dodatkowe", stl: "Brak", step: "Tak (materiały, tolerancje, struktura)" },
  { cecha: "Rozmiar pliku", stl: "Mały", step: "Większy" },
  { cecha: "Przeznaczenie", stl: "Prototypowanie, druk 3D", step: "Projektowanie, inżynieria, produkcja" },
];

const faq = [
  { q: "Czy mogę przekonwertować STL do STEP?", a: "Tak, ale konwersja z siatki trójkątów do geometrii bryłowej jest trudna i często wymaga ręcznej korekty w programie CAD." },
  { q: "Który format jest bardziej uniwersalny?", a: "STL jest bardziej uniwersalny w kontekście druku 3D, natomiast STEP dominuje w inżynierii i produkcji." },
  { q: "Czy STEP działa w slicerach do druku 3D?", a: "Większość slicerów nie obsługuje STEP bezpośrednio – najpierw trzeba go skonwertować do STL lub 3MF." },
  { q: "Czy STEP zawsze zawiera kolory i materiały?", a: "Nie zawsze. STEP potrafi je przechowywać, ale zależy to od programu, który zapisał plik." },
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
      <MobileNav />
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

function FileCard({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      className={
        "relative flex h-[180px] w-[140px] flex-col justify-between rounded-2xl p-4 shadow-xl " +
        (dark ? "bg-neutral-900 text-white" : "bg-[var(--brand)] text-white")
      }
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
        <Boxes className="h-5 w-5" />
      </div>
      <div className="text-2xl font-black tracking-wider">{label}</div>
    </div>
  );
}

export default function ArticleStlStep() {
  const related = blogPosts
    .filter((p) => p.slug !== "stl-czy-step-ktory-format-wybrac")
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
          <span className="text-foreground/80">STL czy STEP – który format wybrać?</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Poradniki
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              STL czy STEP –<br />
              który format <span className="text-[var(--brand)]">wybrać?</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Porównanie formatów plików 3D i ich zastosowań w praktyce.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--brand)]" />
                28 kwietnia 2024
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--brand)]" />
                4 min czytania
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
              className="pointer-events-none absolute inset-0 grid grid-cols-6 gap-3 opacity-30"
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]/40" />
              ))}
            </div>
            <div className="relative flex items-center gap-6">
              <FileCard label="STL" />
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-bold text-muted-foreground shadow">VS</span>
              <FileCard label="STEP" dark />
            </div>
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
            {/* Wprowadzenie */}
            <div>
              <NumberedHeading id="wprowadzenie" num={1}>Wprowadzenie</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                W projektowaniu 3D istnieje wiele formatów plików, ale dwa z nich są najczęściej spotykane:{" "}
                <strong>STL</strong> oraz <strong>STEP</strong>. Choć oba służą do zapisu modeli 3D, różnią się budową,
                przeznaczeniem i zastosowaniem. Który z nich wybrać? Odpowiedź zależy od tego, co chcesz zrobić z modelem.
              </p>
            </div>

            {/* Czym STL */}
            <div className="mt-12">
              <NumberedHeading id="czym-stl" num={2}>Czym jest STL?</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                STL (stereolithography) to format pliku, który zapisuje model 3D jako zbiór trójkątów tworzących powierzchnię
                obiektu. Nie zawiera informacji o kolorze, materiale ani strukturze wewnętrznej modelu.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[1fr_180px] md:items-center">
                <div>
                  <div className="text-sm font-semibold">Najważniejsze cechy STL:</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {stlCechy.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span className="text-foreground/90">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand)]">
                    <FileType2 className="h-14 w-14" />
                  </div>
                </div>
              </div>
            </div>

            {/* Czym STEP */}
            <div className="mt-12">
              <NumberedHeading id="czym-step" num={3}>Czym jest STEP?</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                STEP (Standard for the Exchange of Product model data) to format opisujący model jako dokładną geometrię
                matematyczną (bryłę). Może zawierać informacje o strukturze, komponentach, materiałach i historii modelu.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[1fr_180px] md:items-center">
                <div>
                  <div className="text-sm font-semibold">Najważniejsze cechy STEP:</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {stepCechy.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span className="text-foreground/90">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                    <Boxes className="h-14 w-14" />
                  </div>
                </div>
              </div>
            </div>

            {/* Różnice / tabela */}
            <div className="mt-12">
              <NumberedHeading id="roznice" num={4}>STL vs STEP – kluczowe różnice</NumberedHeading>
              <div id="tabela" className="scroll-mt-24 mt-5 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--brand-soft)]/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="px-5 py-3 font-semibold">Cecha</th>
                        <th className="px-5 py-3 font-semibold">STL</th>
                        <th className="px-5 py-3 font-semibold">STEP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {porownanie.map((r) => (
                        <tr key={r.cecha} className="border-b border-border last:border-0">
                          <td className="px-5 py-3 font-semibold">{r.cecha}</td>
                          <td className="px-5 py-3 text-foreground/90">{r.stl}</td>
                          <td className="px-5 py-3 text-foreground/90">{r.step}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Kiedy używać */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <NumberedHeading id="kiedy-stl" num={5}>Kiedy używać STL?</NumberedHeading>
                <ul className="mt-4 space-y-2 text-sm">
                  {kiedyStl.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                      <span className="text-foreground/90">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <NumberedHeading id="kiedy-step" num={6}>Kiedy używać STEP?</NumberedHeading>
                <ul className="mt-4 space-y-2 text-sm">
                  {kiedyStep.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                      <span className="text-foreground/90">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inne formaty */}
            <div className="mt-12">
              <NumberedHeading id="inne-formaty" num={7}>Inne popularne formaty</NumberedHeading>
              <p className="mt-4 text-sm text-foreground/90">Oprócz STL i STEP warto znać też inne formaty:</p>
              <ul className="mt-4 space-y-2 text-sm">
                {inneFormaty.map((f) => (
                  <li key={f.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                    <span className="text-foreground/90">
                      <strong>{f.name}</strong> – {f.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Podsumowanie */}
            <div className="mt-12">
              <NumberedHeading id="podsumowanie" num={8}>Podsumowanie</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Nie ma jednego najlepszego formatu – wszystko zależy od zastosowania. Do druku 3D wybierz STL,
                do projektowania i produkcji – STEP. Jeśli nie masz pewności, zapytaj wykonawcę o preferowany format.
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <NumberedHeading id="faq" num={9}>FAQ</NumberedHeading>
              <div className="mt-5 flex flex-col gap-3">
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
                      Pomożemy Ci dobrać odpowiedni format pliku i przygotujemy model zgodnie z Twoimi potrzebami.
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
                to="/blog/$slug"
                params={{ slug: "jak-przygotowac-model-do-druku-3d" }}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5" /> Poprzedni artykuł
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  Jak przygotować model 3D do druku?
                </div>
              </Link>
              <Link
                to="/blog"
                className="group rounded-2xl border border-border bg-card p-5 text-right transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Następny artykuł <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  Wróć do bloga
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