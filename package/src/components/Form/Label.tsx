import { useMode } from "@/hook/use";
import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { createStyle, tw } from "stywind";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  mode?: "dark" | "light";
  value: string;
}

const Label: React.FC<LabelProps> = ({ value, mode, ...props }) => {
  const Comp = createStyle("label").classname(
    tw(
      "font-medium text-sm font-inter text-black tone-dark:text-white",
      props.className
    )
  );

  const { currentMode } = useMode(mode);

  return (
    <Comp data-theme={currentMode} {...props}>
      {value}
    </Comp>
  );
};

export default Label;
Label.displayName = getDisplayName("Label");
