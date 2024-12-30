import { colors } from "@/utils";
import { AueraPlugin } from "../types/plugin";

export const aueraTw = ({ addVariant }: AueraPlugin["Tailwind"]) => {
  addVariant("theme-dark", '[data-theme="dark"] &');
  addVariant("theme-light", '[data-theme="light"] &');
};

export const SafeLists = () => [
  ...Object.keys(colors).flatMap((color) =>
    Object.keys(colors[color])
      .map((shade) => [
        `bg-${color}-${shade}`,
        `text-${color}-${shade}`,
        `border-${color}-${shade}`,
        `border-b-${color}-${shade}`,
        `border-t-${color}-${shade}`,
        `border-l-${color}-${shade}`,
        `border-r-${color}-${shade}`,
        `shadow-${color}-${shade}`,
        `accent-${color}-${shade}`,
      ])
      .flat()
  ),
];
