import { AueraButton, AueraDiv } from "../../core/AueraElement";
import { VProps } from "../../types/auera-system";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { createStyle } from "stywind";

const ibutton = cva(
  "active:scale-95 flex items-center tone-dark:text-white tone-light:text-black",
  {
    variants: {
      asChild: {
        true: "w-full h-full",
        false: "w-auto justify-center",
      },
      size: {
        xs: "p-1",
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
        xl: "p-5",
      },

      radius: {
        none: "rounded-none",
        sm: "rounded-[4px]",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      variant: {
        subtle:
          "bg-gray-50 hover:bg-gray-100 border-none outline-none tone-dark:bg-neutral-700 tone-dark:hover:bg-neutral-800",
        outline:
          "border-[1.5px] border-neutral-200 hover:bg-gray-100 tone-dark:border-neutral-800 tone-dark:hover:bg-neutral-900",
        ghost:
          "bg-transparent hover:bg-gray-100 border-none outline-none tone-dark:hover:bg-neutral-800",
      },
      disabled: {
        true: "cursor-not-allowed pointer-events-none opacity-75",
        false: "cursor-pointer",
      },
      ghost_active: {
        true: "bg-gray-100 tone-dark:bg-neutral-800",
      },
      subtle_active: {
        true: "bg-gray-100 tone-dark:bg-neutral-800",
      },
      outline_active: {
        true: "bg-gray-100 tone-dark:bg-neutral-900",
      },
    },

    defaultVariants: {
      size: "sm",
      radius: "md",
      variant: "subtle",
      asChild: false,
      disabled: false,
    },
  }
);

export default ibutton;
export type IconButtonVariants = VProps<typeof ibutton>;

export const useComputeIButton = (props: IconButtonVariants) => {
  const {
    asChild,
    variant,
    className,
    disabled,
    outline_active,
    ghost_active,
    subtle_active,
    size,
    radius,
  } = props;

  return useMemo(
    () =>
      createStyle(asChild ? AueraDiv : AueraButton).classname(
        ibutton({
          className,
          variant,
          radius,
          size,
          disabled,
          ghost_active,
          subtle_active,
          outline_active,
          asChild,
        })
      ),
    [
      asChild,
      className,
      variant,
      radius,
      size,
      disabled,
      ghost_active,
      subtle_active,
      outline_active,
    ]
  );
};
