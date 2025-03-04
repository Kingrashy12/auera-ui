import React from "react";
import { useComputeTrigger } from "./compute";
import { useSelectState } from "@/context/select";
import { RiExpandUpDownLine } from "react-icons/ri";
import { tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";
import { SelectTriggerProps } from "../../types/auera-ui";
import { StrFun } from "@/utils";

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  className,
  placeholder,
}) => {
  const { onClose, onOpen, open, radius, currentValue, mode } =
    useSelectState();
  const Trigger = useComputeTrigger({ radius, className });

  return (
    <Trigger onClick={open ? onClose : onOpen} data-theme={mode}>
      <span className={tw("truncate text-sm", className)}>
        {currentValue ? StrFun.capitalize(currentValue, "-", " ") : placeholder}
      </span>

      <RiExpandUpDownLine
        data-theme={mode}
        className={tw(
          "size-4 shrink-0",
          "text-gray-400 tone-dark:text-gray-600"
        )}
      />
    </Trigger>
  );
};

export default SelectTrigger;

SelectTrigger.displayName = getDisplayName("SelectTrigger");
