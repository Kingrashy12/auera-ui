import { merge } from "stywind";
import { colors } from "./colors";
import { ColorPair } from "@/types/auera-system";

export const getColor = (value: ColorPair) => {
  const [key, set] = value.split("-");
  return merge.multi(colors, key, set);
};

export const getNextShade = (color: ColorPair) => {
  const [colorKey, shade] = color.split("-");
  const nextShade = Number(shade) + 100;
  return `${colorKey}-${nextShade}`;
};
