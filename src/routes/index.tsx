import { createFileRoute } from "@tanstack/react-router";
import heroVase from "@/assets/hero-vase.png.asset.json";
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
  Settings,
  Plus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "Strona główna", active: true },
  { label: "O mnie" },
  { label: "Realizacje" },
  { label: "Wydruki 3D" },
  { label: "FAQ" },
  { label: "Kontakt" },
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

const projects = [
  { title: "wazon gotycki", tag: "Druk 3D, żywica" },
  { title: "Urządzenie sci-fi", tag: "Model 3D, wizualizacja" },
  { title: "Środowisko – koncept", tag: "Game asset" },
  { title: "Broń fantasy", tag: "Game asset" },
  { title: "Helm sci-fi", tag: "Druk 3D, FDM" },
  { title: "Figurka kolekcjonerska", tag: "Druk 3D, żywica" },
  { title: "Pojazd koncept", tag: "Game asset" },
  { title: "Wizualizacja produktu", tag: "Wizualizacja 3D" },
];

const steps = [
  { n: 1, icon: MessageSquare, title: "Rozmowa", desc: "Poznam Twoich potrzeb i oczekiwań." },
  { n: 2, icon: ClipboardList, title: "Omówienie projektu", desc: "Ustalamy szczegóły, zakres i wycenę." },
  { n: 3, icon: Package, title: "Projekt", desc: "Tworzę modeli precyzjeni do weryfikacji." },
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
  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      {/* NAV */}
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
            <Settings className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold tracking-wide">PROJEKTOWANIE 3D</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href="#"
              className={`text-sm ${l.active ? "font-medium text-[var(--brand)] underline underline-offset-8" : "text-foreground/80 hover:text-foreground"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
          Wyślij zapytanie <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden px-6 pb-20 pt-20">
          <img
            src={heroVase.url}
            alt="Model 3D — wazon gotycki"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative min-h-[620px] lg:min-h-[620px]">
          <div className="max-w-2xl pt-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              PROJEKTOWANIE 3D
            </div>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-sm md:text-6xl">
              Tworzę modele <span className="text-[var(--brand)]">3D</span>
              <br />
              dopasowane do
              <br />
              Twoich potrzeb.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/90 drop-shadow-sm">
              Modele do druku 3D, gier, wizualizacji i nie tylko.
              <br />
              Od pomysłu do gotowego projektu.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                Wyślij zapytanie <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#realizacje" className="inline-flex items-center gap-2 text-sm font-medium drop-shadow-sm">
                Zobacz realizacje <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { icon: Clock, value: "6+", label: "lat doświadczenia" },
                { icon: Mail, value: "100+", label: "zrealizowanych projektów" },
                { icon: Star, value: "100%", label: "zaangażowania" },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-[var(--brand)] backdrop-blur-sm">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--brand)] drop-shadow-sm">{s.value}</div>
                    <div className="text-xs text-foreground/80 drop-shadow-sm">{s.label}</div>
                  </div>
                </div>
              ))}
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
      <section id="realizacje" className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            WYBRANE REALIZACJE
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]">
            Zobacz wszystkie realizacje <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.title} className="space-y-3">
              <Placeholder className="h-[170px] w-full" label="Obrazek realizacji" />
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.tag}</div>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 text-[var(--brand)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS + ADVANTAGES */}
      <section className="mx-auto max-w-[1200px] border-t border-border px-6 py-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-8 text-xs font-semibold tracking-wider text-foreground">
              JAK WYGLĄDA WSPÓŁPRACA
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-px border-t border-dashed border-border" />
              <div className="relative grid grid-cols-5 gap-2">
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
            <div className="mb-8 text-xs font-semibold tracking-wider text-foreground">
              DLACZEGO WARTO ZE MNĄ WSPÓŁPRACOWAĆ?
            </div>
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

      {/* ABOUT + TOOLS */}
      <section className="mx-auto max-w-[1200px] border-t border-border px-6 py-14">
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
          O MNIE
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr_1fr]">
          <Placeholder className="h-[240px] w-full" label="Zdjęcie" />
          <div>
            <h3 className="text-xl font-bold">Od szkicu do gotowego modelu.</h3>
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
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Dowiedz się więcej
            </button>
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
            <h3 className="text-xl font-bold">Masz pomysł na projekt?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Napisz lub zadzwoń – chętnie pomogę.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
              <Mail className="h-4 w-4" />
            </div>
            <span className="text-sm">hello@twojadomena.pl</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-sm">+48 123 456 789</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Wyślij zapytanie <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
              <Settings className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold tracking-wide">PROJEKTOWANIE 3D</span>
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
