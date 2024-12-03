import { Icon } from "auera-ui";
import React from "react";
import { createStyle } from "stywind";

interface SInputProps extends React.ComponentProps<"input"> {
  inputClass?: string;
  icon?: React.ElementType;
  iconSize?: number;
}

const TextInput = ({
  inputClass,
  className,
  icon,
  iconSize,
  placeholder,
  ...props
}: SInputProps) => {
  const Container = createStyle("div").classname(
    "flex justify-between w-full items-center gap-2 shadow-sm input-outline rounded-lg px-3 py-2 h-[40px]"
  );
  const Input = createStyle("input").classname(
    "w-full h-full outline-none border-none text-[var(--input-color)] bg-transparent caret-blue-500 font-inter-tight font-medium placeholder:text-neutral-400 text-sm"
  );
  return (
    <Container className={className}>
      {icon && (
        <Icon icon={icon} className="text-neutral-400" size={iconSize || 20} />
      )}
      <Input
        {...props}
        className={inputClass}
        placeholder={placeholder || "Type here..."}
      />
    </Container>
  );
};

export default TextInput;
