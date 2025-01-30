import { getDisplayName } from "@/utils/displayname";
import React, { forwardRef } from "react";
import { InputProps } from "../../types/element-props";
import Icon from "../Icon/Icon";
import { tw } from "@/utils";

interface InputProp extends InputProps {
  inputClass?: string;
  icon?: React.ElementType;
  iconSize?: number;
}

const TextInput = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  const { icon, iconSize, inputClass, placeholder, ...remainingProps } = props;
  return (
    <div
      className={tw(
        "flex justify-between w-full items-center relative gap-2 shadow-sm input-outline rounded-lg px-3 py-2 h-[40px]",
        props.className
      )}
    >
      {icon && (
        <Icon icon={icon} className="text-neutral-400" size={iconSize || 20} />
      )}
      <input
        ref={ref}
        className={tw(
          "w-full h-full outline-none border-none flex-1 text-[var(--input-color)] \
           bg-transparent caret-blue-500 font-inter-tight font-medium \
          placeholder:text-neutral-400 text-sm",
          inputClass
        )}
        placeholder={placeholder || "Type here..."}
        {...remainingProps}
      />
    </div>
  );
});

export default TextInput;
TextInput.displayName = getDisplayName("TextInput");
