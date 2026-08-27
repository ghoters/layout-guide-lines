import { MobileNav } from "@/components/MobileNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
const heroVase = { url: "/assets/background_hero.jpg" };
const awatar3 = { url: "/assets/awatar3.jpg" };
import { projects, categories, type Project, type Category } from "@/lib/projects";
import { Lightbox } from "@/components/Lightbox";
import { Logo } from "@/components/Logo";
import {
  ArrowRight,
  Box,
  Printer,
  Camera,
  Gamepad2,
  PenTool,
  MessageSquare,
  ClipboardList,
  Package,
  PencilLine,
  CheckCircle2,
  User,
  Headphones,
  CalendarClock,
  Star,
  Mail,
  Phone,
  Clock,
  Instagram,
  Linkedin,
  Plus,
  Lightbulb,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projektowanie modeli 3D | Druk 3D, CAD, modele do gier i wizualizacje | 3dmodele.pl" },
      {
        name: "description",
        content:
          "Projektowanie modeli 3D na zamówienie. Tworzę modele do druku 3D, modele do gier, wizualizacje, projekty CAD oraz pliki STL. Oferuję również profesjonalne wydruki 3D.",
      },
      { property: "og:title", content: "Projektowanie modeli 3D | Druk 3D, CAD, modele do gier i wizualizacje | 3dmodele.pl" },
      {
        property: "og:description",
        content:
          "Projektowanie modeli 3D na zamówienie. Tworzę modele do druku 3D, modele do gier, wizualizacje, projekty CAD oraz pliki STL. Oferuję również profesjonalne wydruki 3D.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.3dmodele.pl/" },
      { property: "og:image", content: "https://www.3dmodele.pl/szkielet-og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Szkielet 3D — model anatomiczny przygotowany do druku 3D" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.3dmodele.pl/szkielet-og.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.3dmodele.pl/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://www.3dmodele.pl/",
          name: "Projektowanie modeli 3D | 3dmodele.pl",
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://www.3dmodele.pl/szkielet-og.jpg",
            width: 1200,
            height: 630,
          },
        }),
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Strona główna", to: "/" },
  { label: "Realizacje", to: "/realizacje" },
  { label: "Blog", to: "/blog" },
  { label: "Kontakt", to: "/kontakt" },
];

const services = [
  {
    icon: Box,
    title: "Modele do druku 3D",
    desc: "Projektuję modele zoptymalizowane pod druk 3D – FDM i żywica.",
  },
  {
    icon: Printer,
    title: "Wydruki 3D",
    desc: "Oferuję profesjonalne wydruki 3D wysokiej jakości na zamówienie.",
  },
  {
    icon: Camera,
    title: "Wizualizacje 3D",
    desc: "Realistyczne wizualizacje produktów, konceptów i scen 3D.",
  },
  {
    icon: Gamepad2,
    title: "Modele do gier",
    desc: "Tworzę assety gotowe do wykorzystania w silnikach gier.",
  },
  {
    icon: PenTool,
    title: "Grafika 2D",
    desc: "Grafika wektorowa, rastrowa, UI, materiały marketingowe i inne.",
  },
];


const steps = [
  { n: 1, icon: MessageSquare, title: "Rozmowa", desc: "Poznanie Twoich potrzeb i oczekiwań." },
  { n: 2, icon: ClipboardList, title: "Omówienie projektu", desc: "Ustalamy szczegóły, zakres i wycenę." },
  { n: 3, icon: Package, title: "Projekt", desc: "Tworzę model i przesyłam do weryfikacji." },
  { n: 4, icon: PencilLine, title: "Poprawki", desc: "Wprowadzam uwagi i dopracowujemy detale." },
  { n: 5, icon: CheckCircle2, title: "Gotowy model", desc: "Przekazuję gotowe pliki i materiały." },
];

const advantages = [
  {
    icon: User,
    title: "Indywidualne podejście",
    desc: "Każdy projekt traktuję indywidualnie. Słucham potrzeb i dbam o to, aby efekt spełniał oczekiwania.",
  },
  {
    icon: Headphones,
    title: "Stały kontakt",
    desc: "Jestem w stałym kontakcie na każdym etapie projektu. Feedback jest dla mnie kluczowy.",
  },
  {
    icon: CalendarClock,
    title: "Terminowość",
    desc: "Dotrzymuję ustalonych terminów. W razie zmian informuję z odpowiednim wyprzedzeniem.",
  },
  {
    icon: Star,
    title: "Doświadczenie i jakość",
    desc: "Łączę doświadczenie w 2D i 3D z dbałością o detale, aby dostarczać modele na najwyższym poziomie.",
  },
];

