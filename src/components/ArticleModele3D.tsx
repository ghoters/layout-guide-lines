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
  Pencil,
  Box,
  SlidersHorizontal,
  Palette,
  FileOutput,
  Factory,
  Building2,
  HeartPulse,
  Gamepad2,
  Film,
  GraduationCap,
  Boxes,
  Gamepad,
  Printer,
  ImageIcon,
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
  { id: "definicja", label: "Definicja modelu 3D" },
  { id: "jak-powstaje", label: "Jak powstaje model 3D?" },
  { id: "z-budowy", label: "Z budowy modelu 3D" },
  { id: "rodzaje", label: "Rodzaje modeli 3D" },
  { id: "gdzie", label: "Gdzie wykorzystuje się modele 3D?" },
  { id: "formaty", label: "Popularne formaty plików 3D" },
  { id: "podsumowanie", label: "Podsumowanie" },
  { id: "faq", label: "FAQ" },
];

const etapy = [
  { icon: Pencil, label: "Pomysł / szkic" },
  { icon: Box, label: "Modelowanie" },
  { icon: SlidersHorizontal, label: "Optymalizacja" },
  { icon: Palette, label: "Teksturowanie" },
  { icon: FileOutput, label: "Eksport pliku" },
];

const rodzaje = [
  {
    icon: Pencil,
    title: "Modele CAD",
    desc: "Precyzyjne modele techniczne używane w inżynierii i produkcji.",
  },
  {
    icon: Gamepad,
    title: "Modele do gier",
    desc: "Zoptymalizowane pod kątem czasu rzeczywistego, np. w Unity czy Unreal Engine.",
  },
  {
    icon: Printer,
    title: "Modele do druku 3D",
    desc: "Przygotowane do druku, z zachowaniem wymagań technologicznych.",
  },
  {
    icon: ImageIcon,
    title: "Modele wizualizacyjne",
    desc: "Służą do prezentacji, renderów i materiałów marketingowych.",
  },
];

const branze = [
  { icon: Factory, label: "Przemysł i produkcja" },
  { icon: Building2, label: "Architektura i budownictwo" },
  { icon: HeartPulse, label: "Medycyna" },
  { icon: Gamepad2, label: "Gry komputerowe" },
  { icon: Film, label: "Film i animacja" },
  { icon: GraduationCap, label: "Edukacja" },
];

const formaty = [
  { name: "STL", desc: "Siatka trójkątów, bez kolorów i tekstur", use: "Druk 3D, prototypowanie" },
  { name: "STEP", desc: "Format CAD z pełną geometrią i strukturą", use: "Inżynieria, produkcja, CAD" },
  { name: "OBJ", desc: "Siatka z teksturami i materiałami", use: "Wizualizacje, gry, animacje" },
  { name: "FBX", desc: "Format do wymiany w grach i animacjach", use: "Gry, film, animacje" },
  { name: "3MF", desc: "Nowoczesny format dla druku 3D", use: "Druk 3D" },
];

