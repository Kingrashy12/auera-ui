import { defineClass } from "stywind";

export default {
  __content_bg: defineClass(
    "self-dark-obsidian:bg-neutral-900 self-light-obsidian:bg-white tone-dark:bg-neutral-950 bg-white"
  ),
  __border: defineClass(
    "self-dark-obsidian:border-neutral-700 self-light-obsidian:border-neutral-300 tone-dark:border-neutral-800 border-neutral-200"
  ),
  __divide: defineClass(
    "self-dark-obsidian:divide-neutral-700 self-light-obsidian:divide-neutral-300 tone-dark:divide-neutral-800 divide-neutral-200"
  ),
  __hover: defineClass(
    "self-dark-obsidian:hover:bg-neutral-800 self-light-obsidian:hover:bg-neutral-200 tone-dark:hover:bg-neutral-900 hover:bg-gray-100"
  ),
  __hover_select_trigger: defineClass(
    "self-dark-obsidian:hover:bg-neutral-800 self-light-obsidian:hover:bg-gray-100 tone-dark:hover:bg-neutral-900 hover:bg-gray-50"
  ),
  __shadow: defineClass(
    "self-dark-obsidian:shadow-black self-light-obsidian:shadow-gray-300 tone-dark:shadow-neutral-900/80 shadow-gray-200"
  ),
  __btn_bg: defineClass(
    "self-dark-obsidian:bg-[rgb(63_63_70_/_0.5)] self-light-obsidian:bg-white tone-dark:bg-[#171717] bg-white"
  ),
  __btn_hover: defineClass(
    "self-dark-obsidian:hover:bg-[rgb(63_63_70_/_0.8)] self-light-obsidian:hover:bg-[#f5f5f5] tone-dark:hover:bg-[#262626] hover:bg-[#f3f4f6]"
  ),
  __btn_shadow: defineClass(
    "self-dark-obsidian:shadow-black self-light-obsidian:shadow-[#e5e5e5] tone-dark:shadow-[#171717] shadow-[#e5e5e5]"
  ),
  __btn_border: defineClass(
    "self-dark-obsidian:border-[#52525b] self-light-obsidian:border-[#d4d4d4] tone-dark:border-[#404040] border-[#d1d5db]"
  ),
};
