import { Link } from "@tanstack/react-router";

const links = [
  { label: "Strona główna", to: "/" as const },
  { label: "Realizacje", to: "/realizacje" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

export function MobileNav() {
  return (
    <nav className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 pb-4 md:hidden">
      {links.map((l) => (
        <Link
          key={l.label}
          to={l.to}
          activeProps={{ className: "text-sm font-semibold text-[var(--brand)] underline underline-offset-8" }}
          inactiveProps={{ className: "text-sm text-foreground/80 hover:text-foreground" }}
          activeOptions={{ exact: true }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}