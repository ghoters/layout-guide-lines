export type BlogCategory =
  | "Projektowanie 3D"
  | "Druk 3D"
  | "Wizualizacje"
  | "Modele do gier"
  | "Poradniki"
  | "Case study"
  | "Aktualności";

export const blogCategories: BlogCategory[] = [
  "Projektowanie 3D",
  "Druk 3D",
  "Wizualizacje",
  "Modele do gier",
  "Poradniki",
  "Case study",
  "Aktualności",
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
    slug: "jak-wyglada-proces-projektowania-modelu-3d-na-zamowienie",
    title: "Jak wygląda proces projektowania modelu 3D na zamówienie?",
    h1: "Jak wygląda proces projektowania 3D na zamówienie?",
    metaTitle: "Projektowanie 3D na zamówienie — jak wygląda cały proces? | 3dmodele.pl",
    metaDescription: "Zobacz krok po kroku, jak wygląda projektowanie 3D na zamówienie — od briefu, przez modelowanie 3D, po gotowy plik do druku 3D FDM lub SLA.",
    excerpt: "Sprawdź, jak przebiega projektowanie 3D na zamówienie — od pierwszej rozmowy, przez modelowanie 3D, aż po gotowy model 3D do druku FDM lub SLA.",
    category: "Projektowanie 3D",
    image: { url: "/src-assets/blog/thumb-proces.jpg", alt: "Projektowanie modelu 3D na zamówienie" },
    keyword: "projektowanie 3D na zamówienie",
    date: "2025-01-15",
    readingMinutes: 6,
    intro: "Projektowanie 3D na zamówienie to nie tylko modelowanie w programie. To uporządkowany proces, w którym pomysł klienta zamienia się w gotowy model 3D — do druku 3D, wizualizacji lub gry. Poniżej pokazuję, jak wygląda ten proces krok po kroku u mnie w 3dmodele.pl.",
    sections: [
      { heading: "1. Brief i analiza pomysłu", level: 2, paragraphs: ["Każdy projekt zaczynam od krótkiej rozmowy. Zbieram informacje o przeznaczeniu modelu, wymiarach, technologii druku (FDM czy SLA) i oczekiwanym poziomie detalu.", "Im dokładniejszy brief, tym mniej poprawek na dalszych etapach — dlatego warto od razu przesłać szkice, zdjęcia referencyjne lub linki do inspiracji."] },
      { heading: "2. Wycena i harmonogram", level: 2, paragraphs: ["Na podstawie briefu przygotowuję wycenę projektowania 3D i realny termin realizacji. Wycena zawsze obejmuje konkretną liczbę poprawek, żeby uniknąć niedomówień."] },
      { heading: "3. Modelowanie 3D", level: 2, paragraphs: ["To główna część pracy. Modelowanie 3D do druku wymaga innej optymalizacji niż model do wizualizacji czy gry — dbam m.in. o odpowiednią grubość ścianek, brak nieszczelnych siatek i tolerancje pasowań.", "Na tym etapie wysyłam podglądy (rendery, obroty 360°) do akceptacji. Nanoszę poprawki i dopracowuję detale."] },
      { heading: "4. Przygotowanie plików", level: 2, paragraphs: ["Gotowy projekt 3D do druku eksportuję do formatu STL lub 3MF. Jeśli model trafia do wizualizacji, przekazuję pliki źródłowe wraz z materiałami PBR."] },
      { heading: "5. Druk 3D lub przekazanie plików klientowi", level: 2, paragraphs: ["Model można wydrukować u mnie w technologii druku 3D FDM lub SLA, albo przekazać pliki do własnej drukarki. Zawsze doradzam, która technologia będzie w danym przypadku lepsza."] },
    ],
    faq: [
      { q: "Ile trwa projektowanie 3D na zamówienie?", a: "Prosty model powstaje w 2–5 dni roboczych. Bardziej złożone projekty, np. figurki czy modele mechaniczne, zajmują 1–3 tygodnie." },
      { q: "Czy dostanę pliki źródłowe?", a: "Tak, po opłaceniu zlecenia przekazuję pliki wynikowe (STL/3MF). Pliki źródłowe modelu są dostępne po wcześniejszym ustaleniu warunków." },
    ],
    cta: defaultCta,
  },
  {
    slug: "ile-kosztuje-modelowanie-3d-do-druku",
    title: "Ile kosztuje modelowanie 3D do druku?",
    h1: "Ile kosztuje modelowanie 3D do druku?",
    metaTitle: "Ile kosztuje modelowanie 3D do druku? Cennik i wycena | 3dmodele.pl",
    metaDescription: "Sprawdź, od czego zależy cena modelowania 3D do druku i ile realnie kosztuje projekt 3D do druku FDM lub SLA. Praktyczny przewodnik po wycenie.",
    excerpt: "Cena modelowania 3D zależy od złożoności, technologii druku i poziomu detalu. Wyjaśniam, jak wygląda wycena projektu 3D do druku krok po kroku.",
    category: "Poradniki",
    image: { url: "/src-assets/blog/thumb-formaty.jpg", alt: "Modelowanie 3D do druku — wycena" },
    keyword: "modelowanie 3D do druku",
    date: "2025-01-20",
    readingMinutes: 5,
    intro: "Pytanie „ile kosztuje modelowanie 3D do druku?” pada niemal w każdym pierwszym mailu. Nie ma jednej odpowiedzi — cena zależy od kilku czynników, które łatwo można oszacować.",
    sections: [
      { heading: "Od czego zależy cena modelowania 3D", level: 2, paragraphs: ["Największy wpływ na wycenę ma złożoność geometrii, poziom detalu oraz to, czy model 3D do druku ma spełniać funkcje mechaniczne (pasowania, ruchome części).", "Znaczenie ma również technologia — modele do druku 3D SLA wymagają innej optymalizacji niż projekty pod druk 3D FDM."] },
      { heading: "Orientacyjne widełki cenowe", level: 2, paragraphs: ["Proste modele użytkowe (uchwyty, obudowy, adaptery): od ok. 150 zł.", "Figurki i modele artystyczne: od ok. 400 zł w górę, w zależności od detalu.", "Zaawansowane projekty mechaniczne i prototypy: wycena indywidualna."] },
      { heading: "Co obniża, a co podnosi koszt", level: 2, paragraphs: ["Koszt obniża dobry brief, jednoznaczne referencje i przemyślana funkcja modelu. Podnoszą go liczne poprawki koncepcyjne, brak wymiarów oraz projekty „na styk” tolerancji druku."] },
    ],
    faq: [
      { q: "Czy wycena jest darmowa?", a: "Tak, przygotowanie wyceny projektu 3D do druku jest bezpłatne i niezobowiązujące." },
      { q: "Czy mogę dostać wycenę na podstawie zdjęcia?", a: "Tak — wystarczą zdjęcia, szkic i wymiary. Na tej podstawie oszacuję czas i koszt modelowania 3D." },
    ],
    cta: defaultCta,
  },
  {
    slug: "fdm-czy-sla-ktora-technologie-druku-3d-wybrac",
    title: "FDM czy SLA – którą technologię druku 3D wybrać?",
    h1: "Druk 3D FDM czy SLA — którą technologię wybrać?",
    metaTitle: "Druk 3D FDM czy SLA — porównanie technologii | 3dmodele.pl",
    metaDescription: "Druk 3D FDM czy druk 3D SLA? Porównuję obie technologie pod kątem jakości, ceny i zastosowań, żeby ułatwić wybór dla Twojego projektu 3D.",
    excerpt: "Porównanie druku 3D FDM i SLA — kiedy wybrać żywicę, a kiedy filament. Praktyczny przewodnik dla osób planujących modele 3D do druku.",
    category: "Druk 3D",
    image: { url: "/src-assets/blog/thumb-druk.jpg", alt: "Porównanie druku 3D FDM i SLA" },
    keyword: "druk 3D FDM",
    date: "2025-01-25",
    readingMinutes: 7,
    intro: "Druk 3D FDM i druk 3D SLA to dwie najpopularniejsze technologie druku 3D. Każda z nich sprawdza się w innych zastosowaniach. Zobacz, kiedy wybrać którą.",
    sections: [
      { heading: "Druk 3D FDM — mocne i słabe strony", level: 2, paragraphs: ["FDM (Fused Deposition Modeling) to druk z filamentu. Świetnie sprawdza się przy większych, funkcjonalnych modelach użytkowych, prototypach i częściach mechanicznych.", "Zaletą jest niski koszt materiału i duża wytrzymałość gotowych elementów."] },
      { heading: "Druk 3D SLA — mocne i słabe strony", level: 2, paragraphs: ["SLA to druk z żywicy fotoutwardzalnej. Daje bardzo wysoki poziom detalu, gładkie powierzchnie i sprawdza się przy figurkach, biżuterii i modelach dentystycznych.", "Wadą jest wyższa cena materiału i konieczność obróbki po druku (mycie, dotwardzanie)."] },
      { heading: "Kiedy FDM, a kiedy SLA", level: 2, paragraphs: ["Wybieraj FDM dla dużych elementów użytkowych i prototypów. Wybieraj SLA, jeśli zależy Ci na detalu i estetyce — np. modele kolekcjonerskie, figurki, elementy jubilerskie."] },
    ],
    faq: [
      { q: "Czy jeden model można wydrukować w obu technologiach?", a: "Tak, ale zwykle wymaga to lekkiej reoptymalizacji modelu 3D pod docelową technologię." },
      { q: "Która technologia jest tańsza?", a: "Przy dużych, prostych elementach tańszy jest zwykle druk 3D FDM. Przy małych, detalicznych — koszty potrafią się zrównać." },
    ],
    cta: defaultCta,
  },
  {
    slug: "jak-przygotowac-model-3d-do-druku",
    title: "Jak przygotować model 3D do druku?",
    h1: "Jak przygotować model 3D do druku — praktyczny poradnik",
    metaTitle: "Jak przygotować model 3D do druku (FDM i SLA) | 3dmodele.pl",
    metaDescription: "Poradnik: jak przygotować model 3D do druku FDM i SLA. Grubości ścianek, tolerancje, orientacja modelu i najczęstsze błędy.",
    excerpt: "Dowiedz się, jak przygotować model 3D do druku, żeby uniknąć błędów: grubości ścianek, tolerancje pasowań i optymalizacja pod FDM i SLA.",
    category: "Poradniki",
    image: { url: "/src-assets/blog/thumb-blender.jpg", alt: "Przygotowanie modelu 3D do druku" },
    keyword: "modele 3D do druku",
    date: "2025-02-01",
    readingMinutes: 6,
    intro: "Zanim wyślesz model do drukarki, warto sprawdzić kilka rzeczy. Dobrze przygotowany model 3D do druku oszczędza czas, materiał i nerwy.",
    sections: [
      { heading: "Zamknięta i szczelna geometria", level: 2, paragraphs: ["Model musi być tzw. „manifold” — bez dziur, odwróconych normalnych i zdublowanych ścianek. Slicery lubią zamknięte bryły."] },
      { heading: "Grubości ścianek", level: 2, paragraphs: ["Dla druku 3D FDM minimalna grubość ścianek to zwykle 1,2 mm, dla SLA — od 0,8 mm. Zbyt cienkie ścianki pękają lub w ogóle się nie drukują."] },
      { heading: "Tolerancje pasowań", level: 2, paragraphs: ["Dla elementów łączonych warto zostawić 0,2–0,4 mm luzu. Wartość zależy od kalibracji drukarki i materiału."] },
    ],
    faq: [
      { q: "W jakim formacie zapisać model?", a: "Najczęściej używa się STL lub 3MF. 3MF przenosi więcej informacji (kolor, jednostki), STL jest bardziej uniwersalny." },
      { q: "Czy muszę samodzielnie ustawiać podpory?", a: "Nie — zajmuje się tym slicer lub osoba drukująca model. Warto jednak zaprojektować model tak, aby minimalizować liczbę podpór." },
    ],
    cta: defaultCta,
  },
  {
    slug: "najczestsze-bledy-w-projektowaniu-modeli-do-druku-3d",
    title: "Najczęstsze błędy w projektowaniu modeli do druku 3D",
    h1: "Najczęstsze błędy w projektowaniu modeli 3D do druku",
    metaTitle: "Najczęstsze błędy w projektowaniu modeli 3D do druku | 3dmodele.pl",
    metaDescription: "Poznaj najczęstsze błędy w projektowaniu modeli 3D do druku FDM i SLA — od zbyt cienkich ścianek po złe tolerancje. Sprawdź, jak ich uniknąć.",
    excerpt: "Zbyt cienkie ścianki, zapomniane tolerancje, brak fasetek — omawiam najczęstsze błędy w projektowaniu modeli 3D do druku i pokazuję, jak ich uniknąć.",
    category: "Poradniki",
    image: { url: "/src-assets/blog/thumb-uchwyt.jpg", alt: "Błędy w modelach 3D do druku" },
    keyword: "modele 3D do druku",
    date: "2025-02-05",
    readingMinutes: 5,
    intro: "Wiele modeli, które trafiają do mnie do „poprawy”, ma podobne problemy. Poniżej lista najczęstszych błędów w modelowaniu 3D do druku — warto przejść tę checklistę przed wysłaniem projektu na drukarkę.",
    sections: [
      { heading: "Zbyt cienkie ścianki i detale", level: 2, paragraphs: ["Detal, który świetnie wygląda w programie, może być za cienki dla realnej drukarki. Zawsze warto zweryfikować minimalne grubości pod konkretną technologię."] },
      { heading: "Nieszczelna siatka", level: 2, paragraphs: ["Brakujące ścianki, odwrócone normalne, zdublowane wierzchołki — to najczęstszy powód błędów w slicerze."] },
      { heading: "Brak tolerancji dla łączeń", level: 2, paragraphs: ["Dwie części „na styk” w programie oznaczają w druku brak możliwości złożenia. Zawsze planuj luz."] },
    ],
    faq: [
      { q: "Czy da się „naprawić” model przed drukiem?", a: "Tak, wiele błędów można poprawić w programach typu Meshmixer czy Blender. Nie zawsze jednak da się uratować geometrię — czasem szybciej jest zamodelować od nowa." },
    ],
    cta: defaultCta,
  },
  {
    slug: "od-pomyslu-do-gotowego-wydruku-3d-case-study",
    title: "Od pomysłu do gotowego wydruku 3D – case study projektu",
    h1: "Od pomysłu do gotowego wydruku 3D — case study projektu",
    metaTitle: "Case study: od pomysłu do wydruku 3D — modelowanie i druk | 3dmodele.pl",
    metaDescription: "Case study projektu 3D: pokazuję, jak od pomysłu klienta doszliśmy do gotowego wydruku 3D — modelowanie, wycena, druk 3D FDM i SLA.",
    excerpt: "Studium przypadku pokazujące, jak od briefu klienta powstaje gotowy model 3D i wydruk — z realnymi decyzjami projektowymi.",
    category: "Case study",
    image: { url: "/src-assets/blog/thumb-uchwyt.jpg", alt: "Case study projektu 3D — od pomysłu do druku" },
    keyword: "projekt 3D do druku",
    date: "2025-02-10",
    readingMinutes: 6,
    intro: "W tym case study pokazuję, jak wygląda pełny cykl: od pierwszej rozmowy z klientem, przez modelowanie 3D, po gotowy wydruk 3D w technologii SLA.",
    sections: [
      { heading: "Brief klienta", level: 2, paragraphs: ["Klient przyszedł z pomysłem na figurkę kolekcjonerską. Miał zdjęcia referencyjne, wysokość docelową i oczekiwał wysokiego poziomu detalu."] },
      { heading: "Modelowanie i konsultacje", level: 2, paragraphs: ["Po pierwszej fazie modelowania wysłałem podglądy 360°. Po dwóch turach poprawek zatwierdziliśmy proporcje i detal."] },
      { heading: "Druk 3D SLA i wykończenie", level: 2, paragraphs: ["Ze względu na detal wybraliśmy druk 3D SLA. Po druku model został umyty, dotwardzony i przygotowany pod malowanie."] },
    ],
    faq: [
      { q: "Ile trwał cały projekt?", a: "Od pierwszego maila do gotowego wydruku minęły niecałe trzy tygodnie." },
    ],
    cta: defaultCta,
  },
  {
    slug: "jakie-pliki-sa-potrzebne-do-projektowania-3d",
    title: "Jakie pliki są potrzebne do projektowania 3D?",
    h1: "Jakie pliki są potrzebne do projektowania 3D?",
    metaTitle: "Jakie pliki są potrzebne do projektowania 3D? | 3dmodele.pl",
    metaDescription: "Sprawdź, jakie pliki i referencje warto przygotować przed rozpoczęciem projektowania 3D na zamówienie. Praktyczna checklista dla klienta.",
    excerpt: "Zdjęcia, szkice, rysunki techniczne, wymiary — sprawdź, co warto przygotować, aby zlecić projektowanie 3D na zamówienie.",
    category: "Projektowanie 3D",
    image: { url: "/src-assets/blog/thumb-proces.jpg", alt: "Pliki potrzebne do projektowania 3D" },
    keyword: "projektowanie 3D na zamówienie",
    date: "2025-02-15",
    readingMinutes: 4,
    intro: "Im lepiej przygotowane materiały, tym szybciej i taniej powstaje projekt 3D do druku. Oto lista rzeczy, które warto zebrać przed briefem.",
    sections: [
      { heading: "Zdjęcia i szkice", level: 2, paragraphs: ["Nawet ręczny szkic na kartce jest cenny. Zdjęcia z kilku stron pomagają zrozumieć proporcje i detale."] },
      { heading: "Wymiary i tolerancje", level: 2, paragraphs: ["Jeśli model ma coś pasować (obudowa, uchwyt, adapter), potrzebne są dokładne wymiary z tolerancjami."] },
      { heading: "Formaty plików źródłowych", level: 2, paragraphs: ["Jeśli masz już model (np. STEP, STL, OBJ), prześlij go — przyspieszy to prace nad projektowaniem 3D."] },
    ],
    faq: [
      { q: "Co jeśli mam tylko pomysł?", a: "To wystarczy. Opisz go możliwie szczegółowo — resztę omówimy w rozmowie." },
    ],
    cta: defaultCta,
  },
  {
    slug: "druk-3d-dla-firm-kiedy-warto-z-niego-skorzystac",
    title: "Druk 3D dla firm – kiedy warto z niego skorzystać?",
    h1: "Druk 3D dla firm — kiedy warto z niego skorzystać?",
    metaTitle: "Druk 3D dla firm — kiedy się opłaca? | 3dmodele.pl",
    metaDescription: "Druk 3D dla firm: prototypy, krótkie serie, części zamienne. Sprawdź, kiedy warto zainwestować w projektowanie 3D i druk 3D FDM lub SLA.",
    excerpt: "Prototypy, krótkie serie, części zamienne, gadżety marketingowe — kiedy druk 3D dla firm ma największy sens.",
    category: "Aktualności",
    image: { url: "/src-assets/blog/thumb-nowosci.jpg", alt: "Druk 3D dla firm" },
    keyword: "druk 3D FDM",
    date: "2025-02-20",
    readingMinutes: 5,
    intro: "Druk 3D nie jest już tylko technologią „dla hobbystów”. W firmach coraz częściej zastępuje kosztowne prototypowanie i produkcję krótkich serii.",
    sections: [
      { heading: "Prototypy i iteracje produktu", level: 2, paragraphs: ["Prototyp z druku 3D FDM lub SLA jest gotowy w kilka dni i za ułamek ceny wtrysku. To pozwala szybko testować i poprawiać projekt."] },
      { heading: "Krótkie serie i personalizacja", level: 2, paragraphs: ["Druk 3D świetnie sprawdza się przy seriach 10–500 sztuk, zwłaszcza jeśli każda ma się delikatnie różnić."] },
      { heading: "Części zamienne i akcesoria", level: 2, paragraphs: ["Zamiast wymieniać całe urządzenie, można wydrukować brakujący element. To realna oszczędność."] },
    ],
    faq: [
      { q: "Czy prowadzę współpracę B2B?", a: "Tak — od jednorazowych projektów po stałą współpracę przy prototypowaniu i modelowaniu 3D do druku." },
    ],
    cta: defaultCta,
  },
  {
    slug: "modelowanie-3d-figurki-na-zamowienie-jak-wyglada-wspolpraca",
    title: "Modelowanie 3D figurki na zamówienie – jak wygląda współpraca?",
    h1: "Modelowanie 3D figurki na zamówienie — jak wygląda współpraca?",
    metaTitle: "Modelowanie 3D figurki na zamówienie — jak wygląda proces | 3dmodele.pl",
    metaDescription: "Zamawiasz modelowanie 3D figurki? Zobacz, jak wygląda współpraca krok po kroku — od referencji, przez model 3D, po druk 3D SLA.",
    excerpt: "Zamówienie figurki 3D krok po kroku: referencje, modelowanie, akceptacja i druk 3D SLA. Sprawdź, jak wygląda to u mnie.",
    category: "Modele do gier",
    image: { url: "/src-assets/blog/thumb-gry.jpg", alt: "Modelowanie 3D figurki na zamówienie" },
    keyword: "modelowanie 3D do druku",
    date: "2025-02-25",
    readingMinutes: 5,
    intro: "Modelowanie 3D figurki na zamówienie to jedna z najczęstszych realizacji w 3dmodele.pl. Pokazuję, jak wygląda taka współpraca od pierwszej wiadomości.",
    sections: [
      { heading: "Referencje i brief", level: 2, paragraphs: ["Najlepiej zebrać kilka zdjęć/artów z różnych ujęć oraz opis, co jest kluczowe: podobieństwo, poza, detal ubioru."] },
      { heading: "Modelowanie i podglądy", level: 2, paragraphs: ["Pracę dzielę na etapy: blocking, sylwetka, detal, retopo pod druk. Na każdym etapie wysyłam podglądy."] },
      { heading: "Druk 3D SLA i finish", level: 2, paragraphs: ["Figurki drukuję głównie w technologii druku 3D SLA — daje najlepszy detal. Klient dostaje model gotowy pod malowanie."] },
    ],
    faq: [
      { q: "Czy modeluję figurki na podstawie zdjęć realnych osób?", a: "Tak, o ile mam do dyspozycji zdjęcia z kilku ujęć oraz zgodę osoby przedstawianej." },
    ],
    cta: defaultCta,
  },
  {
    slug: "wizualizacje-3d-produktow-dlaczego-zwiekszaja-sprzedaz",
    title: "Wizualizacje 3D produktów – dlaczego zwiększają sprzedaż?",
    h1: "Wizualizacje 3D produktów — dlaczego zwiększają sprzedaż?",
    metaTitle: "Wizualizacje 3D produktów — jak zwiększają sprzedaż | 3dmodele.pl",
    metaDescription: "Wizualizacje 3D produktów pozwalają pokazać produkt zanim powstanie i zwiększają konwersję w sklepach internetowych. Sprawdź, jak z nich korzystać.",
    excerpt: "Wizualizacje 3D produktów zwiększają zaufanie klienta i konwersję w sklepach online. Wyjaśniam, kiedy warto po nie sięgnąć.",
    category: "Wizualizacje",
    image: { url: "/src-assets/blog/thumb-wizualizacje.jpg", alt: "Wizualizacje 3D produktów" },
    keyword: "wizualizacje 3D produktów",
    date: "2025-03-01",
    readingMinutes: 5,
    intro: "Wizualizacje 3D produktów to jeden z najskuteczniejszych sposobów prezentacji oferty w e-commerce i materiałach marketingowych. I wcale nie muszą być drogie.",
    sections: [
      { heading: "Pokazujesz produkt zanim powstanie", level: 2, paragraphs: ["Dzięki wizualizacji 3D możesz prowadzić przedsprzedaż, kampanie i testy komunikacji bez fizycznego prototypu."] },
      { heading: "Spójna estetyka we wszystkich kanałach", level: 2, paragraphs: ["Renderujesz produkt raz, a potem generujesz obrazy pod stronę, sklep, social media i reklamy — z tą samą jakością."] },
      { heading: "Wyższa konwersja", level: 2, paragraphs: ["Realistyczne wizualizacje 3D zwiększają zaufanie klienta i zmniejszają liczbę zwrotów. To bezpośrednio przekłada się na sprzedaż."] },
    ],
    faq: [
      { q: "Czy potrzebuję modelu 3D, żeby zrobić wizualizację?", a: "Tak — ale mogę go dla Ciebie zamodelować od zera na podstawie zdjęć, rysunków lub prototypu." },
    ],
    cta: defaultCta,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
