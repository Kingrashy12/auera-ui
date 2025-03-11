import { colors } from "@/utils";
import { AueraPlugin } from "../types/plugin";

export const aueraTw = ({
  addVariant,
  addUtilities,
}: AueraPlugin["Tailwind"]) => {
  addVariant("theme-dark", '[data-theme="dark"] &');
  addVariant("theme-light", '[data-theme="light"] &');
  addVariant("tone-dark", ['&[data-theme="dark"]&']);
  addVariant("tone-light", ['&[data-theme="light"]&']);
  addVariant("scrollbar", ["::-webkit-scrollbar&"]);
  addVariant("scrollbar-thumb", ["::-webkit-scrollbar-thumb&"]);
  addVariant("scrollbar-track", ["::-webkit-scrollbar-track&"]);
  addVariant("select-open", '[select-open="true"] &');
  addVariant("svg", "& svg");
  addVariant("paragraph", "& p");
  addVariant("span", "& span");

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
    ".animate-dots::after": {
      content: "'.'",
      animation: "dots 1.5s steps(5) infinite",
      position: "absolute",
    },
    ...Object.fromEntries(
      Array.from({ length: 22 }, (_, i) => [
        `.z-${(i + 1) * 70}`,
        { zIndex: (i + 1) * 70 },
      ])
    ),
  });
};

export const SafeLists = () => [
  ...Object.keys(colors).flatMap((color) =>
    Object.keys(colors[color as keyof typeof colors])
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
        `ring-${color}-${shade}`,
        `outline-${color}-${shade}`,
        `divide-${color}-${shade}`,
        `placeholder-${color}-${shade}`,
        `caret-${color}-${shade}`,
        `selection:bg-${color}-${shade}`,
        `selection:text-${color}-${shade}`,
      ])
      .flat()
  ),
];
