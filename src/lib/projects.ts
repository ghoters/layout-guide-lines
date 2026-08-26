const szkieletThumb = { url: "/assets/szkielet3.jpg" };
const jozefThumb = { url: "/assets/jOszef-2.jpg" };
const gunThumb = { url: "/assets/revolwer.jpg" };
const martinThumb = { url: "/assets/martin.jpg" };
const elephantThumb = { url: "/assets/elephant.jpg" };
const wiezaThumb = { url: "/assets/WieOLa.jpg" };
const forestThumb = { url: "/assets/forest.jpg" };
const elementThumb = { url: "/assets/konstr.jpg" };

const szkieletFull = { url: "/assets/szkielet-2.jpg" };
const jozefFull = { url: "/assets/FiguraJozefa.jpg" };
const gunFull = { url: "/assets/gun.jpg" };
const martinFull = { url: "/assets/martingore.jpg" };
const elephantFull = { url: "/assets/MechaElephant.jpg" };
const wiezaFull = { url: "/assets/Wieza-2.jpg" };
const forestFull = { url: "/assets/forest-2.jpg" };
const elementFull = { url: "/assets/element_uzytkowy.jpg" };

export const categories = ["Druk 3D", "CAD", "Gry", "Wizualizacje"] as const;
export type Category = (typeof categories)[number];

export const projects = [
  {
    title: "Szkielet",
    tag: "Druk 3D, żywica",
    category: "Druk 3D" as Category,
    badge: "DRUK 3D",
    desc: "Model figurki kolekcjonerskiej przygotowany do druku w żywicy.",
    tags: ["Sculpting", "ZBrush", "Druk żywiczny"],
    image: szkieletThumb,
    fullImage: szkieletFull,
  },
  {
    title: "Figurka św. Józefa",
    tag: "Druk 3D, FDM",
    category: "Druk 3D" as Category,
    badge: "DRUK 3D",
    desc: "Figura religijna wykonana z dbałością o detale, gotowa do druku FDM.",
    tags: ["Model 3D", "FDM", "Detale"],
    image: jozefThumb,
    fullImage: jozefFull,
  },
  {
    title: "Rewolwer",
    tag: "Game asset",
    category: "Gry" as Category,
    badge: "GRA",
    desc: "Game asset przygotowany do wykorzystania w grze.",
    tags: ["Blender", "Low-poly", "PBR"],
    image: gunThumb,
    fullImage: gunFull,
  },
  {
    title: "Gitarzysta",
    tag: "Druk 3D, żywica",
    category: "Druk 3D" as Category,
    badge: "DRUK 3D",
    desc: "Figurka muzyka do druku w żywicy z odwzorowaniem detali.",
    tags: ["Sculpting", "ZBrush", "Druk żywiczny"],
    image: martinThumb,
    fullImage: martinFull,
  },
  {
    title: "Mecha Elephant",
    tag: "Game asset",
    category: "Gry" as Category,
    badge: "GRA",
    desc: "Koncepcja mecha do gry – model wysokiej jakości.",
    tags: ["High-poly", "ZBrush", "Koncepcja"],
    image: elephantThumb,
    fullImage: elephantFull,
  },
  {
    title: "Wieża ciśnień",
    tag: "Druk 3D, FDM",
    category: "Druk 3D" as Category,
    badge: "DRUK 3D",
    desc: "Model architektoniczny przygotowany do druku FDM.",
    tags: ["Model 3D", "FDM", "Architektura"],
    image: wiezaThumb,
    fullImage: wiezaFull,
  },
  {
    title: "Concept lasu",
    tag: "Ilustracja",
    category: "Wizualizacje" as Category,
    badge: "WIZUALIZACJA",
    desc: "Ilustracja koncepcyjna do projektu gry lub filmu.",
    tags: ["Koncept", "Photoshop", "Ilustracja"],
    image: forestThumb,
    fullImage: forestFull,
  },
  {
    title: "Element użytkowy",
    tag: "Druk 3D, FDM",
    category: "CAD" as Category,
    badge: "CAD",
    desc: "Projekt elementu technicznego przystosowanego do druku 3D.",
    tags: ["CAD", "FDM", "Część techniczna"],
    image: elementThumb,
    fullImage: elementFull,
  },
];

export type Project = (typeof projects)[number];
