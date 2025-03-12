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
    ".z-70": { zIndex: 70 },
    ".z-80": { zIndex: 80 },
    ".z-90": { zIndex: 90 },
    ".z-100": { zIndex: 100 },
    ".z-110": { zIndex: 110 },
    ".z-120": { zIndex: 120 },
    ".z-130": { zIndex: 130 },
    ".z-140": { zIndex: 140 },
    ".z-150": { zIndex: 150 },
    ".z-160": { zIndex: 160 },
    ".z-170": { zIndex: 170 },
    ".z-180": { zIndex: 180 },
    ".z-190": { zIndex: 190 },
    ".z-200": { zIndex: 200 },
    ".z-210": { zIndex: 210 },
    ".z-220": { zIndex: 220 },
    ".z-230": { zIndex: 230 },
    ".z-240": { zIndex: 240 },
    ".z-250": { zIndex: 250 },
    ".z-260": { zIndex: 260 },
    ".z-270": { zIndex: 270 },
    ".z-280": { zIndex: 280 },
    ".z-290": { zIndex: 290 },
    ".z-300": { zIndex: 300 },
    ".z-310": { zIndex: 310 },
    ".z-320": { zIndex: 320 },
    ".z-330": { zIndex: 330 },
    ".z-340": { zIndex: 340 },
    ".z-350": { zIndex: 350 },
    ".z-360": { zIndex: 360 },
    ".z-370": { zIndex: 370 },
    ".z-380": { zIndex: 380 },
    ".z-390": { zIndex: 390 },
    ".z-400": { zIndex: 400 },
    ".z-410": { zIndex: 410 },
    ".z-420": { zIndex: 420 },
    ".z-430": { zIndex: 430 },
    ".z-440": { zIndex: 440 },
    ".z-450": { zIndex: 450 },
    ".z-460": { zIndex: 460 },
    ".z-470": { zIndex: 470 },
    ".z-480": { zIndex: 480 },
    ".z-490": { zIndex: 490 },
    ".z-500": { zIndex: 500 },
    ".z-510": { zIndex: 510 },
    ".z-520": { zIndex: 520 },
    ".z-530": { zIndex: 530 },
    ".z-540": { zIndex: 540 },
    ".z-550": { zIndex: 550 },
    ".z-560": { zIndex: 560 },
    ".z-570": { zIndex: 570 },
    ".z-580": { zIndex: 580 },
    ".z-590": { zIndex: 590 },
    ".z-600": { zIndex: 600 },
    ".z-610": { zIndex: 610 },
    ".z-620": { zIndex: 620 },
    ".z-630": { zIndex: 630 },
    ".z-640": { zIndex: 640 },
    ".z-650": { zIndex: 650 },
    ".z-660": { zIndex: 660 },
    ".z-670": { zIndex: 670 },
    ".z-680": { zIndex: 680 },
    ".z-690": { zIndex: 690 },
    ".z-700": { zIndex: 700 },
    ".z-710": { zIndex: 710 },
    ".z-720": { zIndex: 720 },
    ".z-730": { zIndex: 730 },
    ".z-740": { zIndex: 740 },
    ".z-750": { zIndex: 750 },
    ".z-760": { zIndex: 760 },
    ".z-770": { zIndex: 770 },
    ".z-780": { zIndex: 780 },
    ".z-790": { zIndex: 790 },
    ".z-800": { zIndex: 800 },
    ".z-810": { zIndex: 810 },
    ".z-820": { zIndex: 820 },
    ".z-830": { zIndex: 830 },
    ".z-840": { zIndex: 840 },
    ".z-850": { zIndex: 850 },
    ".z-860": { zIndex: 860 },
    ".z-870": { zIndex: 870 },
    ".z-880": { zIndex: 880 },
    ".z-890": { zIndex: 890 },
    ".z-900": { zIndex: 900 },
    ".z-910": { zIndex: 910 },
    ".z-920": { zIndex: 920 },
    ".z-930": { zIndex: 930 },
    ".z-940": { zIndex: 940 },
    ".z-950": { zIndex: 950 },
    ".z-960": { zIndex: 960 },
    ".z-970": { zIndex: 970 },
    ".z-980": { zIndex: 980 },
    ".z-990": { zIndex: 990 },
    ".z-1000": { zIndex: 1000 },
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
