import React, { useEffect } from "react";
import { useComputeContent } from "./compute";
import { useSelectState } from "../../context/select";
import { SelectContentProps, SelectItemProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import SelectItem from "./SelectItem";
import { tw } from "stywind";

const SelectContent: React.FC<SelectContentProps> = ({
  children,
  className,
  openFn,
  style,
  variant,
}) => {
  const { radius, open, width, selectRef, mode, setContentVariant } =
    useSelectState();

  useEffect(() => {
    setContentVariant(variant as "padded" | "flush");
  }, [variant, setContentVariant]);

  const Content = useComputeContent({ radius, className, open, variant });

  const bottom = selectRef.current?.getBoundingClientRect()?.bottom;

  useEffect(() => {
    if (open && openFn) {
      openFn!();
    }
  }, [open]);

  const selectItmes = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === SelectItem
  );

  const renderChildren = () => {
    return selectItmes.map((element, index) => {
      const eadge = index === selectItmes.length - 1 || index === 0;
      if (!React.isValidElement(element)) return null;

      const typedElement = element as React.ReactElement<SelectItemProps>;

      return (
        <SelectItem
          key={index}
          className={tw(
            eadge && variant === "flush"
              ? index === 0
                ? {
                    "rounded-t-none": radius === "none",
                    "rounded-t-sm": radius === "sm",
                    "rounded-t-md": radius === "md",
                    "rounded-t-lg": radius === "lg",
                    "rounded-t-xl": radius === "xl",
                    "rounded-t-2xl": radius === "2xl",
                  }
                : {
                    "rounded-b-none": radius === "none",
                    "rounded-b-sm": radius === "sm",
                    "rounded-b-md": radius === "md",
                    "rounded-b-lg": radius === "lg",
                    "rounded-b-xl": radius === "xl",
                    "rounded-b-2xl": radius === "2xl",
                  }
              : "",
            typedElement.props.className
          )}
          {...typedElement.props}
        >
          {typedElement.props.children}
        </SelectItem>
      );
    });
  };

  return (
    <Content
      data-theme={mode}
      style={{
        width,
        top: Number(bottom) + 5,
        ...style,
      }}
    >
      {renderChildren()}
    </Content>
  );
};

export default SelectContent;

SelectContent.displayName = getDisplayName("SelectContent");
