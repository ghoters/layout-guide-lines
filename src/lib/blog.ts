export type BlogCategory =
  | "Projektowanie 3D"
  | "Druk 3D"
  | "Modelowanie 3D"
  | "Druk 3D FDM"
  | "Druk 3D SLA"
  | "Wizualizacje 3D"
  | "Case study"
  | "Poradniki";

export const blogCategories: BlogCategory[] = [
  "Projektowanie 3D",
  "Druk 3D",
];

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogSection {
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  image: { url: string; alt: string };
  keyword: string;
  date: string;
  readingMinutes: number;
  intro: string;
  sections: BlogSection[];
  faq: FaqItem[];
  cta?: string;
}

const defaultCta =
  "Masz pomysł na model 3D? Skontaktuj się ze mną i otrzymaj bezpłatną wycenę projektu.";

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-wyglada-proces-projektowania-modelu-3d",
    title: "Jak wygląda proces projektowania modelu 3D?",
    h1: "Jak wygląda proces projektowania modelu 3D?",
    metaTitle: "Jak wygląda proces projektowania modelu 3D? | 3dmodele.pl",
    metaDescription: "Krok po kroku przez cały proces projektowania modelu 3D — od pomysłu do gotowego modelu. Zobacz, jak wygląda praca nad projektem 3D na zamówienie.",
    excerpt: "Krok po kroku przez cały proces – od pomysłu do gotowego modelu.",
    category: "Projektowanie 3D",
    image: { url: "/assets/blog-projektowanie.jpg", alt: "Proces projektowania modelu 3D" },
    keyword: "projektowanie modelu 3D",
    date: "2024-05-12",
    readingMinutes: 6,
    intro: "Projektowanie modelu 3D to uporządkowany proces, w którym pomysł klienta zamienia się w gotowy plik do druku, wizualizacji lub gry. Poniżej pokazuję, jak wygląda ten proces krok po kroku.",
    sections: [
      { heading: "1. Brief i analiza pomysłu", level: 2, paragraphs: ["Każdy projekt zaczynam od krótkiej rozmowy. Zbieram informacje o przeznaczeniu modelu, wymiarach, technologii druku (FDM czy SLA) i oczekiwanym poziomie detalu.", "Im dokładniejszy brief, tym mniej poprawek na dalszych etapach — dlatego warto od razu przesłać szkice, zdjęcia referencyjne lub linki do inspiracji."] },
      { heading: "2. Wycena i harmonogram", level: 2, paragraphs: ["Na podstawie briefu przygotowuję wycenę projektowania 3D i realny termin realizacji. Wycena zawsze obejmuje konkretną liczbę poprawek, żeby uniknąć niedomówień."] },
      { heading: "3. Modelowanie 3D", level: 2, paragraphs: ["To główna część pracy. Modelowanie 3D do druku wymaga innej optymalizacji niż model do wizualizacji czy gry — dbam m.in. o odpowiednią grubość ścianek, brak nieszczelnych siatek i tolerancje pasowań.", "Na tym etapie wysyłam podglądy (rendery, obroty 360°) do akceptacji. Nanoszę poprawki i dopracowuję detale."] },
      { heading: "4. Przygotowanie plików", level: 2, paragraphs: ["Gotowy projekt eksportuję do formatu STL lub 3MF. Jeśli model trafia do wizualizacji, przekazuję pliki źródłowe wraz z materiałami PBR."] },
      { heading: "5. Druk lub przekazanie plików klientowi", level: 2, paragraphs: ["Model można wydrukować w technologii FDM lub SLA, albo przekazać pliki do własnej drukarki. Zawsze doradzam, która technologia będzie w danym przypadku lepsza."] },
    ],
    faq: [
      { q: "Ile trwa projektowanie modelu 3D?", a: "Prosty model powstaje w 2–5 dni roboczych. Bardziej złożone projekty, np. figurki czy modele mechaniczne, zajmują 1–3 tygodnie." },
      { q: "Czy dostanę pliki źródłowe?", a: "Tak, po opłaceniu zlecenia przekazuję pliki wynikowe (STL/3MF). Pliki źródłowe modelu są dostępne po wcześniejszym ustaleniu warunków." },
    ],
    cta: defaultCta,
  },
  {
    slug: "jak-przygotowac-model-do-druku-3d",
    title: "Jak przygotować model do druku 3D?",
    h1: "Jak przygotować model do druku 3D?",
    metaTitle: "Jak przygotować model do druku 3D? | 3dmodele.pl",
    metaDescription: "Najważniejsze zasady przygotowania pliku do druku 3D — grubości ścianek, tolerancje, orientacja i najczęstsze błędy. Praktyczny poradnik.",
    excerpt: "Najważniejsze zasady przygotowania pliku do druku 3D.",
    category: "Druk 3D",
    image: { url: "/assets/blog-druk.jpg", alt: "Przygotowanie modelu do druku 3D" },
    keyword: "model do druku 3D",
    date: "2024-05-08",
    readingMinutes: 5,
    intro: "Zanim wyślesz model do drukarki, warto sprawdzić kilka rzeczy. Dobrze przygotowany model do druku 3D oszczędza czas, materiał i nerwy.",
    sections: [
      { heading: "Zamknięta i szczelna geometria", level: 2, paragraphs: ["Model musi być tzw. „manifold” — bez dziur, odwróconych normalnych i zdublowanych ścianek. Slicery lubią zamknięte bryły."] },
      { heading: "Grubości ścianek", level: 2, paragraphs: ["Dla druku FDM minimalna grubość ścianek to zwykle 1,2 mm, dla SLA — od 0,8 mm. Zbyt cienkie ścianki pękają lub w ogóle się nie drukują."] },
      { heading: "Tolerancje pasowań", level: 2, paragraphs: ["Dla elementów łączonych warto zostawić 0,2–0,4 mm luzu. Wartość zależy od kalibracji drukarki i materiału."] },
      { heading: "Orientacja i podpory", level: 2, paragraphs: ["Odpowiednia orientacja modelu na stole roboczym minimalizuje liczbę podpór i poprawia jakość powierzchni widocznych."] },
    ],
    faq: [
      { q: "W jakim formacie zapisać model?", a: "Najczęściej używa się STL lub 3MF. 3MF przenosi więcej informacji (kolor, jednostki), STL jest bardziej uniwersalny." },
      { q: "Czy muszę samodzielnie ustawiać podpory?", a: "Nie — zajmuje się tym slicer lub osoba drukująca model. Warto jednak zaprojektować model tak, aby minimalizować liczbę podpór." },
    ],
    cta: defaultCta,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
