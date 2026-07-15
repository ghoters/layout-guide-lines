import szkielet3 from "@/assets/szkielet3.jpg.asset.json";
import jozef2 from "@/assets/jozef2.jpg.asset.json";
import revolwer from "@/assets/revolwer.jpg.asset.json";
import martin from "@/assets/martin.jpg.asset.json";
import elephant from "@/assets/elephant.jpg.asset.json";
import wieza from "@/assets/wieza.jpg.asset.json";
import forest from "@/assets/forest.jpg.asset.json";
import konstr from "@/assets/konstr.jpg.asset.json";

export const projects = [
  { title: "Szkielet", tag: "Druk 3D, żywica", image: szkielet3 },
  { title: "Figurka św. Józefa", tag: "Druk 3D, FDM", image: jozef2 },
  { title: "Rewolwer", tag: "Game asset", image: revolwer },
  { title: "Gitarzysta", tag: "Druk 3D, żywica", image: martin },
  { title: "Mecha Elephant", tag: "Game asset", image: elephant },
  { title: "Wieża ciśnień", tag: "Druk 3D, FDM", image: wieza },
  { title: "Concept lasu", tag: "Ilustracja", image: forest },
  { title: "Element użytkowy", tag: "Druk 3D, FDM", image: konstr },
];

export type Project = (typeof projects)[number];
