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
import { AueraButton, AueraDiv } from "@/core/AueraElement";

const useComputeTrigger = (props: SelectTriggerVariants) => {
  const { className, radius, variant, disabled } = props;

  const Trigger = createStyle(AueraButton);

  const styles = useMemo(
    () => tw(trigger({ radius, variant, disabled }), className),
    [className, radius, variant, disabled]
  );

  return useMemo(() => Trigger.classname(styles), [styles]);
};

const useComputeContent = (props: SelectContentVariants) => {
  const { radius, className, open, variant } = props;

  const Content = createStyle(AueraDiv);

  const styles = useMemo(
    () => tw(content({ radius, variant, open }), className),
    [radius, open, className, variant]
  );

  return useMemo(() => Content.classname(styles), [styles]);
};

const useComputeItem = (props: SelectItemVariants) => {
  const { radius, className, active, variant, disabled } = props;

  const Item = createStyle(AueraDiv);

  const styles = useMemo(
    () => tw(item({ radius, variant, disabled, active }), className),
    [radius, active, className, disabled, variant]
  );

  return useMemo(() => Item.classname(styles), [styles]);
};

export { useComputeTrigger, useComputeContent, useComputeItem };
