import { SelectContext } from "@/context/select";
import { SelectProps } from "../../types/auera-ui";
import { useEffect, useRef, useState } from "react";
import { tw } from "stywind";
import { useMode } from "@/hook/use";
import { getDisplayName } from "@/utils/displayname";

const Select: React.FC<SelectProps> = ({
  children,
  radius,
  mode,
  className,
  themeVariant,
}) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [contentVariant, setContentVariant] = useState<"padded" | "flush">(
    "padded"
  );

  useEffect(() => {
    document.documentElement.setAttribute("select-open", String(open));
    if (selectRef.current) {
      setWidth(selectRef.current.offsetWidth);
    }
  }, [open]);

  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [open]);

  const { currentMode } = useMode(mode);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <SelectContext.Provider
      value={{
        radius,
        width,
        selectRef,
        setValue,
        currentValue: value,
        open,
        onClose,
        themeVariant,
        onOpen,
        mode: currentMode,
        contentVariant,
        setContentVariant,
      }}
    >
      <div
        className={tw("relative flex flex-col w-full", className)}
        ref={selectRef}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
Select.displayName = getDisplayName("Select");
