import React from "react";
import { tw } from "stywind";
import { badge } from "./badge-variants";
import { BadgeProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { AueraDiv, AueraSpan } from "@/core/AueraElement";
import { useBadgeRules } from "@/hook/useStyleRules";

const Badge: React.FC<BadgeProps> = ({
  variant,
  colorScheme,
  className,
  children,
  asDiv,
  mode,
  id,
}) => {
  const Component = asDiv ? AueraDiv : AueraSpan;

  const { appliedClassName, appliedColorScheme, appliedMode, appliedVariant } =
    useBadgeRules(id!, className, variant!, mode!, colorScheme);

  return (
    <Component
      mode={appliedMode?.value || mode}
      className={tw(
        badge({
          variant: appliedVariant?.value || variant,
          colorScheme: appliedColorScheme?.value || colorScheme,
        }),
        appliedClassName,
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Badge;
Badge.displayName = getDisplayName("Badge");
