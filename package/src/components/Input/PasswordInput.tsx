import { getDisplayName } from "@/utils/displayname";
import { forwardRef, useState } from "react";
import Icon from "../Icon/Icon";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { InputProps } from "../../types/element-props";
import { tw } from "@/utils";

interface InputProp extends InputProps {
  inputClass?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  const { inputClass, placeholder, ...remainingProps } = props;
  const [type, setType] = useState<"text" | "password">("password");

  const handleView = () =>
    setType((prev) => (prev === "password" ? "text" : "password"));

  return (
    <div
      className={tw(
        "flex justify-between w-full items-center relative gap-2 shadow-sm input-outline rounded-lg px-3 py-2 h-[40px]",
        props.className
      )}
    >
      <input
        ref={ref}
        type={type}
        className={tw(
          "w-full h-full outline-none border-none flex-1 text-[var(--input-color)] \
           bg-transparent caret-blue-500 font-inter-tight font-medium \
         placeholder:text-neutral-400 text-sm",
          inputClass
        )}
        placeholder={placeholder || "Enter Password..."}
        {...remainingProps}
      />
      <Icon
        icon={type === "password" ? HiOutlineEye : HiOutlineEyeOff}
        onClick={handleView}
        className="hover:opacity-75 cursor-pointer theme-dark:text-neutral-800 theme-light:text-neutral-400 hover:text-neutral-600 transition duration-300"
        size={20}
      />
    </div>
  );
});

export default PasswordInput;
PasswordInput.displayName = getDisplayName("PasswordInput");
