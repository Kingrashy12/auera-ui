import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";

export const langs = [
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
    color: "yellow",
    ext: "jsx",
    baseExt: "js",
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "blue",
    ext: "tsx",
    baseExt: "ts",
  },
];

export const framework = [
  { name: "Next.js", icon: null },
  { name: "Vite", icon: null },
  { name: "React", icon: null },
  { name: "React Native", icon: null },
];
