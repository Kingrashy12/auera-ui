import { getDisplayName } from "@/utils/displayname";
import { forwardRef, memo } from "react";
import Icon from "../Icon/Icon";
import { useComputeInput } from "./use-textinput";
import { InputProp } from "../../types/auera-ui";
import { useMode } from "@/hook/use";

const TextInput = forwardRef<HTMLInputElement, InputProp>(
  (
    {
      icon,
      iconSize,
      inputClass,
      placeholder,
      radius,
      variant,
      className,
      disabled,
      value,
      onChange,
      name,
      ...props
    },
    ref
  ) => {
    const { currentMode } = useMode(props.mode);

    const { Input, InputInterface } = useComputeInput({
      radius,
      variant,
      inputClass,
      className,
      disabled,
      id: props.id as string,
      mode: currentMode,
    });

    return (
      <InputInterface disabled={disabled} mode={props.mode}>
        {icon && (
          <Icon
            icon={icon}
            className="text-neutral-400"
            size={iconSize || 20}
          />
        )}
        <Input
          ref={ref as any}
          mode={props.mode}
          placeholder={placeholder || "Type here..."}
          value={value}
          onChange={onChange}
          name={name}
          {...props}
        />
      </InputInterface>
    );
  }
);

export default memo(TextInput);
TextInput.displayName = getDisplayName("TextInput");
