import { RadioProps } from "../../types/auera-ui";
import { tw } from "stywind";

const Radio: React.FC<RadioProps> = ({
  checked,
  name,
  size = 16,
  onSelect,
  className,
  color = "blue-500",
  ...props
}) => {
  return (
    <input
      className={tw(
        "cursor-pointer transition-all duration-500",
        {
          "w-4 h-4": size === 16,
          "w-5 h-5": size === 20,
          "w-6 h-6": size === 24,
        },
        `accent-${color}`,
        className
      )}
      type="radio"
      name={name}
      checked={checked}
      onClick={onSelect}
      {...props}
    />
  );
};

export default Radio;
