import { AueraInput } from "@/core/AueraElement";
import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { createStyle, tw } from "stywind";

const input = cva(
  `w-12 h-12 p-4 border-1.7 text-center text-lg focus:outline-none focus:border-2
  transition-all font-inter outer-spin-none inner-spin-none [&::-moz-number-spin-box]:display-none
  appearance-none bg-transparent shadow`,
  {
    variants: {
      error: {
        true: "border-red-500 text-red-600 shake focus-within:border-red-500 caret-red-500",
        false: `focus:border-blue-500 caret-black border-neutral-300 tone-dark:text-white 
          tone-dark:border-1.9 theme-dark:focus:border-blue-600 tone-dark:shadow-neutral-900
           tone-dark:border-neutral-800 tone-dark:caret-white`,
      },

      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      error: false,
      radius: "lg",
    },
  }
);

type OTPVariant = VProps<typeof input>;

export const useComputeInput = (
  props: OTPVariant & { inputClass?: string }
) => {
  const { className, error, radius, inputClass } = props;

  const StyledInput = createStyle(AueraInput);
  const Interface = createStyle("div");

  const inputStyles = useMemo(
    () => tw(input({ error, radius }), inputClass),
    [inputClass, error, radius]
  );
  const interfaceStyles = useMemo(
    () => tw("flex items-center p-4 gap-4 bg-transparent", className),
    [className]
  );

  return {
    Interface: useMemo(
      () => Interface.classname(interfaceStyles),
      [interfaceStyles]
    ),
    Input: useMemo(() => StyledInput.classname(inputStyles), [inputStyles]),
  };
};
