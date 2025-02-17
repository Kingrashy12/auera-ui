import React, { ReactNode } from "react";

import {
  ButtonVariant,
  ColorKey,
  ColorPair,
  DesignFlavour,
  ModeType,
  SchemeVariant,
  TailwindClass,
  Trigger,
} from "./auera-system";
import { InputProps } from "./element-props";
import { zIndex } from "./keys";

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface BoxProps extends DivProps {
  /**
   * If true, centers the content both vertically and horizontally within the Box.
   */
  centered?: boolean;

  /**
   * Specifies the flex direction of the Box. Can be either "row" or "column".
   */
  direction?: "row" | "column";
  /**
   * Enables wrapping for items if they exceed the available space in a row layout.
   */
  wrap?: boolean;
  /**
   * If true, the Box will take up the full width of its container.
   * @default false
   * @type {boolean}
   */
  fullWidth?: boolean;
  between?: boolean;
}

export declare type SizeVariantType =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export interface ButtonProps extends BtnProps {
  /**
   * Specifies the visual variant of the button.
   */
  variant?: ButtonVariant;

  /**
   * Defines the color scheme for the button.
   */
  colorScheme?: SchemeVariant;

  /**
   * Sets the border radius of the button.
   * - `"none"`: No border radius.
   * - `"sm"`: Small border radius.
   * - `"md"`: Medium border radius.
   * - `"lg"`: Large border radius.
   * - `"xl"`: Extra-large border radius.
   * - `"full"`: Fully rounded (pill-shaped).
   *
   * @default "md"
   */
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";

  /**
   * Controls the button size.
   * - `"sm"`: Small button.
   * - `"md"`: Medium button.
   * - `"lg"`: Large button.
   * - `"xl"`: Extra-large button.
   *
   * @default "md"
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  /**
   * Indicates if the button is in a loading state.
   *
   * @default false
   */
  isLoading?: boolean;

  /**
   * Component to display as the right-side icon within the button.
   */
  rightIcon?: React.ElementType;

  /**
   * Component to display as the left-side icon within the button.
   */
  leftIcon?: React.ElementType;

  /**
   * Sets the size of the left-side icon.
   *
   * @default 16
   */
  leftIconSize?: number;

  /**
   * Sets the size of the right-side icon.
   *
   * @default 16
   */
  rightIconSize?: number;

  /**
   * Sets the color of the right-side icon.
   */
  rightIconColor?: string;

  /**
   * Sets the color of the left-side icon.
   */
  leftIconColor?: string;

  /**
   * Custom spinner to display when the button is in a loading state.
   */
  spinner?: React.ReactNode;

  /**
   * Content to be displayed inside the button.
   */
  children?: React.ReactNode;

  /**
   * Disables the button, preventing user interaction.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Enables or disables animation effects on the button.
   *
   * @default false
   */
  animate?: boolean;

  /**
   * Specifies the design flavour applied to the button.
   */
  flavour?: DesignFlavour;

  /**
   * Sets the button to take the full width of its container.
   *
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Hides the button's children while the button is in a loading state.
   *
   * @default false
   */
  hideChildOnLoad?: boolean;
  /**
   * The visual mode of the button.
   * - `"light"`: Light mode.
   * - `"dark"`: Dark mode.
   *
   * @default "light"
   */
  mode?: "light" | "dark";
  withTrigger?: boolean;
  triggerType?: "open" | "close";
  triggerValue?: string;
  trigger?: Trigger;
  triggerClass?: string;
}

export interface Drop extends DivProps {
  /**
   * Specifies the design flavour for the drop component.
   */
  flavour?: DesignFlavour;

  /**
   * Sets the color mode for the drop component.
   * - `"light"`: Light mode.
   * - `"dark"`: Dark mode.
   *
   * @default "light"
   */
  mode?: "light" | "dark";

  /**
   * Determines whether the drop component is open.
   *
   * @default false
   */
  open: boolean;

  /**
   * Function to be called when the drop component is requested to close.
   */
  onClose: () => void;

  /**
   * Controls the intensity of the drop component backdrop.
   * - `"none"`: No drop intensity.
   * - `"sm"`: Small intensity.
   * - `"md"`: Medium intensity.
   * - `"lg"`: Large intensity.
   * - `"xl"`: Extra-large intensity.
   * - `"2xl"`.
   *
   * @default "sm"
   */
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

  /**
   * Centers the content within the drop component.
   *
   * @default false
   */
  centerContent?: boolean;

  /**
   * Prevents the drop component from closing when clicked outside or on the close button.
   *
   * @default false
   */
  preventClose?: boolean;
  zIndex?: zIndex;
}

