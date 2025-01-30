import { merge } from "stywind";
import { colors } from "./colors";
import { ColorPair } from "@/types/auera-system";

export const getColor = (value: ColorPair) => {
  const [key, set] = value.split("-");
  return merge.multi(colors, key, set);
};
