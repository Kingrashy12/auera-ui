import React from "react";

import { ButtonVariant, DesignFlavour, SchemeVariant } from "./auera-system";

export type DivProps = React.HtmlHTMLAttributes<HTMLDivElement>;
export type BtnProps = React.HtmlHTMLAttributes<HTMLButtonElement>;

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
  size?: "sm" | "md" | "lg" | "xl";

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
   * Sets the color mode for the drop component.
   * - `"light"`: Light mode.
   * - `"dark"`: Dark mode.
   *
   * @default "light"
   */
  mode?: "light" | "dark";
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
   *
   * @default "sm"
   */
  intensity?: "none" | "sm" | "md" | "lg" | "xl";

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
  intensity?: "none" | "sm" | "md" | "lg" | "xl";

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
   * **Note:** Ensure the `value` is consistent between `Modal` and `Modal.Trigger`
   * to correctly link the trigger to the modal.
   */
  value: string;
  className?: string;
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

export interface IconButtonProps extends BtnProps {
  variants?: "subtle" | "outline" | "ghost";
  size?: "md" | "lg" | "xl";
  radius?: "md" | "lg" | "xl" | "full";
}

export interface DrawerProps extends ModalType {
  backdropClass?: string;
}

export interface DrawerPanelProps extends DivProps {
  position?: "left" | "right";
  type?: "float" | "sticky";
  flavour?: DesignFlavour;
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