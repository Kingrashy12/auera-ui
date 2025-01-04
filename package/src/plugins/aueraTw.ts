import { colors } from "@/utils";
import { AueraPlugin } from "../types/plugin";

export const aueraTw = ({
  addVariant,
  addUtilities,
}: AueraPlugin["Tailwind"]) => {
  addVariant("theme-dark", '[data-theme="dark"] &');
  addVariant("theme-light", '[data-theme="light"] &');
  addVariant("scrollbar", ["::-webkit-scrollbar&"]);
  addVariant("scrollbar-thumb", ["::-webkit-scrollbar-thumb&"]);
  addVariant("scrollbar-track", ["::-webkit-scrollbar-track&"]);

  // Utilities
  addUtilities({
    ".scrollbar-none": {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    ".z-80": {
      zIndex: 80,
    },
    ".z-90": {
      zIndex: 90,
    },
    ".z-100": {
      zIndex: 100,
    },
    ".z-200": {
      zIndex: 200,
    },
    ".z-300": {
      zIndex: 300,
    },
    ".z-400": {
      zIndex: 400,
    },
    ".z-500": {
      zIndex: 500,
    },
    ".z-600": {
      zIndex: 600,
    },
  });
};

export const SafeLists = () => [
  ...Object.keys(colors).flatMap((color) =>
    // @ts-ignore
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
