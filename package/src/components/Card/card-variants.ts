import { cva, VariantProps } from "class-variance-authority";

const root = cva(
  "rounded-[10px] flex gap-2 border-1.9 bg-white border-neutral-200 tone-dark:bg-black tone-dark:border-neutral-900",
  {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      hidden: {
        true: "hidden",
      },
      direction: {
        row: "flex-row",
        column: "flex-col",
      },
      variant: {
        flat: "shadow-none",
        raised:
          "shadow-card tone-dark:shadow-[0_4px_8px_rgba(255,255,255,0.05)]",
      },
    },

    defaultVariants: {
      variant: "raised",
      direction: "column",
      fullWidth: false,
      hidden: false,
    },
  }
);

const body = cva("p-[20px] gap-[16px] flex flex-col", {
  variants: {
    centerContent: {
      true: "items-center justify-center",
    },
  },
  defaultVariants: {
    centerContent: false,
  },
});

type CardClass = {
  root?: string;
  body?: string;
};

export type RootVariants = VariantProps<typeof root> & {
  classNames?: CardClass;
};
export type BodyVariants = VariantProps<typeof body> & {
  classNames?: CardClass;
};

export { root, body };
