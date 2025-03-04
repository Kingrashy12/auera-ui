import React from "react";
import { useSelectState } from "@/context/select";
import { useComputeItem } from "./compute";
import { FaCheck } from "react-icons/fa6";
import { SelectItemProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";

const SelectItem: React.FC<SelectItemProps> = ({
  children,
  className,
  value,
  onSelect,
}) => {
  const { radius, currentValue, setValue, onClose, mode } = useSelectState();
  const Component = useComputeItem({
    radius,
    className,
    active: currentValue === value,
  });

  const select = () => {
    setValue(value);
    if (onSelect) {
      onSelect(value);
    }
    onClose();
  };

  return (
    <Component onClick={select} data-theme={mode}>
      {children}
      {currentValue === value && (
        <FaCheck data-theme={mode} className="tone-dark:text-white" />
      )}
    </Component>
  );
};

export default SelectItem;
SelectItem.displayName = getDisplayName("SelectItem");
