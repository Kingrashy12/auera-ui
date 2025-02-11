import { getDisplayName } from "@/utils/displayname";
import { forwardRef, useState } from "react";
import Icon from "../Icon/Icon";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { InputProp } from "../../types/auera-ui";
import { useComputeInput } from "./use-textinput";
import { useMode } from "@/hook/use";

const PasswordInput = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  const {
    inputClass,
    placeholder,
    variant,
    disabled,
    radius,
    className,
    ...remainingProps
  } = props;
  const [type, setType] = useState<"text" | "password">("password");

  const { Input, InputInterface } = useComputeInput({
    variant,
    radius,
    disabled,
    inputClass,
    className,
  });

  const { currentMode } = useMode(props.mode);

  const handleView = () =>
    setType((prev) => (prev === "password" ? "text" : "password"));

  return (
    <InputInterface disabled={disabled} mode={props.mode}>
      <Input
        ref={ref as any}
        type={type}
        mode={props.mode}
        placeholder={placeholder || "Enter Password..."}
        {...remainingProps}
      />
      <Icon
        icon={type === "password" ? HiOutlineEye : HiOutlineEyeOff}
        onClick={handleView}
        data-theme={currentMode}
        className="hover:opacity-75 cursor-pointer tone-dark:text-neutral-800 text-neutral-400 hover:text-neutral-600 transition duration-300"
        size={20}
      />
    </InputInterface>
  );
});

export default PasswordInput;
PasswordInput.displayName = getDisplayName("PasswordInput");
