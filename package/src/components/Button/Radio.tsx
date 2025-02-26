import { useState } from "react";
import { RadioProps } from "../../types/auera-ui";
import { tw } from "stywind";
import { getNextShade } from "../../utils/system";
import { useMode } from "@/hook/use";

const Radio: React.FC<RadioProps> = ({
  checked: on,
  name,
  size = 16,
  onCheck,
  className,
  color = "blue-500",
  ...props
}) => {
  const [checked, setChecked] = useState(on ?? false);

  const handleCheck = () => {
    const newState = !checked;

    onCheck?.(newState);

    setChecked(newState);
  };

  const { currentMode } = useMode(props.mode);

  // TODO: add currentMode, add color and focus +1

  const nextShade = getNextShade(color);

  return (
    <input
      data-theme={currentMode}
      className={tw(
        "cursor-pointer transition-all duration-500",
        `text-${nextShade} focus:ring-${color} disabled:opacity-50 disabled:pointer-events-none
        tone-dark:bg-neutral-800 tone-dark:border-neutral-700 tone-dark:checked:bg-${color}
        tone-dark:checked:border-${color} tone-dark:focus:ring-offset-gray-800 shrink-0 mt-0.5
        border-gray-200 rounded-full disabled:bg-gray-300`,
        {
          "w-4 h-4": size === 16,
          "w-5 h-5": size === 20,
          "w-6 h-6": size === 24,
          "w-7 h-7": size === 26,
          "w-8 h-8": size === 30,
        },
        className
      )}
      type="radio"
      name={name}
      checked={checked}
      onClick={handleCheck}
      {...props}
    />
  );
};

export default Radio;
