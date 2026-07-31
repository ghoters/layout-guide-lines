export type BlogCategory =
  | "Projektowanie 3D"
  | "Druk 3D"
  | "Modelowanie 3D"
  | "Druk 3D FDM"
  | "Druk 3D SLA"
  | "Wizualizacje 3D"
  | "Case study"
  | "Poradniki"
  | "Modele 3D";

export const blogCategories: BlogCategory[] = [
  "Projektowanie 3D",
  "Druk 3D",
  "Poradniki",
  "Modele 3D",
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
  {
    slug: "stl-czy-step-ktory-format-wybrac",
    title: "STL czy STEP – który format wybrać?",
    h1: "STL czy STEP – który format wybrać?",
    metaTitle: "STL czy STEP – który format wybrać? | 3dmodele.pl",
    metaDescription: "Porównanie formatów plików 3D STL i STEP oraz ich zastosowań w praktyce. Dowiedz się, kiedy używać STL, a kiedy STEP.",
    excerpt: "Porównanie formatów plików 3D i ich zastosowań w praktyce.",
    category: "Poradniki",
    image: { url: "/assets/blog-stl-vs-step.jpg", alt: "Porównanie formatów plików 3D STL i STEP" },
    keyword: "STL czy STEP",
    date: "2024-04-28",
    readingMinutes: 4,
    intro: "STL i STEP to dwa najpopularniejsze formaty plików 3D, ale służą do zupełnie innych rzeczy. Poniżej krótkie porównanie, które pomoże Ci wybrać właściwy format do Twojego projektu.",
    sections: [
      { heading: "Czym jest STL?", level: 2, paragraphs: ["STL (Stereolithography) to format opisujący geometrię modelu w postaci siatki trójkątów. Jest standardem w druku 3D — obsługują go wszystkie slicery i drukarki.", "Wadą STL jest brak informacji o wymiarach parametrycznych, historii operacji czy tolerancjach. To plik „gotowy do druku”, ale trudny do edycji."] },
      { heading: "Czym jest STEP?", level: 2, paragraphs: ["STEP (ISO 10303) to format wymiany danych CAD. Przechowuje geometrię jako precyzyjne bryły (BREP), zachowując wymiary, powierzchnie i strukturę modelu.", "STEP jest idealny do współpracy między programami CAD (SolidWorks, Fusion 360, Inventor) oraz do dalszej edycji modelu."] },
      { heading: "Kiedy STL, a kiedy STEP?", level: 2, paragraphs: ["STL wybierz, gdy plik trafia bezpośrednio do druku 3D lub do wizualizacji, a model nie będzie już modyfikowany.", "STEP wybierz, gdy model ma być dalej edytowany, wysłany do produkcji CNC, obróbki lub gdy współpracujesz z inżynierem korzystającym z innego programu CAD."] },
    ],
    faq: [
      { q: "Czy mogę wydrukować plik STEP?", a: "Bezpośrednio nie — najpierw trzeba go skonwertować do STL lub 3MF w slicerze albo programie CAD." },
      { q: "Który format jest dokładniejszy?", a: "STEP — opisuje geometrię matematycznie, bez uproszczeń. STL aproksymuje krzywizny trójkątami, więc dokładność zależy od gęstości siatki." },
    ],
    cta: defaultCta,
  },
];

