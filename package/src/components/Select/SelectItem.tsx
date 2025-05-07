import React from "react";
import { useSelectState } from "../../context/select";
import { useComputeItem } from "./compute";
import { FaCheck } from "react-icons/fa6";
import { SelectItemProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";

const SelectItem: React.FC<SelectItemProps> = ({
  children,
  className,
  value,
  isCurrent,
  onSelect,
  disabled,
}) => {
  const {
    radius,
    currentValue,
    setValue,
    onClose,
    mode,
    themeVariant,
    contentVariant,
  } = useSelectState();
  const Component = useComputeItem({
    radius,
    className,
    active: currentValue === value,
    variant: contentVariant,
    disabled,
  });

  const select = () => {
    if (disabled) return;

    setValue(value);
    if (onSelect) {
      onSelect(value);
    }
    onClose();
  };

  const active = isCurrent || currentValue === value;

  return (
    <Component onClick={select} mode={mode} themeVariant={themeVariant}>
      {children}
      {active && <FaCheck data-theme={mode} className="tone-dark:text-white" />}
    </Component>
  );
};

export default SelectItem;
SelectItem.displayName = getDisplayName("SelectItem");
