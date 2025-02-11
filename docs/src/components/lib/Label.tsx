import { tw } from "auera-ui";
import React from "react";
import { createStyle } from "stywind";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  mode?: "dark" | "light";
  value: string;
}

const Label: React.FC<LabelProps> = ({ value, mode, ...props }) => {
  const Comp = createStyle("label").classname(
    tw("font-medium text-sm text-black tone-dark:text-white", props.className)
  );
  // TODO: Use `useMode`
  return (
    <Comp data-theme={mode} {...props}>
      {value}
    </Comp>
  );
};

export default Label;
