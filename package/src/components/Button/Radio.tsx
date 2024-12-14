import { RadioProps } from "../../types/auera-ui";
import { createStyle, tw } from "stywind";

const radioSize = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const Radio: React.FC<RadioProps> = ({
  checked,
  name,
  size = "md",
  onSelect,
  ...props
}) => {
  const Input = createStyle("input").classname(
    tw("cursor-pointer", props.className, radioSize[size])
  );
  return (
    <Input type="radio" name={name} checked={checked} onClick={onSelect} />
  );
};

export default Radio;
