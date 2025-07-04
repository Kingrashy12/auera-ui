import { IconBaseType } from "../../types/auera-ui";

const Icon = ({ icon: IconComponent, ...props }: IconBaseType) => {
  return (
    <IconComponent
      title={props.title}
      size={props.size}
      className={props.className}
      color={props.color}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      style={props.styles}
      {...props}
    />
  );
};

export default Icon;
