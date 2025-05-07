import { useMemo } from "react";
import {
  footer,
  FooterVariants,
  header,
  HeaderVariants,
  panel,
  PanelVariants,
} from "./modal-variants";
import { createStyle, tw } from "stywind";
import { AueraDiv } from "@/core/AueraElement";

const useComputePanel = (props: PanelVariants) => {
  const {
    className,
    align,
    transition,
    size,
    design,
    isVisible,
    radius,
    placement,
  } = props;

  const Panel = createStyle(AueraDiv);

  const styles = useMemo(
    () =>
      tw(
        panel({
          align,
          transition,
          size,

          design,
          isVisible,
          radius,
          placement,
        }),
        className
      ),
    [className, align, transition, size, design, isVisible, radius, placement]
  );

  return useMemo(() => Panel.classname(styles), [styles]);
};

const useComputeFooter = (props: FooterVariants) => {
  const { className, position, showBorder } = props;

  return useMemo(
    () =>
      createStyle(AueraDiv).classname(
        footer({ className, position, showBorder })
      ),
    [className, position, showBorder]
  );
};

const useComputeHeader = (props: HeaderVariants) => {
  const { className, showBorder } = props;

  return useMemo(
    () => createStyle(AueraDiv).classname(header({ className, showBorder })),
    [className, showBorder]
  );
};

export { useComputePanel, useComputeFooter, useComputeHeader };
