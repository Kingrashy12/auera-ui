import React from "react";
import { tw } from "stywind";
import { badge } from "./badge-variants";
import { BadgeProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { AueraDiv, AueraSpan } from "@/core/AueraElement";

const Badge: React.FC<BadgeProps> = ({
  variant,
  colorScheme,
  className,
  children,
  asDiv,
  mode,
}) => {
  const Component = asDiv ? AueraDiv : AueraSpan;

  return (
    <Component
      mode={mode}
      className={tw(badge({ variant, colorScheme }), className)}
    >
      {children}
    </Component>
  );
};

export default Badge;
Badge.displayName = getDisplayName("Badge");
