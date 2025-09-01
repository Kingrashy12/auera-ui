import { cva } from "class-variance-authority";
import { ColorPair } from "../../types/auera-system";

const switchContainer = (
  color: ColorPair = "blue-600",
  unCheckColor: ColorPair = "gray-300"
) =>
  cva(
    "flex rounded-full data-[ison=true]:justify-end items-center transition-transform",
    {
      variants: {
        variant: {
          padded: "p-1",
          flush: `p-0.5 data-[ison=true]:pr-0.5 data-[ison=false]:pl-0.5`,
        },
        size: {
          sm: "",
          md: "",
          lg: "",
          xl: "",
        },
        isOn: {
          true: `bg-${color}`,
          false: `bg-${unCheckColor}`,
        },
        disabled: {
          true: "cursor-not-allowed bg-gray-300",
          false: "cursor-pointer",
        },
      },
      compoundVariants: [
        {
          variant: "padded",
          size: "sm",
          class: "w-9 h-[22px]",
        },
        {
          variant: "padded",
          size: "md",
          class: "w-11 h-6",
        },
        {
          variant: "padded",
          size: "lg",
          class: "w-14 h-8",
        },
        {
          variant: "padded",
          size: "xl",
          class: "w-[66px] h-9",
        },
        {
          variant: "flush",
          size: "sm",
          class: "w-9 h-[22px]",
        },
        {
          variant: "flush",
          size: "md",
          class: "w-11 h-6",
        },
        {
          variant: "flush",
          size: "lg",
          class: "w-14 h-8",
        },
        {
          variant: "flush",
          size: "xl",
          class: "w-[66px] h-9",
        },
      ],
      defaultVariants: {
        variant: "padded",
        disabled: false,
        isOn: false,
        size: "md",
      },
    }
  );

const checker = cva("bg-white rounded-full", {
  variants: {
    variant: {
      padded: "",
      flush: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  compoundVariants: [
    {
      variant: "padded",
      size: "sm",
      class: "w-[14.5px] h-[14.5px]",
    },
    {
      variant: "padded",
      size: "md",
      class: "w-4 h-4",
    },
    {
      variant: "padded",
      size: "lg",
      class: "w-6 h-6",
    },
    {
      variant: "padded",
      size: "xl",
      class: "w-7 h-7",
    },
    {
      variant: "flush",
      size: "sm",
      class: "w-[18px] h-[18px]",
    },
    {
      variant: "flush",
      size: "md",
      class: "w-5 h-5",
    },
    {
      variant: "flush",
      size: "lg",
      class: "w-7 h-7",
    },
    {
      variant: "flush",
      size: "xl",
      class: "w-8 h-8",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "padded",
  },
});

export { switchContainer, checker };
