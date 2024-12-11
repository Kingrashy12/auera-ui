import React, { forwardRef } from "react";
import { InputProps } from "stywind";
import { Component, Input } from "./input";
import { Icon } from "auera-ui";

interface InputProp extends InputProps {
  inputClass?: string;
  icon?: React.ElementType;
  iconSize?: number;
}

const TextInput = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  return (
    <Component className={props.className}>
      {props.icon && (
        <Icon
          icon={props.icon}
          className="text-neutral-400"
          size={props.iconSize || 20}
        />
      )}
      <Input
        ref={ref}
        className={props.inputClass}
        placeholder={props.placeholder || "Type here..."}
        {...props}
      />
    </Component>
  );
});

export default TextInput;
TextInput.displayName = "";