const tools = [
  "Blender",
  "ZBrush",
  "Marmoset Toolbag",
  "Photoshop",
  "Illustrator",
  "Unreal Engine",
  "Unity",
  "Marvelous Designer",
  "Rhino",
  "Fusion 360",
  "Meshmixer",
  "Substance Painter",
];

function Placeholder({ className = "", label }: { className?: string; label?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-border bg-muted/60 text-xs text-muted-foreground ${className}`}
    >
      {label ?? "Obrazek"}
    </div>
  );
}

function Index() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<"Wszystkie" | Category>("Wszystkie");

  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      {/* NAV */}
      <header className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center">
          <Logo height={36} />
        </div>
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
                activeProps={{ className: "text-sm font-medium text-[var(--brand)] underline underline-offset-8" }}
                inactiveProps={{ className: "text-sm text-foreground/80 hover:text-foreground" }}
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

      {/* HERO */}
      <section className="relative">
        <div className="relative w-full overflow-hidden">
          <img
            src={heroVase.url}
            alt="Model 3D wazonu gotyckiego — wizualizacja projektu"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative mx-auto min-h-[620px] max-w-[1200px] px-6 pb-20 pt-20 lg:min-h-[620px]">
          <div className="max-w-2xl pt-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              PROJEKTOWANIE 3D
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl">
              Tworzę modele <span className="text-[var(--brand)]">3D</span>
              <br />
              dopasowane do
              <br />
              Twoich potrzeb.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/90 drop-shadow-sm">
              Projektowanie modeli 3D na zamówienie. Tworzę modele do druku 3D, projekty CAD, modele do gier, wizualizacje 3D oraz modele STL przygotowane do produkcji.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Wyślij zapytanie <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/realizacje"
                className="inline-flex items-center gap-2 text-sm font-medium drop-shadow-sm"
              >
                Zobacz realizacje <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {[
                { icon: Clock, value: "6+", label: "lat doświadczenia" },
                { icon: Mail, value: "1000+", label: "zrealizowanych projektów" },
                { icon: Star, value: "100%", label: "zaangażowania" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 sm:items-start">
                  <div className="mt-0 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/70 text-[var(--brand)] backdrop-blur-sm sm:mt-1">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[var(--brand)] drop-shadow-sm sm:text-2xl">{s.value}</div>
                    <div className="text-[11px] text-foreground/80 drop-shadow-sm sm:text-xs">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute left-[62%] top-[15rem] lg:left-[62%] xl:left-[58%] hidden lg:block">
            <div className="pointer-events-auto w-fit rounded-2xl bg-background/95 p-6 shadow-xl backdrop-blur-sm">
              <div className="text-sm font-extrabold text-[var(--brand)]">Ostatni projekt</div>
              <div className="mt-3 text-lg font-bold">wazon gotycki</div>
              <div className="mt-2 text-sm text-muted-foreground">Druk 3D, żywica</div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="shrink-0 text-sm text-muted-foreground">
                  Blender, ZBrush,
                  <br />
                  Marmoset Toolbag
                </div>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center self-end rounded-full bg-[var(--brand)]">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
          CO MOGĘ DLA CIEBIE ZROBIĆ
        </div>
        <h2 className="sr-only">Usługi projektowania 3D</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex h-[210px] flex-col justify-between rounded-2xl border border-border bg-card p-5"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              <div className="flex justify-end text-[var(--brand)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="realizacje" className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              PORTFOLIO
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Projekty 3D wykonane
              <br className="hidden sm:block" /> na zamówienie
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tworzę modele do druku 3D, części techniczne, assety do gier i wizualizacje. Każdy
              projekt dopasowany do potrzeb klienta.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:items-end lg:mt-12">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                <Box className="h-5 w-5" />
              </div>
              <p className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                Ponad 1000+ zrealizowanych projektów
                <br className="hidden sm:block" /> dla klientów indywidualnych i firm.
              </p>
            </div>
            <Link
              to="/realizacje"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-[var(--brand)] transition-colors hover:border-[var(--brand)]"
            >
              Zobacz wszystkie realizacje <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-8 flex flex-wrap gap-3">
          {(["Wszystkie", ...categories] as const).map((c) => {
            const active = activeCategory === c;
            const Icon =
              c === "Druk 3D" ? Box : c === "CAD" ? PenTool : c === "Gry" ? Gamepad2 : c === "Wizualizacje" ? Camera : null;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={
                  active
                    ? "inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-primary-foreground"
                    : "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-[var(--brand)] hover:text-foreground"
                }
              >
                {Icon && <Icon className="h-4 w-4" />}
                {c}
              </button>
            );
          })}
        </div>

        <h2 className="sr-only">Wybrane realizacje projektów 3D</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects
            .filter((p) => activeCategory === "Wszystkie" || p.category === activeCategory)
            .map((p) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setSelectedProject(p)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-colors hover:border-[var(--brand)]"
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <img
                    src={p.image.url}
                    alt={`${p.title} — ${p.tag}, projekt 3D na zamówienie`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-[var(--brand)] px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary-foreground">
                    {p.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand)] transition-opacity group-hover:opacity-80">
                    Zobacz projekt <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-border bg-card px-6 py-6 sm:mx-auto sm:max-w-3xl sm:flex-row sm:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold">Nie widzisz projektu podobnego do swojego?</div>
              <p className="mt-1 text-xs text-muted-foreground">
                Napisz do mnie – chętnie podejmę się nowych wyzwań.
              </p>
            </div>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Opowiedz o swoim projekcie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {selectedProject && (
          <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </section>


      {/* ABOUT + TOOLS */}
      {/* PROJEKTOWANIE NA ZAMÓWIENIE */}
      <section className="mx-auto max-w-[1200px] border-t border-border px-6 py-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              PROJEKTOWANIE MODELI 3D NA ZAMÓWIENIE
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Projektowanie modeli <span className="text-[var(--brand)]">3D</span>
              <br />
              na zamówienie
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Projektowanie modeli 3D to moja pasja i codzienna praca. Tworzę modele 3D dopasowane
                do Twoich potrzeb – od prostych elementów użytkowych, przez części techniczne i
                prototypy, aż po złożone modele organiczne, figurki kolekcjonerskie, modele do gier
                oraz wizualizacje 3D.
              </p>
              <p>
                Każdy projekt wykonuję od podstaw na podstawie zdjęć, szkiców, rysunków technicznych
                lub samego pomysłu. Dbam o poprawną geometrię, optymalizację i przygotowanie modelu
                do jego docelowego zastosowania – druku 3D, produkcji, prezentacji lub użycia w
                silnikach gier.
              </p>
              <p>
                Pracuję w profesjonalnych programach 3D, takich jak Blender, ZBrush, Marmoset Toolbag
                czy Fusion 360, co pozwala mi tworzyć modele na najwyższym poziomie. Otrzymujesz
                gotowy plik STL, OBJ, STEP, FBX lub inny – zgodnie z Twoimi potrzebami.
              </p>
              <p>
                Masz pomysł na model 3D? Skontaktuj się ze mną, a pomogę Ci zamienić go w gotowy,
                dopracowany model 3D.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Wyślij zapytanie <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/realizacje" className="inline-flex items-center gap-2 text-sm font-medium">
                Zobacz realizacje <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-[320px] overflow-hidden rounded-2xl border border-border sm:h-[400px] lg:h-[480px]">
              <img
                src="/assets/o-mnie-workspace.jpg"
                alt="Stanowisko pracy z modelem 3D silnika w programie do modelowania"
                loading="lazy"
                width={1280}
                height={848}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              {[
                { src: "/assets/o-mnie-thumb-1.jpg", alt: "Model 3D kołnierza przemysłowego" },
                { src: "/assets/o-mnie-thumb-2.jpg", alt: "Model 3D połączenia konstrukcyjnego" },
                { src: "/assets/o-mnie-thumb-3.jpg", alt: "Model 3D obudowy przekładni" },
                { src: "/assets/o-mnie-thumb-4.jpg", alt: "Model 3D obudowy technicznej" },
                { src: "/assets/o-mnie-thumb-5.jpg", alt: "Model 3D zawiasu z elementami" },
              ].map((t) => (
                <div key={t.src} className="aspect-square overflow-hidden rounded-xl border border-border">
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS + ADVANTAGES */}
      <section className="mx-auto max-w-[1200px] border-t border-border px-6 py-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-xs font-semibold tracking-wider text-foreground">
              JAK WYGLĄDA WSPÓŁPRACA
            </h2>
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-px border-t border-dashed border-border" />
              <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-2">
                {steps.map((s) => (
                  <div key={s.n} className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                      {s.n}
                    </div>
                    <div className="mt-3 text-xs font-semibold">{s.title}</div>
                    <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-xs font-semibold tracking-wider text-foreground">
              DLACZEGO WARTO ZE MNĄ WSPÓŁPRACOWAĆ?
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {advantages.map((a) => (
                <div key={a.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--brand)]">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{a.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY — WAZON GOTYCKI */}
      <section className="mx-auto max-w-[1200px] overflow-hidden px-6 py-14">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-[40%_60%] lg:items-center lg:gap-6">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[var(--brand)]">
                OSTATNIA REALIZACJA
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Wazon gotycki</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Dekoracyjny model 3D inspirowany ornamentyką gotycką. Projekt od podstaw – od
                koncepcji i rysunków, przez modelowanie w ZBrush, po przygotowanie pod druk 3D.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {["Blender", "ZBrush", "Meshmixer"].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-[var(--brand)]">
                      <Box className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-semibold">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: Package, label: "Zastosowanie", value: "Druk 3D" },
                  { icon: Printer, label: "Materiał", value: "Żywica" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-[var(--brand-soft)]/60 p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[11px] text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/realizacje"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Zobacz projekt
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <img
                src="/assets/wazon/render-hero.jpg"
                alt="Wazon gotycki — finalny render modelu 3D przygotowanego do druku"
                loading="lazy"
                className="w-full rounded-2xl object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-border p-6 sm:p-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "KONCEPCJA",
                desc: "Szkice i opracowanie formy inspirowanej ornamentyką gotycką.",
                img: "/assets/wazon/szkic.jpg",
                alt: "Szkice koncepcyjne wazonu gotyckiego",
              },
              {
                n: "02",
                title: "MODELOWANIE",
                desc: "Budowa modelu 3D i podział na poligrupy w ZBrush.",
                img: "/assets/wazon/blockout.jpg",
                alt: "Model wazonu z poligrupami w programie ZBrush",
              },
              {
                n: "03",
                title: "OPRACOWANIE MODELU",
                desc: "Dopracowanie detali oraz przygotowanie modelu w Meshmixerze.",
                img: "/assets/wazon/meshmixer.jpg",
                alt: "Detale ornamentu wazonu w programie Meshmixer",
              },
              {
                n: "04",
                title: "GOTOWY MODEL",
                desc: "Finalny model przygotowany pod druk 3D.",
                img: "/assets/wazon/render.jpg",
                alt: "Finalny render ciemnego wazonu gotyckiego",
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-xs font-semibold text-[var(--brand)]">
                    {step.n}
                  </span>
                  <div>
                    <div className="text-xs font-semibold tracking-wide">{step.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-40 w-full overflow-hidden rounded-xl border border-border bg-muted sm:h-44">
                  <img
                    src={step.img}
                    alt={step.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="mx-auto max-w-[1200px] border-t border-border px-6 py-14">
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
          O MNIE
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr_1fr]">
          <div className="h-[240px] w-full overflow-hidden rounded-xl border border-border">
            <img
              src={awatar3.url}
              alt="Zdjęcie profilowe projektanta 3D"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Od szkicu do gotowego modelu.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Moja przygoda z grafiką zaczęła się od rysunku i szkiców. Z czasem przeniosłem się do
              grafiki cyfrowej – tworzyłem ilustracje, grafiki wektorowe, projekty do druku, UI i
              concept art.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Obecnie specjalizuję się w projektowaniu 3D. Doświadczenie w 2D pomaga mi lepiej
              planować formę, detale i proporcje. Dzięki temu tworzę dopasowane modele do druku,
              gier i wizualizacji.
            </p>
            <Link
              to="/kontakt"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Dowiedz się więcej
            </Link>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold tracking-wider">NARZĘDZIA, NA KTÓRYCH PRACUJĘ</div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
              <span className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium">
                i inne <Plus className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center">
            <Logo height={32} />
          </div>
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
