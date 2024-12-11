import { getDisplayName } from "@/utils/displayname";
import React, { forwardRef } from "react";
import { InputProps } from "stywind";
import Icon from "../Icon/Icon";
import { Component, Input } from "./use-input";

interface InputProp extends InputProps {
  inputClass?: string;
  icon?: React.ElementType;
  iconSize?: number;
}

const TextInput = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  const { icon, iconSize, inputClass, placeholder, ...remainingProps } = props;
  return (
    <Component className={props.className}>
      {icon && (
        <Icon icon={icon} className="text-neutral-400" size={iconSize || 20} />
      )}
      <Input
        ref={ref}
        className={inputClass}
        placeholder={placeholder || "Type here..."}
        {...remainingProps}
      />
    </Component>
  );
});

export default TextInput;
TextInput.displayName = getDisplayName("TextInput");
