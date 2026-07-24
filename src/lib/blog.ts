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

export interface FaqItem { q: string; a: string; }
export interface BlogAuthor { name: string; role?: string; avatar?: string; }
export interface BlogListBlock { style: "bullet" | "number"; items: string[]; }
export interface BlogCallout { style: "info" | "tip" | "quote"; text: string; author?: string; }
export interface BlogTable { headers: string[]; rows: string[][]; }
export interface BlogSectionImage { url: string; alt: string; caption?: string; }

export interface BlogSection {
  heading: string;
  level?: 2 | 3;
  paragraphs?: string[];
  list?: BlogListBlock;
  callout?: BlogCallout;
  table?: BlogTable;
  image?: BlogSectionImage;
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
  author?: BlogAuthor;
  intro: string;
  sections: BlogSection[];
  faq: FaqItem[];
  cta?: string;
}

// Simple file-based CMS: every .json under src/content/blog is a post.
const modules = import.meta.glob("../content/blog/*.json", { eager: true }) as Record<
  string,
  { default: BlogPost }
>;

export const blogPosts: BlogPost[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev?: BlogPost; next?: BlogPost } {
  const chronological = [...blogPosts].sort((a, b) => (a.date < b.date ? -1 : 1));
  const i = chronological.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: chronological[i - 1], next: chronological[i + 1] };
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const same = blogPosts.filter((p) => p.slug !== slug && p.category === post.category);
  if (same.length >= limit) return same.slice(0, limit);
  const rest = blogPosts.filter((p) => p.slug !== slug && p.category !== post.category);
  return [...same, ...rest].slice(0, limit);
}

export function sectionId(heading: string): string {
  return heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildToc(post: BlogPost): { id: string; heading: string; level: 2 | 3 }[] {
  return post.sections.map((s) => ({
    id: sectionId(s.heading),
    heading: s.heading,
    level: s.level ?? 2,
  }));
}