export type ModalType = {
  /**
   * Prevents the modal from closing when clicked outside.
   *
   * @default false
   */
  preventClose?: boolean;

  /**
   * Content to be rendered inside the modal.
   */
  children: React.ReactNode;

  /**
   * Controls the intensity of the modal backdrop.
   * - `"none"`: No drop intensity.
   * - `"sm"`: Small intensity.
   * - `"md"`: Medium intensity.
   * - `"lg"`: Large intensity.
   * - `"xl"`: Extra-large intensity.
   *
   * @default "sm"
   */
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

  /**
   * Sets the color mode for the modal.
   * - `"light"`: Light mode.
   * - `"dark"`: Dark mode.
   *
   * @default 'light'
   */
  mode?: "light" | "dark";
  /**
   * Provides the modal's value, typically used for managing the active state.
   *
   * **Note:** Ensure the `value` is consistent between `Modal` and `ModalTrigger`
   * to correctly link the trigger to the modal.
   */
  value: string;
  className?: string;
  zIndex?: zIndex;
};

export type ModalPanelType = {
  /**
   * Defines the size of the modal panel.
   * - "sm": Small panel.
   * - "md": Medium panel (default).
   * - "lg": Large panel.
   * - "xl": Extra large panel.
   * - "full": Full-screen panel.
   */
  size?: "auto" | "sm" | "md" | "lg" | "xl" | "full";

  radius?: "md" | "lg" | "xl" | "2xl" | "3xl";

  /**
   * The content displayed within the modal panel.
   * Accepts any valid React nodes such as text, elements, or components.
   */
  children?: React.ReactNode;

  /**
   * Transition animation applied when the modal panel opens.
   * - "walkIn": Panel walks in smoothly from a direction.
   * - "dropIn": Panel drops down from the top.
   * - "slideIn": Panel slides in from the side.
   */
  transition?: "walkIn" | "dropIn" | "slideIn";
  /**
   * Optional string to add custom CSS classes.
   */
  className?: string;
  /**
   * Optional object to add custom inline styles.
   */
  style?: React.CSSProperties;
  /**
   * Specifies the alignment direction of the Stack component's children.
   * `vertical` for stacking items one above the other (column), `horizontal`
   * for stacking items side by side (row).
   */
  align?: "vertical" | "horizontal";
  /**
   * Specifies the design flavour for the modal.
   */
  flavour?: DesignFlavour;
  mode?: "light" | "dark";
};

export interface ModalContentType extends DivProps {
  centerContent?: boolean;
}
export interface ModalTriggerType extends DivProps {
  /**
   * Specifies the type of modal trigger.
   * - `"open"`: Opens the modal when clicked.
   * - `"close"`: Closes the modal when clicked.
   *
   * @default 'open'
   */
  type?: "open" | "close";
  /**
   * Provides the modal's value, typically used for managing the active state.
   *
   * **Note:** Ensure the `value` is consistent between `Modal` and `Modal.Trigger`
   * to correctly link the trigger to the modal.
   */
  value: string;
}
export interface ModalHeaderType extends DivProps {
  /**
   * Adds border-bottom to the component.
   * @type {boolean}
   * @default true
   */
  showBorder?: boolean;
}

export interface ModalFooterProps extends DivProps {
  /**
   * Specifies the alignment of the footer content.
   * @type {"right" | "left"}
   *
   * @default `right`
   */
  position?: "right" | "left";
  /**
   * Add a border-top to the component.
   * @type {boolean}
   * @default true
   */
  showBorder?: boolean;
}

export interface IconButtonProps {
  variant?: "subtle" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  disabled?: boolean;
  withTrigger?: boolean;
  triggerType?: "open" | "close";
  triggerValue?: string;
  trigger?: Trigger;
  mode?: "light" | "dark";
  active?: boolean;
  asChild?: boolean;
}

export type IconButtonPropsExtended<T extends boolean> = T extends true
  ? IconButtonProps & DivProps
  : IconButtonProps & BtnProps;

export interface DrawerProps extends ModalType {
  backdropClass?: string;
}

export interface DrawerPanelProps extends DivProps {
  position?: "left" | "right";
  type?: "float" | "sticky";
  flavour?: DesignFlavour;
  mode?: "light" | "dark";
}

export interface DrawerTriggerType extends DivProps {
  /**
   * Specifies the type of drawer trigger.
   * - `"open"`: Opens the drawer when clicked.
   * - `"close"`: Closes the drawer when clicked.
   *
   * @default 'open'
   */
  type?: "open" | "close";
  /**
   * Provides the drawer's value, typically used for managing the active state.
   *
   * **Note:** Ensure the `value` is consistent between `Mrawer` and `Mrawer.Trigger`
   * to correctly link the trigger to the drawer.
   */
  value: string;
}

