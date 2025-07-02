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

export const useBadgeRules = (
  id: string,
  className: string | undefined,
  variant: string,
  mode: ModeType,
  colorScheme: string | any
) => {
  const { styleRules } = useGlobalUI();
  const badgeRules = styleRules?.badge;

  const appliedClassName = badgeRules?.className?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, "", mode)
  );

  const appliedMode = badgeRules?.mode?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, "", mode)
  );

  const appliedVariant = badgeRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, "", mode)
  );

  const appliedColorScheme = badgeRules?.colorScheme?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, "", mode)
  );

  return { appliedClassName, appliedVariant, appliedColorScheme, appliedMode };
};

export const useFabRules = (
  id: string,
  className: string | undefined,
  variant: string,
  mode: ModeType,
  colorScheme: string | any,
  design: DesignVariant
) => {
  const { styleRules } = useGlobalUI();
  const fabRules = styleRules?.fab;

  const appliedClassName = fabRules?.className?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedColor = fabRules?.color?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedDesign = fabRules?.design?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedMode = fabRules?.mode?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedZindex = fabRules?.zIndex?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedVariant = fabRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedType = fabRules?.type?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  return {
    appliedClassName,
    appliedColor,
    appliedDesign,
    appliedMode,
    appliedType,
    appliedZindex,
    appliedVariant,
  };
};

export const useIconButtonRules = (
  id: string,
  className: string | undefined,
  variant: string,
  mode: ModeType,
  design: DesignVariant
) => {
  const { styleRules } = useGlobalUI();
  const iconbuttonRules = styleRules?.iconbutton;

  const appliedClassName = iconbuttonRules?.className?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedDesign = iconbuttonRules?.design?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedMode = iconbuttonRules?.mode?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedVariant = iconbuttonRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  const appliedRadius = iconbuttonRules?.radius?.find((rule) =>
    applyRule(rule, id, className, variant, "", design, mode)
  );

  return {
    appliedClassName,
    appliedDesign,
    appliedMode,
    appliedRadius,
    appliedVariant,
  };
};

export const useTabsRules = (
  id: string,
  className: string | undefined,
  variant: string,
  mode: ModeType
) => {
  const { styleRules } = useGlobalUI();
  const tabsRules = styleRules?.tabs;

  const appliedClassName = tabsRules?.className?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  const appliedMode = tabsRules?.mode?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  const appliedVariant = tabsRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  const appliedRounded = tabsRules?.rounded?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  return {
    appliedClassName,
    appliedMode,
    appliedVariant,
    appliedRounded,
  };
};

export const useTabsContainerRules = (
  id: string,
  className: string | undefined
) => {
  const { styleRules } = useGlobalUI();
  const tabsRules = styleRules?.tabsContainer;

  const appliedContainerClassName = tabsRules?.className?.find((rule) =>
    applyRule(rule, id, className, "", "", "", "")
  );

  return { appliedContainerClassName };
};

export const useTabHandleRules = (
  id: string,
  className: string | undefined,
  variant: string,
  mode: ModeType
) => {
  const { styleRules } = useGlobalUI();
  const tabsRules = styleRules?.tabHandle;

  const appliedClassName = tabsRules?.className?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  const appliedVariant = tabsRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  const appliedRounded = tabsRules?.rounded?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  return { appliedClassName, appliedRounded, appliedVariant };
};

export const useOTPInputRules = (
  id: string,
  className: string | undefined,
  mode: ModeType,
  inputClassName: string | undefined
) => {
  const { styleRules } = useGlobalUI();
  const otpInputRules = styleRules?.otpInput;

  return {
    interfaceRules: {
      className: otpInputRules?.interface?.className?.find((rule) =>
        applyRule(rule, id, className, "", "", "", mode)
      ),
    },
    inputRules: {
      className: otpInputRules?.input?.className?.find((rule) =>
        applyRule(rule, id, inputClassName, "", "", "", mode)
      ),
      mode: otpInputRules?.input?.mode?.find((rule) =>
        applyRule(rule, id, inputClassName, "", "", "", mode)
      ),
      radius: otpInputRules?.input?.radius?.find((rule) =>
        applyRule(rule, id, inputClassName, "", "", "", mode)
      ),
    },
  };
};

export const useMenuItemRules = (className: string | undefined, id: string) => {
  const { styleRules } = useGlobalUI();
  const menuItemRules = styleRules?.menu?.item;

  return {
    menuItemClass: menuItemRules?.className?.find((rule) =>
      applyRule(rule, id, className, "", "", "", "")
    ),
  };
};

export const useMenuPadRules = (className: string | undefined, id: string) => {
  const { styleRules } = useGlobalUI();
  const menuPadRules = styleRules?.menu?.pad;

  return {
    menuPadClass: menuPadRules?.className?.find((rule) =>
      applyRule(rule, id, className, "", "", "", "")
    ),
  };
};

export const useMenuRules = (
  className: string | undefined,
  id: string,
  mode: string
) => {
  const { styleRules } = useGlobalUI();
  const menuRules = styleRules?.menu?.wrapper;

  return {
    menuClass: menuRules?.className?.find((rule) =>
      applyRule(rule, id, className, "", "", "", mode)
    ),
    menuMode: menuRules?.mode?.find((rule) =>
      applyRule(rule, id, className, "", "", "", mode)
    ),
  };
};

export const useMenuContainerRules = (
  className: string | undefined,
  id: string
) => {
  const { styleRules } = useGlobalUI();
  const menuContainerRules = styleRules?.menu?.container;

  return {
    menuContainerClass: menuContainerRules?.className?.find((rule) =>
      applyRule(rule, id, className, "", "", "", "")
    ),
  };
};
