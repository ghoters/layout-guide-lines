import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Projektowanie modeli 3D | Druk 3D, CAD, modele do gier i wizualizacje | 3dmodele.pl" },
      {
        name: "description",
        content:
          "Projektowanie modeli 3D na zamówienie. Tworzę modele do druku 3D, modele do gier, wizualizacje, projekty CAD oraz pliki STL. Oferuję również profesjonalne wydruki 3D.",
      },
      { name: "author", content: "3dmodele.pl" },
      { property: "og:title", content: "Projektowanie modeli 3D | Druk 3D, CAD, modele do gier i wizualizacje | 3dmodele.pl" },
      {
        property: "og:description",
        content: "Projektowanie modeli 3D na zamówienie. Tworzę modele do druku 3D, modele do gier, wizualizacje, projekty CAD oraz pliki STL. Oferuję również profesjonalne wydruki 3D.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://modele3d-pl.lovable.app/" },
      { property: "og:image", content: "https://modele3d-pl.lovable.app/szkielet-og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "Szkielet 3D — model anatomiczny przygotowany do druku 3D" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@3dmodele.pl" },
      { name: "twitter:image", content: "https://modele3d-pl.lovable.app/szkielet-og.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/sygnet_nowy.png", type: "image/png", sizes: "512x512" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/sygnet_nowy.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "3dmodele.pl",
          description:
            "Projektowanie modeli 3D na zamówienie — do druku 3D (FDM i żywica), gier, wizualizacji i ilustracji.",
          url: "https://www.3dmodele.pl",
          email: "sebjara.ghoters@gmail.com",
          telephone: "+48576309671",
          areaServed: "PL",
          serviceType: [
            "Modele do druku 3D",
            "Wizualizacje 3D",
            "Modele do gier",
            "Grafika 2D",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