export type SwitchProps = {
  on?: boolean;
  onToggleSwitch?: (state: boolean) => void;
  size?: "sm" | "md" | "lg" | "xl";
  unCheckColor?: ColorPair;
  color?: ColorPair;
  disabled?: boolean;
};

export type CheckBoxProps = {
  size?: "xs" | "sm" | "md";
  radius?: "none" | "sm" | "md" | "full";
  onCheckChange?: (checked: boolean) => void;
  colorScheme?: "primary" | "danger" | "warning" | "success";
  color?: ColorPair;
  disabled?: boolean;
  classNames?: {
    checker?: TailwindClass;
    container?: TailwindClass;
  };
  children?: React.ReactNode;
  checked?: boolean;
};

export type TabsType = {
  children?: React.ReactNode;
  variant?: "line" | "solid";
  mode?: "light" | "dark";
  fullWidth?: boolean;
  className?: string;
  rounded?: boolean;
  hideScrollBar?: boolean;
  containerClass?: string;
  hideBorder?: boolean;
};

export type TabHandleType = {
  /**
   * The content to be rendered inside the tab.
   */
  children?: React.ReactNode;
  /**
   * The color to be applied when the tab is active.
   * @default "blue-500"
   */
  activeColor?: ColorPair;
  /**
   * The color to be applied when the tab is active on @param variant `solid`.
   * @default "black"
   */
  activeSolidColor?: ColorPair;
  /**
   * The color to be applied when the tab is inactive.
   * @default "neutral-400"
   */
  inActiveColor?: ColorPair;
  /**
   * The unique identifier or value for the tab, typically used to track the selected tab.
   */
  value: string;
  /**
   * The function to be called when the tab is clicked.
   */
  onClick?: () => void;
  /**
   * If true, disables the tab, preventing interaction.
   */
  disabled?: boolean;
  /**
   * Optional additional CSS class for styling the TabHandle.
   */
  className?: string;

  /**
   * Inline styles for the TabHandle.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the TabHandle is currently active.
   * @default false
   */
  isActive?: boolean;

  /**
   * The icon component to be rendered in the TabHandle.
   * Can be any valid React component type.
   */
  icon?: React.ElementType;

  /**
   * The size of the icon in pixels.
   * @default 16
   */
  iconSize?: number;
};

export interface StackProps extends BoxProps {
  /**
   * Specifies the alignment direction of the Stack component's children.
   * `vertical` for stacking items one above the other (column),
   * `horizontal` for stacking items side by side (row).
   */
  align?: "vertical" | "horizontal";
  /**
   * Enables wrapping for items if they exceed the available space in a row layout.
   */
  wrap?: boolean;
}

export interface CardProps extends BoxProps {
  /**
   * Whether the card should take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The direction of the card's content layout.
   */
  direction?: "row" | "column";
  /**
   * The visual mode of the card.
   */
  mode?: "light" | "dark";
  /**
   * The border color of the card.
   */
  borderColor?: string;
  centerContent?: boolean;
  variant?: "flat" | "raised";
  img?: {
    src: string;
    alt: string;
    className?: TailwindClass;
    width?: string | number;
    height?: string | number;
    style?: React.CSSProperties;
  };
  renderImage?: () => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  classNames?: {
    root?: TailwindClass;
    body?: TailwindClass;
  };
}

export type TootipProps = {
  position?: "top" | "left" | "right" | "bottom";
  children: React.ReactNode;
  label: string;
  className?: string;
  labelClass?: string;
  containerClass?: string;
  showPointer?: boolean;
};

export interface RadioProps extends InputProps {
  checked: boolean;
  className?: string;
  onSelect: () => void;
  name?: string;
  // size?: "sm" | "md" | "lg";
  size?: 16 | 20 | 24;
  color?: ColorPair;
}

export declare type ToastVariant =
  | "info"
  | "error"
  | "success"
  | "warning"
  | "loading";
export declare type ToastTransitionType =
  | "dropIn"
  | "slideIn"
  | "popIn"
  | "walkIn";
export declare type ToastPositionType =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export declare type ToastType = {
  [key in ToastVariant]: (
    message: string,
    options?: {
      position?: ToastPositionType;
      className?: string;
      transition?: ToastTransitionType;
      key?: string;
    }
  ) => void;
};

