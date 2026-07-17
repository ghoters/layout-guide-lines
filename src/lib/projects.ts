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

export const projects = [
  {
    title: "Szkielet",
    tag: "Druk 3D, żywica",
    image: szkieletThumb,
    fullImage: szkieletFull,
  },
  {
    title: "Figurka św. Józefa",
    tag: "Druk 3D, FDM",
    image: jozefThumb,
    fullImage: jozefFull,
  },
  {
    title: "Rewolwer",
    tag: "Game asset",
    image: gunThumb,
    fullImage: gunFull,
  },
  {
    title: "Gitarzysta",
    tag: "Druk 3D, żywica",
    image: martinThumb,
    fullImage: martinFull,
  },
  {
    title: "Mecha Elephant",
    tag: "Game asset",
    image: elephantThumb,
    fullImage: elephantFull,
  },
  {
    title: "Wieża ciśnień",
    tag: "Druk 3D, FDM",
    image: wiezaThumb,
    fullImage: wiezaFull,
  },
  {
    title: "Concept lasu",
    tag: "Ilustracja",
    image: forestThumb,
    fullImage: forestFull,
  },
  {
    title: "Element użytkowy",
    tag: "Druk 3D, FDM",
    image: elementThumb,
    fullImage: elementFull,
  },
];

export type Project = (typeof projects)[number];
