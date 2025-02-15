"use client";

import { createContext, RefObject, useContext } from "react";

interface SelectContextInterface {
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  setValue: (value: string) => void;
  currentValue: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  mode?: "light" | "dark";
  width: number;
  selectRef: RefObject<HTMLDivElement | null>;
}

export const SelectContext = createContext<SelectContextInterface | undefined>(
  undefined
);

export const useSelectState = () => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error(
      "Missing `Select`. Make sure you use a Select child component within `Select`."
    );
  }
  return context;
};
