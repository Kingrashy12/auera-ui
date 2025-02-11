import { getDisplayName } from "@/utils/displayname";
import { forwardRef } from "react";
import Icon from "../Icon/Icon";
import { useComputeInput } from "./use-textinput";
import { InputProp } from "../../types/auera-ui";

const TextInput = forwardRef<HTMLInputElement, InputProp>((props, ref) => {
  const {
    icon,
    iconSize,
    inputClass,
    placeholder,
    radius,
    variant,
    className,
    disabled,
    ...remainingProps
  } = props;
  const { Input, InputInterface } = useComputeInput({
    radius,
    variant,
    inputClass,
    className,
    disabled,
  });
  return (
    <InputInterface disabled={disabled} mode={props.mode}>
      {icon && (
        <Icon icon={icon} className="text-neutral-400" size={iconSize || 20} />
      )}
      <Input
        ref={ref as any}
        mode={props.mode}
        placeholder={placeholder || "Type here..."}
        {...remainingProps}
      />
    </InputInterface>
  );
});

export default TextInput;
TextInput.displayName = getDisplayName("TextInput");
