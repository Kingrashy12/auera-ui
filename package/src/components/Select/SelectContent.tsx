import React, { useEffect } from "react";
import { useComputeContent } from "./compute";
import { useSelectState } from "@/context/select";
import { SelectContentProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";

const SelectContent: React.FC<SelectContentProps> = ({
  children,
  className,
  openFn,
  style,
}) => {
  const { radius, open, width, selectRef, mode } = useSelectState();

  const Content = useComputeContent({ radius, className, open });

  const bottom = selectRef.current?.getBoundingClientRect()?.bottom;

  useEffect(() => {
    if (open && openFn) {
      openFn!();
    }
  }, [open]);

  return (
    <Content
      data-theme={mode}
      style={{
        width,
        top: Number(bottom) + 5,
        ...style,
      }}
    >
      {children}
    </Content>
  );
};

export default SelectContent;

SelectContent.displayName = getDisplayName("SelectContent");
