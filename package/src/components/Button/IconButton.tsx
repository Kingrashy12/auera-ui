import { defineClass, merge, tw } from "stywind";
import { IconButtonProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { FC } from "react";
import { ModalTrigger } from "../Modal";
import { DrawerTrigger } from "../Drawer";
import { throwTriggerError } from "@/utils/component.err";
import { useMode } from "@/hook/use";
import { AueraButton } from "@/core/AueraElement";

const sizes = {
  md: "p-1",
  lg: "p-2",
  xl: "p-3",
};
const rounded = {
  md: "rounded-sm",
  lg: "rounded-md",
  xl: "rounded-lg",
  full: "rounded-full",
};

const modeVariant = {
  light: {
    outline: defineClass("border-[1.3px] border-neutral-200 hover:bg-gray-100"),
    subtle: defineClass(
      "bg-gray-50 hover:bg-gray-100 border-none outline-none"
    ),
    ghost: defineClass(
      "bg-transparent hover:bg-gray-100 border-none outline-none"
    ),
  },
  dark: {
    outline: defineClass(
      "border-[1.36px] border-neutral-800 hover:bg-neutral-900"
    ),
    subtle: defineClass(
      "bg-neutral-700 hover:bg-neutral-800 border-none outline-none"
    ),
    ghost: defineClass(
      "bg-transparent hover:bg-neutral-800 border-none outline-none"
    ),
  },
};

const Trigger = {
  modal: ModalTrigger,
  drawer: DrawerTrigger,
};

const IconButton: FC<IconButtonProps> = ({
  children,
  variants = "subtle",
  radius = "lg",
  size = "lg",
  className,
  disabled,
  trigger,
  withTrigger,
  triggerType,
  triggerValue,
  ...props
}) => {
  throwTriggerError(withTrigger, triggerType, triggerValue, trigger);

  const TriggerComponent = Trigger[trigger || "modal"];

  const { currentMode } = useMode(props.mode);

  const SUB = variants === "ghost" || variants === "subtle";

  const Cls = tw(
    "active:scale-95 flex items-center justify-center tone-dark:text-white tone-light:text-black",
    className,
    disabled
      ? "cursor-not-allowed pointer-events-none opacity-75"
      : "cursor-pointer ",
    merge.single(sizes, size || "lg"),
    merge.single(rounded, radius || "lg"),
    merge.multi(modeVariant, currentMode, variants),
    {
      "bg-gray-100 tone-dark:bg-neutral-800": props.active && SUB,
      "bg-gray-100 tone-dark:bg-neutral-900":
        props.active && variants === "outline",
    }
  );

  return (
    <>
      {withTrigger ? (
        <TriggerComponent type={triggerType} value={triggerValue as string}>
          <AueraButton className={tw(Cls, className)} {...props}>
            {children}
          </AueraButton>
        </TriggerComponent>
      ) : (
        <AueraButton className={tw(Cls, className)} {...props}>
          {children}
        </AueraButton>
      )}
    </>
  );
};

export default IconButton;
IconButton.displayName = getDisplayName("IconButton");

// const useIButton = (
//   className?: string,
//   disabled?: boolean,
//   size?: string,
//   radius?: string,
//   variants?: string,
//   mode?: ModeType
// ) => {
//   const { currentMode } = useMode(mode);
//   // TODO: Update mode props to use data-theme attribute for easy mode switching
//   // const Button = useMemo(() => {
//   //   return createStyle("button").classname(
//   //     tw(
//   //       "active:scale-95 flex items-center justify-center theme-dark:text-white theme-light:text-black",
//   //       className,
//   //       disabled
//   //         ? "cursor-not-allowed pointer-events-none opacity-75"
//   //         : "cursor-pointer ",
//   //       merge.single(sizes, size || "lg"),
//   //       merge.single(rounded, radius || "lg"),
//   //       merge.multi(modeVariant, currentMode, variants)
//   //     )
//   //   );
//   // }, []);

//   // return { Button };
// };
