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
  mode: string,
  obj: Record<string, string> = {}
) => {
  // Conditions array - each condition has a key (attr) and its value
  const conditions = [
    { attr: "id", value: id },
    { attr: "className", value: className },
    { attr: "colorScheme", value: colorScheme },
    { attr: "variant", value: variant },
    { attr: "design", value: design },
    { attr: "mode", value: mode },
    { attr: "position", value: obj["position"] },
    { attr: "type", value: obj["type"] },
  ];

  // Always apply if 'applyBy' is 'all'
  if (rule.applyBy === "all") return true;

  // If there's no `$where`, don't apply
  if (!rule.$where) return false;

  // Check if the rule is based on 'applyBy' (either 'id', 'class', 'design', etc.)
  if (
    rule.applyBy === "id" ||
    rule.applyBy === "design" ||
    rule.applyBy === "variant" ||
    rule.applyBy === "colorScheme" ||
    rule.applyBy === "mode" ||
    rule.applyBy === "className" ||
    rule.applyBy === "position" ||
    rule.applyBy === "type"
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

  const classnames = buttonRules.className?.map((rule) =>
    getClassValue(
      applyRule(rule, id, className, variant, colorScheme, design, mode),
      rule
    )
  );

  const appliedDesign = buttonRules.design?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  const appliedRadius = buttonRules.radius?.find((rule) =>
    applyRule(rule, id, className, variant, colorScheme, design, mode)
  );

  return {
    appliedVariant,
    appliedClassName: joinValues(classnames),
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

  const classnames = cardRules?.className?.map((rule) =>
    getClassValue(
      applyRule(rule, id, className, variant, "", design, mode),
      rule
    )
  );

  return {
    appliedDesign,
    appliedVariant,
    appliedClassName: joinValues(classnames),
  };
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

  const classnames = inputRules?.className?.map((rule) =>
    getClassValue(
      applyRule(rule, id, className, variant, "", design, mode),
      rule
    )
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
    appliedClassName: joinValues(classnames),
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

  const classnames = badgeRules?.className?.map((rule) =>
    getClassValue(
      applyRule(rule, id, className, variant, colorScheme, "", mode),
      rule
    )
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

  return {
    appliedClassName: joinValues(classnames),
    appliedVariant,
    appliedColorScheme,
    appliedMode,
  };
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

  const classnames = fabRules?.className?.map((rule) =>
    getClassValue(
      applyRule(rule, id, className, variant, colorScheme, design, mode),
      rule
    )
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
    appliedClassName: joinValues(classnames),
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

  const classnames = iconbuttonRules?.className?.map((rule) =>
    getClassValue(
      applyRule(rule, id, className, variant, "", design, mode),
      rule
    )
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
    appliedClassName: joinValues(classnames),
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

  const classnames = tabsRules?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, className, variant, "", "", mode), rule)
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
    appliedClassName: joinValues(classnames),
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

  const classnames = tabsRules?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, className, "", "", "", ""), rule)
  );

  return { appliedContainerClassName: joinValues(classnames) };
};

export const useTabHandleRules = (
  id: string,
  className: string | undefined,
  variant: string,
  mode: ModeType
) => {
  const { styleRules } = useGlobalUI();
  const tabsRules = styleRules?.tabHandle;

  const classnames = tabsRules?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, className, variant, "", "", mode), rule)
  );

  const appliedVariant = tabsRules?.variant?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  const appliedRounded = tabsRules?.rounded?.find((rule) =>
    applyRule(rule, id, className, variant, "", "", mode)
  );

  return {
    appliedClassName: joinValues(classnames),
    appliedRounded,
    appliedVariant,
  };
};

export const useOTPInputRules = (
  id: string,
  className: string | undefined,
  mode: ModeType,
  inputClassName: string | undefined
) => {
  const { styleRules } = useGlobalUI();
  const otpInputRules = styleRules?.otpInput;

  const inputClassNames = otpInputRules?.input?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, inputClassName, "", "", "", mode), rule)
  );

  return {
    interfaceRules: {
      className: otpInputRules?.interface?.className?.find((rule) =>
        applyRule(rule, id, className, "", "", "", mode)
      ),
    },
    inputRules: {
      className: joinValues(inputClassNames),
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

  const classnames = menuItemRules?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, className, "", "", "", ""), rule)
  );

  return {
    menuItemClass: joinValues(classnames),
  };
};

export const useMenuPadRules = (className: string | undefined, id: string) => {
  const { styleRules } = useGlobalUI();
  const menuPadRules = styleRules?.menu?.pad;

  const classnames = menuPadRules?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, className, "", "", "", ""), rule)
  );

  return {
    menuPadClass: joinValues(classnames),
  };
};

export const useMenuRules = (
  className: string | undefined,
  id: string,
  mode: string
) => {
  const { styleRules } = useGlobalUI();
  const menuRules = styleRules?.menu?.wrapper;

  const classnames = menuRules?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, className, "", "", "", mode), rule)
  );

  return {
    menuClass: joinValues(classnames),
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

  const classnames = menuContainerRules?.className?.map((rule) =>
    getClassValue(applyRule(rule, id, className, "", "", "", ""), rule)
  );

  return {
    menuContainerClass: joinValues(classnames),
  };
};

export const useDrawerPanelRules = (
  className: string | undefined,
  id: string,
  position: "left" | "right" | null | undefined,
  type: "sticky" | "float" | null | undefined
) => {
  const { styleRules } = useGlobalUI();
  const drawerPanelRules = styleRules?.drawerPanel;

  const panelClassName = drawerPanelRules?.className?.map((rule) =>
    getClassValue(
      applyRule(rule, id, className, "", "", "", "", {
        position: position || "",
        type: type || "",
      }),
      rule
    )
  );

  return { panelClassName: joinValues(panelClassName) };
};

export const joinValues = (values: string[] | undefined) => {
  if (values) {
    return values.join(" ");
  }

  return "";
};

const getClassValue = <T, K extends keyof ApplyBy>(
  match: boolean,
  rule: StyleRule<ApplyBy[K], T>
) => {
  if (match) {
    return rule.value;
  }

  return "";
};
