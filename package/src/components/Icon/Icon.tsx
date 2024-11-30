import { CSSProperties, ElementType } from "react";

type IconBaseType = {
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon: ElementType;
  /**
   * Size of the icon, this accepts only `number`
   * @type {number}
   */
  size?: number;

  /**
   * Custom class name for the icon
   * @type {string}
   */
  className?: string;

  /**
   * Click event handler
   * @type {function}
   */
  onClick?: () => void;

  /**
   * Mouse enter event handler
   * @type {function}
   */
  onMouseEnter?: () => void;

  /**
   * Mouse leave event handler
   * @type {function}
   */
  onMouseLeave?: () => void;

  /**
   * Custom styles for the icon
   * @type {React.CSSProperties}
   */
  styles?: CSSProperties;

  /**
   * Color of the icon
   * @type {string}
   */
  color?: string;

  /**
   * Title of the icon if any
   * @type {string}
   */
  title?: string;
};

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
    />
  );
};

export default Icon;
