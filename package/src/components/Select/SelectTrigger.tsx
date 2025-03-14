import React from "react";
import { useComputeTrigger } from "./compute";
import { useSelectState } from "../../context/select";
import { RiExpandUpDownLine } from "react-icons/ri";
import { tw } from "stywind";
import { getDisplayName } from "../../utils/displayname";
import { SelectTriggerProps } from "../../types/auera-ui";
import { StrFun } from "../../utils";

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  className,
  placeholder,
  children,
  variant,
  disabled,
}) => {
  const { onClose, onOpen, open, radius, currentValue, mode } =
    useSelectState();
  const Trigger = useComputeTrigger({ radius, className, variant });

  const splitBy = currentValue.includes("-") ? "-" : " ";

  const trigger = () => {
    if (disabled) return;
    open ? onClose() : onOpen();
  };

  return (
    <Trigger onClick={trigger} data-theme={mode}>
      {children ?? (
        <span
          data-theme={mode}
          className={tw("truncate text-sm tone-dark:text-white")}
        >
          {currentValue
            ? StrFun.capitalize(currentValue, splitBy, " ")
            : placeholder}
        </span>
      )}

      <RiExpandUpDownLine
        data-theme={mode}
        className={tw("size-4 shrink-0", "text-gray-400 tone-dark:text-white")}
      />
    </Trigger>
  );
};

export default SelectTrigger;

SelectTrigger.displayName = getDisplayName("SelectTrigger");
