import { getDisplayName } from "@/utils/displayname";
import { forwardRef, useState } from "react";
import { InputProps } from "stywind";
import Icon from "../Icon/Icon";
import { Component, Input } from "./use-input";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

interface InputProp extends InputProps {
  inputClass?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  const { inputClass, placeholder, ...remainingProps } = props;
  const [type, setType] = useState<"text" | "password">("password");

  const handleView = () =>
    setType((prev) => (prev === "password" ? "text" : "password"));

  return (
    <Component className={props.className}>
      <Input
        ref={ref}
        type={type}
        className={inputClass}
        placeholder={placeholder || "Enter Password..."}
        {...remainingProps}
      />
      <Icon
        icon={type === "password" ? HiOutlineEye : HiOutlineEyeOff}
        onClick={handleView}
        className="hover:opacity-75 cursor-pointer theme-dark:text-neutral-800 theme-light:text-neutral-400 hover:text-neutral-600 transition duration-300"
        size={20}
      />
    </Component>
  );
});

export default PasswordInput;
PasswordInput.displayName = getDisplayName("PasswordInput");
