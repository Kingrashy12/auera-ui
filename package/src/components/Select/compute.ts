import { createStyle, tw } from "stywind";
import {
  content,
  item,
  SelectContentVariants,
  SelectItemVariants,
  SelectTriggerVariants,
  trigger,
} from "./select-variants";
import { useMemo } from "react";

const useComputeTrigger = (props: SelectTriggerVariants) => {
  const { className, radius } = props;

  const Trigger = createStyle("button");

  const styles = useMemo(
    () => tw(trigger({ radius }), className),
    [className, radius]
  );

  return useMemo(() => Trigger.classname(styles), [styles]);
};

const useComputeContent = (props: SelectContentVariants) => {
  const { radius, className, open } = props;

  const Content = createStyle("div");

  const styles = useMemo(
    () => tw(content({ radius, open }), className),
    [radius, open, className]
  );

  return useMemo(() => Content.classname(styles), [styles]);
};

const useComputeItem = (props: SelectItemVariants) => {
  const { radius, className, active } = props;

  const Item = createStyle("div");

  const styles = useMemo(
    () => tw(item({ radius, active }), className),
    [radius, active, className]
  );

  return useMemo(() => Item.classname(styles), [styles]);
};

export { useComputeTrigger, useComputeContent, useComputeItem };