const faq = [
  { q: "Czy każdy model 3D nadaje się do druku 3D?", a: "Nie. Aby model nadawał się do druku 3D, musi być tzw. „manifold” – szczelny, bez dziur i błędów siatki. Modele do gier lub wizualizacji często wymagają dodatkowej optymalizacji." },
  { q: "Czym różni się model CAD od modelu do gry?", a: "Model CAD skupia się na precyzyjnej geometrii i wymiarach – używany jest w inżynierii i produkcji. Model do gry jest zoptymalizowany pod wydajność, ma mniej poligonów i wykorzystuje tekstury." },
  { q: "Jaki program wybrać do tworzenia modeli 3D?", a: "Do modeli CAD sprawdzą się SolidWorks, Fusion 360 czy Inventor. Do modeli do druku, gier i wizualizacji popularne są Blender, ZBrush oraz 3ds Max." },
  { q: "Czy model 3D musi mieć tekstury?", a: "Nie zawsze. Modele do druku 3D zwykle nie potrzebują tekstur. Są one niezbędne w wizualizacjach, animacjach i grach, gdzie decydują o wyglądzie modelu." },
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

export default function ArticleModele3D() {
  const related = blogPosts
    .filter((p) => p.slug !== "modele-3d-czym-sa-jak-powstaja")
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
          <span className="text-foreground/80">Modele 3D</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/80">Co to jest model 3D?</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Modele 3D
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Co to jest model <span className="text-[var(--brand)]">3D?</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Wyjaśniamy czym jest model 3D, jak powstaje i gdzie znajduje zastosowanie.
              Praktyczny przewodnik dla początkujących i nie tylko.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--brand)]" />
                12 maja 2024
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--brand)]" />
                6 min czytania
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
              src="/assets/blog-model-3d-hero.jpg"
              alt="Model 3D wspornika mechanicznego"
              className="relative max-h-[320px] w-auto object-contain"
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
              <NumberedHeading id="wprowadzenie" num={1}>Wprowadzenie</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Model 3D to cyfrowe odwzorowanie obiektu w przestrzeni trójwymiarowej. Może przedstawiać
                zarówno proste przedmioty codziennego użytku, jak i skomplikowane maszyny, postacie czy
                całe środowiska. Dzięki technologiom 3D możemy projektować, analizować, wizualizować
                i wytwarzać obiekty szybciej i dokładniej niż kiedykolwiek wcześniej.
              </p>
            </div>

            <div className="mt-12">
              <NumberedHeading id="definicja" num={2}>Definicja modelu 3D</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Model 3D to matematyczny opis kształtu i struktury obiektu w trzech wymiarach: wysokości (X),
                szerokości (Y) i głębokości (Z). Taki model może być wyświetlany na ekranie, poddawany symulacjom
                lub używany do produkcji – np. w druku 3D lub obróbce CNC.
              </p>
              <div className="mt-5 flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                  <Boxes className="h-5 w-5" />
                </div>
                <p className="text-sm text-foreground/90">
                  Model 3D to nie tylko wygląd – to również geometria, proporcje i dane, które można
                  wykorzystać do analiz, symulacji i produkcji.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="jak-powstaje" num={3}>Jak powstaje model 3D?</NumberedHeading>
              <p className="mt-4 text-sm text-foreground/90">Proces tworzenia modelu 3D zazwyczaj składa się z kilku etapów:</p>
              <div className="relative mt-6">
                <div className="absolute left-6 right-6 top-6 hidden h-px border-t border-dashed border-border sm:block" aria-hidden />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                  {etapy.map((s) => (
                    <div key={s.label} className="flex flex-col items-center text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)] ring-4 ring-[var(--page)]">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-xs font-semibold text-foreground/90">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="z-budowy" num={4}>Z budowy modelu 3D</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Każdy model 3D składa się z wierzchołków, krawędzi i ścian (powierzchni). Najczęściej używa się
                siatki wielokątów (mesh), która opisuje kształt obiektu.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card p-6">
                <img
                  src="/assets/blog-model-3d-hero.jpg"
                  alt="Budowa modelu 3D – od bryły przez siatkę do wierzchołków"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="rodzaje" num={5}>Rodzaje modeli 3D</NumberedHeading>
              <p className="mt-4 text-sm text-foreground/90">W zależności od zastosowania wyróżniamy różne typy modeli:</p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {rodzaje.map((r) => (
                  <div key={r.title} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-sm font-semibold">{r.title}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="gdzie" num={6}>Gdzie wykorzystuje się modele 3D?</NumberedHeading>
              <p className="mt-4 text-sm text-foreground/90">Modele 3D znajdują zastosowanie w wielu branżach:</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {branze.map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div className="text-[11px] font-semibold text-foreground/90">{b.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="formaty" num={7}>Popularne formaty plików 3D</NumberedHeading>
              <p className="mt-4 text-sm text-foreground/90">Istnieje wiele formatów plików 3D. Oto najpopularniejsze:</p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--brand-soft)]/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="px-5 py-3 font-semibold">Format</th>
                        <th className="px-5 py-3 font-semibold">Opis</th>
                        <th className="px-5 py-3 font-semibold">Zastosowanie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formaty.map((f) => (
                        <tr key={f.name} className="border-b border-border last:border-0">
                          <td className="px-5 py-3 font-semibold">{f.name}</td>
                          <td className="px-5 py-3 text-foreground/90">{f.desc}</td>
                          <td className="px-5 py-3 text-foreground/90">{f.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <NumberedHeading id="podsumowanie" num={8}>Podsumowanie</NumberedHeading>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Model 3D to fundament współczesnego projektowania, prototypowania i produkcji. Niezależnie od tego,
                czy tworzysz grę, drukujesz figurkę, czy projektujesz części maszyn – zrozumienie czym jest model 3D
                pozwoli Ci lepiej wykorzystać jego potencjał.
              </p>
            </div>

            <div className="mt-12">
              <NumberedHeading id="faq" num={9}>FAQ – najczęściej zadawane pytania</NumberedHeading>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                to="/blog"
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5" /> Poprzedni artykuł
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  Co to jest siatka (mesh) w modelu 3D?
                </div>
              </Link>
              <Link
                to="/blog/$slug"
                params={{ slug: "jak-wyglada-proces-projektowania-modelu-3d" }}
                className="group rounded-2xl border border-border bg-card p-5 text-right transition hover:border-[var(--brand)]"
              >
                <div className="flex items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Następny artykuł <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="mt-2 text-sm font-semibold group-hover:text-[var(--brand)]">
                  Jak powstają modele 3D od podstaw?
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