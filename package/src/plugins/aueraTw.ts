import { colors } from "@/utils";
import { AueraPlugin } from "../types/plugin";

export const aueraTw = ({
  addVariant,
  addUtilities,
}: AueraPlugin["Tailwind"]) => {
  // theme-*: for global styling
  addVariant("theme-dark", '[data-theme="dark"] &');
  addVariant("theme-light", '[data-theme="light"] &');
  // tone-* for single base styling
  addVariant("tone-dark", ['&[data-theme="dark"]&']);
  addVariant("tone-light", ['&[data-theme="light"]&']);
  addVariant("scrollbar", ["::-webkit-scrollbar&"]);
  addVariant("scrollbar-thumb", ["::-webkit-scrollbar-thumb&"]);
  addVariant("scrollbar-track", ["::-webkit-scrollbar-track&"]);
  addVariant("select-open", '[select-open="true"] &');

  // Utilities
  addUtilities({
    ".scrollbar-none": {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    ".outer-spin-none": {
      "&::-webkit-outer-spin-button": {
        appearance: "none",
      },
    },
    ".inner-spin-none": {
      "&::-webkit-inner-spin-button": {
        appearance: "none",
      },
    },
    ...Object.fromEntries(
      Array.from({ length: 10 }, (_, i) => [
        `.z-${(i + 8) * 100}`,
        { zIndex: (i + 8) * 100 },
      ])
    ),
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
