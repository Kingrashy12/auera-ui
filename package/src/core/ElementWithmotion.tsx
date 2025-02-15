import { useMode } from "@/hook/use";
import {
  AueraElementPropsWithMotion,
  HTMLElements,
} from "@/types/auera-system";
import { useProps } from "@/utils";
import { getDisplayName } from "@/utils/displayname";
import { motion } from "motion/react";
import { forwardRef } from "react";
import { tw } from "stywind";

const ElementWithmotion = <T extends keyof HTMLElements>({
  tag: Tag = "div",
  children,
  mode,
  ...props
}: AueraElementPropsWithMotion<T>) =>
  // ref: React.Ref<HTMLElement>
  {
    const { currentMode } = useMode(mode);

    const Props = useProps(props, Tag);

    const Element = motion[Tag];

    return (
      <Element
        // ref={ref}
        data-theme={currentMode}
        className={tw(props.hidden && "hidden", props.className)}
        {...Props}
      >
        {children}
      </Element>
    );
  };

export default ElementWithmotion;
ElementWithmotion.displayName = getDisplayName("ElementWithMotion");

export const AueraDivWithMotion = forwardRef<
  HTMLDivElement,
  AueraElementPropsWithMotion<"div">
>(({ ...props }, ref) => {
  const { tag, mode, ...rest } = props;
  return <ElementWithmotion ref={ref} tag="div" mode={mode} {...rest} />;
});