export declare type ToastOptionsType = {
  /**
   * The position where the toast should appear on the screen.
   */
  position?: ToastPositionType;

  /**
   * Additional CSS class name(s) to be applied to the toast.
   */
  className?: string;

  /**
   * The animation transition effect for the toast's appearance.
   */
  transition?: "dropIn" | "slideIn" | "popIn" | "walkIn";
  /**
   * A unique key used exclusively for updating the message and type of a loading toast.
   * This key is used to identify an existing loading toast and modify its content (e.g., updating the message or changing its type).
   * It is important to use the same `key` as the original loading toast in order to update it.
   * @example 'login-status' or 'register-status'.
   */
  key?: string;
};

export interface FabProps extends DivProps {
  position?: "left" | "right";
  type?: "fixed" | "relative" | "absolute" | "sticky" | "static";
  color?: "primary" | "bold" | "soft";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  zIndex?: zIndex;
}

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Flag indicating whether the menu is initially open.
   * @default false
   */
  open?: boolean;

  /**
   * Theme mode, either 'light' or 'dark'.
   * @default 'light'
   */
  mode?: "light" | "dark";

  /**
   * Z-index value for positioning the menu.
   * @default 100
   */
  zIndex?: zIndex;
}

export interface MenuItemProps extends DivProps {
  /**
   * Text color (e.g., 'black', 'red-500').
   * @default 'black'
   */
  color?: ColorKey;

  /**
   * Theme mode, either 'light' or 'dark'.
   * @default 'light'
   */
  mode?: "light" | "dark";
  /**
   * Indicates if the MenuItem is disabled.
   */
  disabled?: boolean;
  type?: "padded" | "flush";
}

export type CollapseProps = {
  headerLabel?: string;
  children?: React.ReactNode;
  mode?: "light" | "dark";
  openIcon?: React.ElementType;
  closeIcon?: React.ElementType;
  classNames?: {
    main?: string;
    header?: string;
    headerLabel?: string;
  };
  renderHeader?: (open: boolean) => React.ReactNode;
};

export type StatusBadgeProps = {
  /**
   * The status of the badge, one of 'online', 'offline', 'away', or 'busy'.
   * @default 'online'
   */
  status?: "online" | "offline" | "away" | "busy";
  /**
   * The size of the badge, one of 'sm', 'md', or 'lg'.
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /**
   * Optional className to be applied to the badge container.
   */
  className?: string;
  /**
   * Optional children to be rendered inside the badge.
   */
  children?: React.ReactNode;
  /**
   * Optional custom class to be applied to the badge.
   */
  badgeClassName?: string;
  /**
   * Placement of the badge relative to the element.
   * This defines the positioning of the badge in relation to its container.
   */
  placement?: "right-top" | "right-bottom" | "left-top" | "left-bottom";
  animate?: boolean;
};

export interface MediaProps {
  fullWidth?: boolean;
  isLoading?: boolean;
  radius?: ButtonProps["radius"];
  loaderClass?: string;
  loaderStyle?: React.CSSProperties;
}

export interface InputProp extends InputProps {
  inputClass?: string;
  icon?: React.ElementType;
  iconSize?: number;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  variant?: "solid" | "outline" | "ghost" | "unstyled";
  mode?: ModeType;
}

export type FileContruct = {
  base64: string;
  main: {
    name: string;
    type: string;
    size: number;
  };
};

export type FileData = FileContruct | FileContruct[];

export type CatchFile = {
  useFile: (file: FileData) => void;
};

export interface UploadDropzone {
  accept?: string[];
  maxSize?: number;
  label: string;
  description: string;
  mode?: "dark" | "light";
  disabled?: boolean;
  labelClass?: string;
  descriptionClass?: string;
  className?: string;
  exceedMessage?: string;
}

export interface FileListProps {
  mode?: "light" | "dark";
  removeAble?: boolean;
  showSize?: boolean;
}

export interface UploadTrigger {
  children: React.ReactNode;
  accept?: string[];
  maxSize?: number;
  disabled?: boolean;
  exceedMessage?: string;
}

export interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  className?: string;
  error?: boolean;
  inputClass?: string;
  radius?: "md" | "lg" | "xl" | "full";
  mode?: "light" | "dark";
}

export interface LoaderProp {
  children: React.ReactNode;
  isLoading: boolean;
  size?: "sm" | "md" | "lg";
  color?: ColorPair;
  innerColor?: ColorPair;
  spinner?: React.ReactNode;
  loader?: "bounce" | "circle";
  error?: boolean;
  renderError?: React.ReactNode;
  keepOut?: boolean;
  empty?: boolean;
  emptyComponent?: ReactNode;
}

export interface SelectTriggerProps {
  placeholder: string;
  className?: string;
}

export interface SelectProps {
  className?: string;
  children?: React.ReactNode;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  mode?: "light" | "dark";
}

export interface SelectState {
  select: (value: string) => void;
}

export interface SelectContentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface SelectItemProps {
  value: string;
  onSelect?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
}
