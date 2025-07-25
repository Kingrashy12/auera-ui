import React, { ElementType, ReactNode } from "react";

import {
  ButtonVariant,
  ColorKey,
  ColorPair,
  ColorSchemes,
  DesignVariant,
  ModeType,
  SchemeVariant,
  ThemeVariant,
} from "./auera-system";
import { InputProps } from "./element-props";
import { zIndex } from "./keys";
import {
  ImageProps as IMGProps,
  TableProps,
  TableRowProps,
  THeadProps,
} from "stywind";

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface BoxProps extends DivProps {
  centered?: boolean;
  direction?: "row" | "column";
  wrap?: boolean;
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

export type ButtonProps<T extends React.ElementType> = {
  variant?: ButtonVariant;
  colorScheme?: SchemeVariant;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  isLoading?: boolean;
  rightIcon?: React.ElementType;
  leftIcon?: React.ElementType;
  leftIconSize?: number;
  rightIconSize?: number;
  rightIconColor?: string;
  leftIconColor?: string;
  spinner?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  animate?: boolean;
  design?: DesignVariant;
  fullWidth?: boolean;
  hideChildOnLoad?: boolean;
  mode?: "light" | "dark";
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export interface Drop extends DivProps {
  design?: DesignVariant;
  mode?: "light" | "dark";
  open: boolean;
  onClose: () => void;
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  centerContent?: boolean;
  /**
   * Prevents the drop component from closing when clicked outside or on the close button.
   *
   * @default false
   */
  preventClose?: boolean;
  zIndex?: zIndex;
  /**
   * @prop {boolean} preventScroll - Controls whether background scrolling is disabled when the modal is open.
   *
   * - When `true`, it prevents the user from scrolling the background while the modal is active.
   * - When `false`, background scrolling remains enabled.
   * - Defaults to `false` if not specified.
   *
   * Best practice: Use this to improve user experience by keeping focus within the modal.
   */
  preventScroll?: boolean;
}

export type ModalProps = {
  /**
   * Prevents the modal from closing when clicked outside.
   *
   * @default false
   */
  preventClose?: boolean;
  children: React.ReactNode;
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
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
  /**
   * @prop {boolean} preventScroll - Controls whether background scrolling is disabled when the modal is open.
   *
   * - When `true`, it prevents the user from scrolling the background while the modal is active.
   * - When `false`, background scrolling remains enabled.
   * - Defaults to `false` if not specified.
   *
   * Best practice: Use this to improve user experience by keeping focus within the modal.
   */
  preventScroll?: boolean;
};

export type ModalPanelProps = {
  size?: "auto" | "sm" | "md" | "lg" | "xl" | "full" | "full-screen";
  placement?: "top" | "center" | "bottom";
  radius?: "md" | "lg" | "xl" | "2xl" | "3xl";
  children?: React.ReactNode;
  transition?: "walkIn" | "dropIn" | "slideIn";
  className?: string;
  style?: React.CSSProperties;
  align?: "vertical" | "horizontal";
  design?: DesignVariant;
  mode?: "light" | "dark";
  themeVariant?: ThemeVariant;
};

export interface ModalContentProps extends DivProps {
  centerContent?: boolean;
}
export interface ModalTriggerProps extends DivProps {
  type?: "open" | "close";
  /**
   * Provides the modal's value, typically used for managing the active state.
   *
   * **Note:** Ensure the `value` is consistent between `Modal` and `Modal.Trigger`
   * to correctly link the trigger to the modal.
   */
  value: string;
  disabled?: boolean;
}
export interface ModalHeaderProps extends DivProps {
  showBorder?: boolean;
}

export interface ModalFooterProps extends DivProps {
  position?: "right" | "left";
  showBorder?: boolean;
}

export interface IconButtonProps {
  variant?: "subtle" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  disabled?: boolean;
  mode?: "light" | "dark";
  active?: boolean;
  as?: "button" | "div";
  themeVariant?: ThemeVariant;
}

export type IconButtonPropsExtended<T extends "button" | "div"> =
  T extends "div" ? IconButtonProps & DivProps : IconButtonProps & BtnProps;

export interface DrawerProps extends ModalProps {
  backdropClass?: string;
  /**
   * @prop {boolean} preventScroll - Controls whether background scrolling is disabled when the modal is open.
   *
   * - When `true`, it prevents the user from scrolling the background while the modal is active.
   * - When `false`, background scrolling remains enabled.
   * - Defaults to `false` if not specified.
   *
   * Best practice: Use this to improve user experience by keeping focus within the modal.
   */
  preventScroll?: boolean;
}

export interface DrawerPanelProps extends DivProps {
  position?: "left" | "right";
  type?: "float" | "sticky";
  design?: DesignVariant;
  mode?: "light" | "dark";
  themeVariant?: ThemeVariant;
}

export interface DrawerTriggerProps extends DivProps {
  type?: "open" | "close";
  /**
   * Provides the drawer's value, typically used for managing the active state.
   *
   * **Note:** Ensure the `value` is consistent between `Drawer` and `DrawerTrigger`
   * to correctly link the trigger to the drawer.
   */
  value: string;
  disabled?: boolean;
}

export type SwitchProps = {
  on?: boolean;
  onToggleSwitch?: (state: boolean) => void;
  size?: "sm" | "md" | "lg" | "xl";
  unCheckColor?: ColorPair;
  color?: ColorPair;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  variant?: "padded" | "flush";
};

export type CheckBoxProps = {
  size?: "xs" | "sm" | "md";
  radius?: "none" | "sm" | "md" | "full";
  onCheckChange?: (checked: boolean) => void;
  colorScheme?: "primary" | "danger" | "warning" | "success";
  color?: ColorPair;
  disabled?: boolean;
  classNames?: {
    checker?: string;
    container?: string;
  };
  children?: React.ReactNode;
  checked?: boolean;
};

export type TabsProps<Comp> = {
  children?: React.ReactNode;
  variant?: "line" | "solid";
  mode?: "light" | "dark";
  fullWidth?: boolean;
  className?: string;
  rounded?: boolean;
  hideScrollBar?: boolean;
  containerClass?: string;
  hideBorder?: boolean;
  panel?: React.FunctionComponent<Comp>;
  id?: string;
};

export type TabHandleProps = {
  children?: React.ReactNode;
  activeColor?: ColorPair;
  activeSolidColor?: ColorPair;
  inActiveColor?: ColorPair;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  icon?: React.ElementType;
  iconSize?: number;
  id?: string;
};

export interface StackProps extends BoxProps {
  align?: "vertical" | "horizontal";
  wrap?: boolean;
}

export interface CardProps extends BoxProps {
  fullWidth?: boolean;
  direction?: "row" | "column";
  mode?: "light" | "dark";
  centerContent?: boolean;
  variant?: "flat" | "raised";
  design?: DesignVariant;
  img?: {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    style?: React.CSSProperties;
    isLoading?: boolean;
  };
  renderImage?: () => React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  classNames?: {
    root?: string;
    body?: string;
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
  checked?: boolean;
  className?: string;
  onCheck?: (status: boolean) => void;
  name?: string;
  size?: 16 | 20 | 24 | 26 | 30;
  color?: ColorPair;
  mode?: ModeType;
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
  position?: ToastPositionType;
  className?: string;
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
  color?: ColorSchemes;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  disabled?: boolean;
  zIndex?: zIndex;
  variant?: "solid" | "soft" | "outline";
  mode?: ModeType;
  design?: DesignVariant;
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
  status?: "online" | "offline" | "away" | "busy";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  badgeClassName?: string;
  placement?: "right-top" | "right-bottom" | "left-top" | "left-bottom";
  animate?: boolean;
};

export interface ImageProps extends IMGProps {
  fullWidth?: boolean;
  isLoading?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  styles?: React.CSSProperties;
}

export interface InputProp extends InputProps {
  inputClass?: string;
  icon?: ElementType;
  iconSize?: number;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  variant?: "solid" | "outline" | "ghost" | "soft";
  mode?: ModeType;
  endContent?: React.ReactNode;
}

export interface PasswordProps extends InputProp {
  hideLock?: boolean;
}

export type FileContruct = {
  base64: string;
  main: {
    name: string;
    type: string;
    size: number;
    lastModified: number;
    webkitRelativePath: string;
  };
};

export type FileData = FileContruct | FileContruct[];
export type FileHandler = (file: FileData) => void;

export interface FileUploadProps {
  children: React.ReactNode;
  multiple?: boolean;
  onFileUpload?: FileHandler;
  maxFiles?: number;
  mode?: ModeType;
}

export interface UploadDropzone {
  accept?: FileType[];
  maxSize?: number;
  label: string;
  description: string;
  disabled?: boolean;
  exceedMessage?: string;
  classNames?: {
    root?: string;
    label?: string;
    description?: string;
  };
}

export interface FileListProps {
  removeAble?: boolean;
  showSize?: boolean;
  classNames?: {
    name?: string;
    root?: string;
  };
}

export type FileType =
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "image/gif"
  | "image/webp"
  | "image/svg+xml"
  | "video/mp4"
  | "video/webm"
  | "video/ogg"
  | "video/mkv"
  | "application/pdf"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "application/zip"
  | "application/x-rar-compressed"
  | "application/x-zip-compressed"
  | "application/json"
  | "application/xml"
  | "text/plain"
  | "text/csv"
  | "text/markdown"
  | "text/mdx"
  | "audio/mpeg"
  | "audio/mp3"
  | "audio/ogg"
  | "audio/wav"
  | "audio/flac"
  | "*";

export interface UploadTrigger {
  children: React.ReactNode;
  accept?: FileType[];
  maxSize?: number;
  disabled?: boolean;
  exceedMessage?: string;
}

export interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  classNames?: {
    input?: string;
    interface?: string;
  };
  error?: boolean;
  radius?: "md" | "lg" | "xl" | "full";
  mode?: "light" | "dark";
  id?: string;
}

export interface LoaderProp {
  children: React.ReactNode;
  isLoading: boolean;
  size?: "sm" | "md" | "lg";
  color?: ColorPair;
  spinner?: React.ReactNode;
  loader?: "bounce" | "spin" | "wave";
  error?: boolean;
  renderError?: React.ReactNode;
  keepOut?: boolean;
  empty?: boolean;
  emptyComponent?: ReactNode;
}

export interface SelectTriggerProps {
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "outline" | "ghost";
  disabled?: boolean;
}

export interface SelectProps {
  className?: string;
  children?: React.ReactNode;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  mode?: "light" | "dark";
  themeVariant?: ThemeVariant;
}

export interface SelectState {
  select: (value: string) => void;
}

export interface SelectContentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  openFn?: () => void;
  variant?: "padded" | "flush";
}

export interface SelectItemProps {
  value: string;
  onSelect?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
  isCurrent?: boolean;
  disabled?: boolean;
}

export interface DynamicBreadcrumbProps {
  separator?: "splash" | "arrow";
  itemClass?: string;
  containerClass?: string;
  className?: string;
  disableHref?: string[];
  exclude?: string;
  replacePath?: { for: string; path: string }[];
}

export interface BadgeProps {
  variant?: "solid" | "soft" | "outline";
  colorScheme?:
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "neutral"
    | "thick"
    | "teal"
    | "gray";
  className?: string;
  children?: React.ReactNode;
  asDiv?: boolean;
  mode?: ModeType;
  id?: string;
}

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  variant?: "heading" | "subheading" | "body";
  isLoading?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  fullWidth?: boolean;
  width?: number | string;
  height?: number | string;
  as?: "p" | "span";
}

export interface SkeletonProps {
  className?: string;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  fullWidth?: boolean;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export interface TableInterface extends TableProps {
  rounded?: boolean;
  bordered?: boolean;
  raised?: boolean;
  noBorder?: boolean;
  classNames?: {
    table?: string;
    container?: string;
  };
  mode?: ModeType;
}

export interface Row extends TableRowProps {
  verticalLine?: boolean;
  hoverable?: boolean;
}

export interface TableHeadProps extends THeadProps {
  tint?: boolean;
}

export interface MenuProps extends DivProps {
  children: React.ReactNode;
  mode?: "light" | "dark";
  zIndex?: zIndex;
  showDivider?: boolean;
  containerClassName?: string;
  useColorOnHover?: boolean;
}

export interface MenuItemProps extends DivProps {
  children: React.ReactNode;
  color?: ColorKey;
  disabled?: boolean;
}

export interface MenuPadProps extends DivProps {
  children: React.ReactNode;
}

export interface MenuPadHeaderProps extends DivProps {
  null?: null;
}

export interface IconBaseType {
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
  styles?: React.CSSProperties;

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
  disabled?: boolean;
}
