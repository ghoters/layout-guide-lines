import szkieletThumb from "@/assets/szkielet3.jpg.asset.json";
import jozefThumb from "@/assets/jozef2.jpg.asset.json";
import gunThumb from "@/assets/revolwer.jpg.asset.json";
import martinThumb from "@/assets/martin.jpg.asset.json";
import elephantThumb from "@/assets/elephant.jpg.asset.json";
import wiezaThumb from "@/assets/wieza.jpg.asset.json";
import forestThumb from "@/assets/forest.jpg.asset.json";
import elementThumb from "@/assets/konstr.jpg.asset.json";

import szkieletFull from "@/assets/szkielet-2.jpg.asset.json";
import jozefFull from "@/assets/FiguraJozefa.jpg.asset.json";
import gunFull from "@/assets/gun.jpg.asset.json";
import martinFull from "@/assets/martingore.jpg.asset.json";
import elephantFull from "@/assets/MechaElephant.jpg.asset.json";
import wiezaFull from "@/assets/Wieza-2.jpg.asset.json";
import forestFull from "@/assets/forest-2.jpg.asset.json";
import elementFull from "@/assets/element_uzytkowy.jpg.asset.json";

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
