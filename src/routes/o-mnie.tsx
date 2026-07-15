import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Settings,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Plus,
  User,
  Clock,
  Star,
  Headphones,
  CalendarClock,
} from "lucide-react";
import awatar3 from "@/assets/awatar3.jpg.asset.json";

export const Route = createFileRoute("/o-mnie")({
  head: () => ({
    meta: [
      { title: "O mnie — Projektowanie 3D" },
      {
        name: "description",
        content:
          "Poznaj mnie i moje doświadczenie w projektowaniu 2D i 3D. Tworzę modele do druku, gier i wizualizacji.",
      },
      { property: "og:title", content: "O mnie — Projektowanie 3D" },
      {
        property: "og:description",
        content:
          "Poznaj mnie i moje doświadczenie w projektowaniu 2D i 3D. Tworzę modele do druku, gier i wizualizacji.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OMnie,
});

const navLinks = [
  { label: "Strona główna", to: "/" },
  { label: "Realizacje", to: "/realizacje" },
  { label: "Kontakt", to: "/kontakt" },
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

function OMnie() {
  return (
    <div className="min-h-screen bg-[var(--page)] text-foreground">
      {/* NAV */}
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
            <Settings className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold tracking-wide">projektowanie3d.pl</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to as "/" | "/realizacje" | "/kontakt"}
              activeProps={{
                className:
                  "text-sm font-medium text-[var(--brand)] underline underline-offset-8",
              }}
              inactiveProps={{
                className: "text-sm text-foreground/80 hover:text-foreground",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Wyślij zapytanie <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            O MNIE
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Od szkicu do <span className="text-[var(--brand)]">gotowego modelu</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Łączę doświadczenie w grafice 2D i projektowaniu 3D, aby tworzyć modele dopasowane do
            druku, gier i wizualizacji.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          <div className="h-[320px] w-full overflow-hidden rounded-2xl border border-border lg:h-auto">
            <img
              src={awatar3.url}
              alt="Zdjęcie profilowe"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Kim jestem?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Moja przygoda z grafiką zaczęła się od rysunku i szkiców. Z czasem przeniosłem się
                do grafiki cyfrowej – tworzyłem ilustracje, grafiki wektorowe, projekty do druku, UI
                i concept art.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Obecnie specjalizuję się w projektowaniu 3D. Doświadczenie w 2D pomaga mi lepiej
                planować formę, detale i proporcje. Dzięki temu tworzę dopasowane modele do druku,
                gier i wizualizacji.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      {/* EXPERIENCE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold">Doświadczenie</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">6+ lat w branży</div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Wieloletnie doświadczenie w projektowaniu graficznym i modelowaniu 3D.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">1000+ zrealizowanych projektów</div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Modele do druku, gier, wizualizacji i materiałów marketingowych.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Narzędzia, na których pracuję</h2>
              <div className="mt-6 flex flex-wrap gap-2">
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
            <span className="text-sm">sebjara.ghoters@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-[var(--brand)]">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-sm">+48 576309671</span>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Wyślij zapytanie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
              <Settings className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold tracking-wide">projektowanie3d.pl</span>
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
