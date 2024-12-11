import { createStyle } from "stywind";

const Component = createStyle("div").classname(
  "flex justify-between w-full items-center relative gap-2 shadow-sm input-outline rounded-lg px-3 py-2 h-[40px]"
);

const Input = createStyle("input").classname(
  "w-full h-full outline-none border-none flex-1 text-[var(--input-color)] bg-transparent caret-blue-500 font-inter-tight font-medium placeholder:text-neutral-400 text-sm"
);

export { Component, Input };
