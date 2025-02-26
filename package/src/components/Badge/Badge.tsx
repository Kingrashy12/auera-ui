import React from "react";
import { tw } from "stywind";
import { badge } from "./badge-variants";
import { BadgeProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";

const Badge: React.FC<BadgeProps> = ({
  variant,
  colorScheme,
  className,
  children,
  asDiv,
}) => {
  const Component = asDiv ? "div" : "span";

  return (
    <Component className={tw(badge({ variant, colorScheme }), className)}>
      {children}
    </Component>
  );
};

export default Badge;
Badge.displayName = getDisplayName("Badge");
