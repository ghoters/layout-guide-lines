import szkielet from "@/assets/szkielet-2.jpg.asset.json";
import jozef from "@/assets/FiguraJozefa.jpg.asset.json";
import gun from "@/assets/gun.jpg.asset.json";
import martin from "@/assets/martingore.jpg.asset.json";
import elephant from "@/assets/MechaElephant.jpg.asset.json";
import wieza from "@/assets/Wieza-2.jpg.asset.json";
import forest from "@/assets/forest-2.jpg.asset.json";
import element from "@/assets/element_uzytkowy.jpg.asset.json";

export const projects = [
  { title: "Szkielet", tag: "Druk 3D, żywica", image: szkielet },
  { title: "Figurka św. Józefa", tag: "Druk 3D, FDM", image: jozef },
  { title: "Rewolwer", tag: "Game asset", image: gun },
  { title: "Gitarzysta", tag: "Druk 3D, żywica", image: martin },
  { title: "Mecha Elephant", tag: "Game asset", image: elephant },
  { title: "Wieża ciśnień", tag: "Druk 3D, FDM", image: wieza },
  { title: "Concept lasu", tag: "Ilustracja", image: forest },
  { title: "Element użytkowy", tag: "Druk 3D, FDM", image: element },
];

export type Project = (typeof projects)[number];
