import { AueraPlugin } from "../types/plugin";

export const aueraTw = ({ addVariant }: AueraPlugin["Tailwind"]) => {
  addVariant("theme-dark", '[data-theme="dark"] &');
  addVariant("theme-light", '[data-theme="light"] &');
};
