import { getDisplayName } from "@/utils/displayname";
import { forwardRef, useState } from "react";
import Icon from "../Icon/Icon";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { PasswordProps } from "../../types/auera-ui";
import { useComputeInput } from "./use-textinput";
import { useMode } from "@/hook/use";
import { HiLockClosed } from "react-icons/hi2";

const PasswordInput = forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      inputClass,
      placeholder,
      variant,
      disabled,
      radius,
      className,
      name,
      onChange,
      value,
      icon,
      iconSize,
      hideLock,
      ...props
    },
    ref
  ) => {
    const [type, setType] = useState<"text" | "password">("password");

    const { currentMode } = useMode(props.mode);

    const { Input, InputInterface } = useComputeInput({
      variant,
      radius,
      disabled,
      inputClass,
      className,
      id: props.id as string,
      mode: currentMode,
    });

    const handleView = () =>
      setType((prev) => (prev === "password" ? "text" : "password"));

    return (
      <InputInterface disabled={disabled} mode={props.mode}>
        {!hideLock && !icon ? (
          <Icon
            icon={HiLockClosed}
            className="text-neutral-400"
            size={iconSize || 20}
          />
        ) : null}

        {!hideLock && icon && (
          <Icon
            icon={icon}
            className="text-neutral-400"
            size={iconSize || 20}
          />
        )}

        <Input
          ref={ref as any}
          type={type}
          mode={props.mode}
          placeholder={placeholder || "⚬ ⚬ ⚬ ⚬ ⚬ ⚬ ⚬"}
          value={value}
          onChange={onChange}
          name={name}
          {...props}
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
  }
);

export default PasswordInput;
PasswordInput.displayName = getDisplayName("PasswordInput");