blogPosts.push({
  slug: "modele-3d-czym-sa-jak-powstaja",
  title: "Modele 3D – czym są i jak powstają?",
  h1: "Co to jest model 3D?",
  metaTitle: "Modele 3D – czym są i jak powstają? | Kompletny poradnik | 3dmodele.pl",
  metaDescription:
    "Dowiedz się, czym są modele 3D, jak wygląda projektowanie modeli 3D oraz gdzie wykorzystuje się modele do druku 3D, gier i wizualizacji. Praktyczny poradnik.",
  excerpt:
    "Wyjaśniamy czym jest model 3D, jak powstaje i gdzie znajduje zastosowanie. Praktyczny przewodnik dla początkujących i nie tylko.",
  category: "Modele 3D",
  image: { url: "/assets/blog-model-3d-hero.jpg", alt: "Model 3D wspornika mechanicznego" },
  keyword: "modele 3D",
  date: "2024-05-12",
  readingMinutes: 6,
  intro:
    "Modele 3D to fundament współczesnego projektowania, prototypowania i produkcji. W tym poradniku wyjaśniamy, czym są, jak powstają i gdzie znajdują zastosowanie.",
  sections: [],
  faq: [
    { q: "Czy każdy model 3D nadaje się do druku 3D?", a: "Nie. Aby model nadawał się do druku 3D, musi być tzw. „manifold” – szczelny, bez dziur i błędów siatki. Modele do gier lub wizualizacji często wymagają dodatkowej optymalizacji." },
    { q: "Czym różni się model CAD od modelu do gry?", a: "Model CAD skupia się na precyzyjnej geometrii i wymiarach – używany jest w inżynierii i produkcji. Model do gry jest zoptymalizowany pod wydajność, ma mniej poligonów i wykorzystuje tekstury." },
    { q: "Jaki program wybrać do tworzenia modeli 3D?", a: "Do modeli CAD sprawdzą się SolidWorks, Fusion 360 czy Inventor. Do modeli do druku, gier i wizualizacji popularne są Blender, ZBrush oraz 3ds Max." },
    { q: "Czy model 3D musi mieć tekstury?", a: "Nie zawsze. Modele do druku 3D zwykle nie potrzebują tekstur. Są one niezbędne w wizualizacjach, animacjach i grach, gdzie decydują o wyglądzie modelu." },
  ],
  cta: defaultCta,
});

blogPosts.push({
  slug: "najczestsze-bledy-w-projektowaniu-modeli-do-druku-3d",
  title: "Najczęstsze błędy w projektowaniu modeli do druku 3D",
  h1: "Najczęstsze błędy w projektowaniu modeli do druku 3D",
  metaTitle: "Najczęstsze błędy w projektowaniu modeli do druku 3D | 3dmodele.pl",
  metaDescription:
    "Zbyt cienkie ścianki, zapomniane tolerancje, brak fasek — omawiam najczęstsze błędy w projektowaniu modeli do druku 3D i podpowiadam, jak ich unikać.",
  excerpt:
    "Zbyt cienkie ścianki, zapomniane tolerancje, brak fasek — omawiam najczęstsze błędy w projektowaniu modeli do druku 3D i podpowiadam, jak ich unikać.",
  category: "Poradniki",
  image: { url: "/assets/blog-bledy-hero.jpg", alt: "Czarny wydrukowany model 3D" },
  keyword: "najczęstsze błędy w projektowaniu modeli do druku 3D",
  date: "2025-02-05",
  readingMinutes: 5,
  intro:
    "Nawet drobny błąd w projekcie może skończyć się nieudanym wydrukiem. Poniżej znajdziesz listę najczęstszych problemów i praktyczne wskazówki, jak ich unikać.",
  sections: [],
  faq: [
    { q: "Czy każdy błąd geometrii da się naprawić?", a: "Większość błędów typu dziury czy odwrócone normalne można naprawić automatycznie w programach takich jak Meshmixer, Netfabb czy 3D Builder. Bardzo złożone uszkodzenia mogą wymagać ręcznej poprawy modelu." },
    { q: "Jaką grubość ścianki przyjąć dla druku FDM?", a: "Dla druku FDM zalecam minimum 1,2 mm. Im grubsze ścianki, tym wydruk jest wytrzymalszy, ale równocześnie rośnie czas i zużycie materiału." },
    { q: "Jak sprawdzić, czy tolerancje pasowań są dobre?", a: "Najlepiej wykonać próbny wydruk małego fragmentu pasowania lub przesymulować luz w programie CAD. Typowy luz dla FDM to 0,2–0,4 mm." },
    { q: "Czy fasetki są konieczne w każdym modelu?", a: "Nie. Fasetki dodaje się tam, gdzie elementy mają się ze sobą stykać, osadzać lub montować – ułatwiają to montaż i zmniejszają ryzyko uszkodzenia krawędzi." },
  ],
  cta: defaultCta,
});

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
