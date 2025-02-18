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

const useComputePanel = (props: PanelVariants) => {
  const {
    className,
    align,
    transition,
    size,
    mode,
    flavour,
    isVisible,
    radius,
  } = props;

  const Panel = createStyle("div");

  const styles = useMemo(
    () =>
      tw(
        panel({
          align,
          transition,
          size,
          mode,
          flavour,
          isVisible,
          radius,
        }),
        className
      ),
    [className, align, transition, size, mode, flavour, isVisible, radius]
  );

  return useMemo(() => Panel.classname(styles), [styles]);
};

const useComputeFooter = (props: FooterVariants) => {
  const { className, position, showBorder, mode } = props;

  return useMemo(
    () =>
      createStyle("div").classname(
        footer({ className, position, showBorder, mode })
      ),
    [className, position, showBorder, mode]
  );
};

const useComputeHeader = (props: HeaderVariants) => {
  const { className, showBorder, mode } = props;

  return useMemo(
    () => createStyle("div").classname(header({ className, showBorder, mode })),
    [className, showBorder, mode]
  );
};

export { useComputePanel, useComputeFooter, useComputeHeader };
