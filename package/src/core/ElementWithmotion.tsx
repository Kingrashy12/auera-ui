import { useMode } from "@/hook/use";
import {
  AueraElementPropsWithMotion,
  HTMLElements,
} from "@/types/auera-system";
import { tw, useProps } from "@/utils";
import { getDisplayName } from "@/utils/displayname";
import { motion } from "motion/react";

const ElementWithmotion = <T extends keyof HTMLElements>({
  tag: Tag = "div",
  children,
  mode,
  ...props
}: AueraElementPropsWithMotion<T>) => {
  const { currentMode } = useMode(mode);

  const Props = useProps(props, Tag);

  const Element = motion[Tag];

  return (
    <Element
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

export const AueraDivWithMotion = (
  props: AueraElementPropsWithMotion<"div">
) => {
  const { tag, mode, ...rest } = props;
  return <ElementWithmotion tag="div" mode={mode} {...rest} />;
};
