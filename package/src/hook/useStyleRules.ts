import { i } from "motion/react-client";
import {
  ApplyBy,
  ButtonVariant,
  DesignVariant,
  ModeType,
  SchemeVariant,
  StyleRule,
} from "../types/auera-system";
import { useGlobalUI } from "./global-ui";

const applyRule = <T, K extends keyof ApplyBy>(
  rule: StyleRule<ApplyBy[K], T>,
  id: string,
  className: string | undefined,
  variant: string,
  colorScheme: string,
  design: string,
  mode: string
) => {
  // Conditions array - each condition has a key (attr) and its value
  const conditions = [
    { attr: "id", value: id },
    { attr: "class", value: className },
    { attr: "colorScheme", value: colorScheme },
    { attr: "variant", value: variant },
    { attr: "design", value: design },
    { attr: "mode", value: mode },
  ];

  // Always apply if 'applyBy' is 'all'
  if (rule.applyBy === "all") return true;

  // If there's no `$where`, don't apply
  if (!rule.$where) return false;

  // Check if the rule is based on 'applyBy' (either 'id', 'class', 'design', etc.)
  if (
    rule.applyBy === "id" ||
    rule.applyBy === "class" ||
    rule.applyBy === "design" ||
    rule.applyBy === "variant" ||
    rule.applyBy === "colorScheme" ||
    rule.applyBy === "mode"
  ) {
    // Find the corresponding condition based on 'applyBy'
    const condition = conditions
      .filter((cond) => cond.value !== undefined)
      .find((cond) => cond.attr === rule.$where?.attr);

    // If no matching condition, return false
    if (!condition) return false;

    // Check if the 'is' field in $where matches the value of the corresponding condition
    return rule.$where.is === condition.value;
  }

  // If the 'applyBy' is not one of the recognized values, do not apply the rule
  return false;
};

export const useButtonRules = (
  id: string,
  className: string | undefined,
  colorScheme: SchemeVariant,
  variant: ButtonVariant,
  design: DesignVariant,
  mode: ModeType
) => {
  const { styleRules } = useGlobalUI();

  const buttonRules = styleRules?.button ?? {};

  const size = buttonRules.size?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedVariant = buttonRules.variant?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedClassName = buttonRules.className?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedDesign = buttonRules.design?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedRadius = buttonRules.radius?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  return {
    appliedVariant,
    appliedClassName,
    appliedSize: size,
    appliedDesign,
    appliedRadius,
  };
};

export const useCardRules = (
  id: string,
  className: string | undefined,
  variant: ButtonVariant,
  design: DesignVariant,
  mode: ModeType
) => {
  const { styleRules } = useGlobalUI();

  const cardRules = styleRules?.card;

  const appliedVariant = cardRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedDesign = cardRules?.design?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedClassName = cardRules?.className?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  return { appliedDesign, appliedVariant, appliedClassName };
};

export const useInputRules = (
  id: string,
  className: string | undefined,
  variant: string,
  design: DesignVariant,
  mode: ModeType
) => {
  const { styleRules } = useGlobalUI();

  const inputRules = styleRules?.input;

  const appliedVariant = inputRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedDesign = inputRules?.design?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedClassName = inputRules?.className?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedRadius = inputRules?.radius?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedMode = inputRules?.mode?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedInputClassName = inputRules?.inputClassName?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  return {
    appliedDesign,
    appliedVariant,
    appliedClassName,
    appliedRadius,
    appliedMode,
    appliedInputClassName,
  };
};
