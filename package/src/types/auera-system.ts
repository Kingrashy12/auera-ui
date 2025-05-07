import React from "react";
import { colors } from "../utils";
import { HTMLMotionProps } from "motion/react";
import { VariantProps } from "class-variance-authority";
import { zIndex } from "./keys";

export type DesignVariant = "corporate" | "frost" | "neobrutalism";
// | "material"
// | "cream";

export type SchemeVariant = "primary" | "success" | "danger" | "warning";
export type ButtonVariant = "solid" | "flat" | "outline" | "ghost" | "unstyled";
export type Radius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface ApplyBy {
  Button:
    | "all"
    | "id"
    | "class"
    | "variant"
    | "colorScheme"
    | "design"
    | "mode";
  Card: "all" | "variant" | "id" | "class" | "design" | "mode";
  Input: "all" | "variant" | "id" | "class" | "design" | "mode" | "radius";
  Badge: "all" | "colorScheme" | "variant" | "id" | "mode";
  Fab:
    | "all"
    | "design"
    | "id"
    | "variant"
    | "className"
    | "mode"
    | "colorScheme";
  IconButton: "all" | "variant" | "id" | "class" | "design" | "mode" | "radius";
  Tabs: "all" | "variant" | "id" | "class" | "mode";
  TabsContainer: "all" | "class" | "id";
  TabHandle: "all" | "variant" | "id" | "class" | "mode";
  OTPInput: "all" | "id" | "class" | "mode";
}

/**
 * Represents a conditional style rule for a component.
 *
 * @template A - The type of the attribute used to determine how the rule should be applied (e.g., "id", "variant").
 * @template V - The type of the value to be applied (e.g., a className string, a style object, etc.).
 */
export type StyleRule<A, V> = {
  /**
   * Defines the attribute by which this rule is applied (e.g., "id", "variant").
   */
  applyBy: A;

  /**
   * The value to be applied if the rule conditions are met.
   */
  value: V;

  /**
   * An optional condition to further narrow when this rule applies.
   * For example: `{ attr: "id", is: "primary" }` will apply this rule
   * only if the element's "id" matches "primary".
   */
  $where?: {
    attr: A;
    is: string;
  };
};

export type RuleKey<A, Value> = Record<string, StyleRule<A, Value>>;

export type ColorSchemes =
  | "blue"
  | "red"
  | "yellow"
  | "green"
  | "neutral"
  | "thick"
  | "teal"
  | "gray";

export type ProviderProps = {
  design?: DesignVariant;
  mode?: "light" | "dark";
  children: React.ReactNode;
  styleRules?: GlobalUI["styleRules"];
  themeVariant?: ThemeVariant;
};

type ContextAction = "create" | "use";

export type ContextType = {
  [key in ContextAction]: (value: unknown) => void;
};

export type ModeType = "light" | "dark";

type Colors = keyof typeof colors;

type ColorsPair = keyof (typeof colors)[Colors];

type Color = `${Colors}-${ColorsPair}`;

export type ColorPair = Color | "black" | "white";

export type ColorKey =
  | "default"
  | "danger"
  | "success"
  | "primary"
  | "secondary"
  | "tertiary"
  | "neutral"
  | "warning"
  | "error"
  | "info"
  | "black"
  | "white";

export type DefaultVariantsProp = {
  className?: string;
};

export type VProps<T extends (...args: any) => any> = VariantProps<T> &
  DefaultVariantsProp;

export type ModalPanelSize = "auto" | "sm" | "md" | "lg" | "xl" | "full";
export type TransitionType = "walkIn" | "dropIn" | "slideIn";
export type Trigger = "modal" | "drawer";

export type AueraElementProps<T extends keyof JSX.IntrinsicElements> =
  React.ComponentPropsWithRef<T> & {
    tag?: keyof JSX.IntrinsicElements;
    mode?: ModeType;
    themeVariant?: ThemeVariant;
    hidden?: boolean;
    disabled?: boolean;
  };

export type AueraElementPropsWithMotion<T extends keyof HTMLElements> =
  HTMLMotionProps<T> & {
    tag?: keyof HTMLElements;
    mode?: ModeType;
    themeVariant?: ThemeVariant;
    hidden?: boolean;
  };

export interface HTMLElements {
  a: HTMLAnchorElement;
  abbr: HTMLElement;
  address: HTMLElement;
  area: HTMLAreaElement;
  article: HTMLElement;
  aside: HTMLElement;
  audio: HTMLAudioElement;
  b: HTMLElement;
  base: HTMLBaseElement;
  bdi: HTMLElement;
  bdo: HTMLElement;
  big: HTMLElement;
  blockquote: HTMLQuoteElement;
  body: HTMLBodyElement;
  br: HTMLBRElement;
  button: HTMLButtonElement;
  canvas: HTMLCanvasElement;
  caption: HTMLElement;
  center: HTMLElement;
  cite: HTMLElement;
  code: HTMLElement;
  col: HTMLTableColElement;
  colgroup: HTMLTableColElement;
  data: HTMLDataElement;
  datalist: HTMLDataListElement;
  dd: HTMLElement;
  del: HTMLModElement;
  details: HTMLDetailsElement;
  dfn: HTMLElement;
  dialog: HTMLDialogElement;
  div: HTMLDivElement;
  dl: HTMLDListElement;
  dt: HTMLElement;
  em: HTMLElement;
  embed: HTMLEmbedElement;
  fieldset: HTMLFieldSetElement;
  figcaption: HTMLElement;
  figure: HTMLElement;
  footer: HTMLElement;
  form: HTMLFormElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  head: HTMLHeadElement;
  header: HTMLElement;
  hgroup: HTMLElement;
  hr: HTMLHRElement;
  html: HTMLHtmlElement;
  i: HTMLElement;
  iframe: HTMLIFrameElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  ins: HTMLModElement;
  kbd: HTMLElement;
  keygen: HTMLElement;
  label: HTMLLabelElement;
  legend: HTMLLegendElement;
  li: HTMLLIElement;
  link: HTMLLinkElement;
  main: HTMLElement;
  map: HTMLMapElement;
  mark: HTMLElement;
  menu: HTMLElement;
  menuitem: HTMLElement;
  meta: HTMLMetaElement;
  meter: HTMLMeterElement;
  nav: HTMLElement;
  noindex: HTMLElement;
  noscript: HTMLElement;
  object: HTMLObjectElement;
  ol: HTMLOListElement;
  optgroup: HTMLOptGroupElement;
  option: HTMLOptionElement;
  output: HTMLOutputElement;
  p: HTMLParagraphElement;
  param: HTMLParamElement;
  picture: HTMLElement;
  pre: HTMLPreElement;
  progress: HTMLProgressElement;
  q: HTMLQuoteElement;
  rp: HTMLElement;
  rt: HTMLElement;
  ruby: HTMLElement;
  s: HTMLElement;
  samp: HTMLElement;
  search: HTMLElement;
  slot: HTMLSlotElement;
  script: HTMLScriptElement;
  section: HTMLElement;
  select: HTMLSelectElement;
  small: HTMLElement;
  source: HTMLSourceElement;
  span: HTMLSpanElement;
  strong: HTMLElement;
  style: HTMLStyleElement;
  sub: HTMLElement;
  summary: HTMLElement;
  sup: HTMLElement;
  table: HTMLTableElement;
  template: HTMLTemplateElement;
  tbody: HTMLTableSectionElement;
  td: HTMLTableDataCellElement;
  textarea: HTMLTextAreaElement;
  tfoot: HTMLTableSectionElement;
  th: HTMLTableHeaderCellElement;
  thead: HTMLTableSectionElement;
  time: HTMLTimeElement;
  title: HTMLTitleElement;
  tr: HTMLTableRowElement;
  track: HTMLTrackElement;
  u: HTMLElement;
  ul: HTMLUListElement;
  var: HTMLElement;
  video: HTMLVideoElement;
  wbr: HTMLElement;
  webview: HTMLWebViewElement;
}

export interface GlobalUI {
  /**
   * A map of component-specific style rules.
   * Each key represents a component and its associated conditional style rules.
   */
  styleRules?: {
    button?: {
      variant?: StyleRule<ApplyBy["Button"], ButtonVariant>[];
      radius?: StyleRule<ApplyBy["Button"], Radius>[];
      className?: StyleRule<ApplyBy["Button"], string>[];
      size?: StyleRule<ApplyBy["Button"], Sizes>[];
      colorScheme?: StyleRule<ApplyBy["Button"], SchemeVariant>[];
      design?: StyleRule<ApplyBy["Button"], DesignVariant>[];
      mode?: StyleRule<ApplyBy["Button"], ModeType>[];
    };
    card?: {
      variant?: StyleRule<ApplyBy["Card"], "flat" | "raised">[];
      design?: StyleRule<ApplyBy["Card"], DesignVariant>[];
      className?: StyleRule<ApplyBy["Card"], string>[];
      mode?: StyleRule<ApplyBy["Card"], ModeType>[];
    };
    input?: {
      variant?: StyleRule<
        ApplyBy["Input"],
        "solid" | "outline" | "ghost" | "soft"
      >[];
      design?: StyleRule<ApplyBy["Input"], DesignVariant>[];
      className?: StyleRule<ApplyBy["Input"], string>[];
      inputClassName?: StyleRule<ApplyBy["Input"], string>[];
      mode?: StyleRule<ApplyBy["Input"], ModeType>[];
      radius?: StyleRule<
        ApplyBy["Input"],
        "none" | "sm" | "md" | "lg" | "xl" | "full"
      >[];
    };
    badge?: {
      variant?: StyleRule<ApplyBy["Badge"], "solid" | "outline" | "soft">[];
      className?: StyleRule<ApplyBy["Badge"], string>[];
      mode?: StyleRule<ApplyBy["Badge"], ModeType>[];
      colorScheme?: StyleRule<
        ApplyBy["Badge"],
        | "blue"
        | "red"
        | "yellow"
        | "green"
        | "neutral"
        | "thick"
        | "teal"
        | "gray"
      >[];
    };
    fab?: {
      variant?: StyleRule<ApplyBy["Fab"], "solid" | "outline" | "soft">[];
      color?: StyleRule<
        ApplyBy["Fab"],
        | "blue"
        | "red"
        | "yellow"
        | "green"
        | "neutral"
        | "thick"
        | "teal"
        | "gray"
      >[];
      mode?: StyleRule<ApplyBy["Fab"], ModeType>[];
      className?: StyleRule<ApplyBy["Fab"], string>[];
      type?: StyleRule<
        ApplyBy["Fab"],
        "fixed" | "sticky" | "relative" | "absolute" | "static"
      >[];
      zIndex?: StyleRule<ApplyBy["Fab"], zIndex>[];
      design?: StyleRule<ApplyBy["Fab"], DesignVariant>[];
    };
    iconbutton?: {
      mode?: StyleRule<ApplyBy["IconButton"], ModeType>[];
      className?: StyleRule<ApplyBy["IconButton"], string>[];
      design?: StyleRule<ApplyBy["IconButton"], DesignVariant>[];
      radius?: StyleRule<
        ApplyBy["IconButton"],
        "none" | "sm" | "md" | "lg" | "xl" | "full" | "2xl"
      >[];
      variant?: StyleRule<
        ApplyBy["IconButton"],
        "subtle" | "outline" | "ghost"
      >[];
    };
    tabs?: {
      mode?: StyleRule<ApplyBy["Tabs"], ModeType>[];
      className?: StyleRule<ApplyBy["Tabs"], string>[];
      variant?: StyleRule<ApplyBy["Tabs"], "solid" | "line">[];
      rounded?: StyleRule<ApplyBy["Tabs"], boolean>[];
    };
    tabsContainer?: {
      className?: StyleRule<ApplyBy["TabsContainer"], string>[];
    };
    tabHandle?: {
      className?: StyleRule<ApplyBy["TabHandle"], string>[];
      variant?: StyleRule<ApplyBy["TabHandle"], "solid" | "line">[];
      rounded?: StyleRule<ApplyBy["TabHandle"], boolean>[];
    };
    otpInput?: {
      interface?: {
        className?: StyleRule<ApplyBy["OTPInput"], string>[];
      };
      input?: {
        className?: StyleRule<ApplyBy["OTPInput"], string>[];
        radius?: StyleRule<ApplyBy["OTPInput"], "md" | "lg" | "xl" | "full">[];
        mode?: StyleRule<ApplyBy["OTPInput"], ModeType>[];
      };
    };
  };
}

export type ThemeVariant = "corporate" | "obsidian";

export type ThemeColors = {
  background: string;
  sidebar: string;
  modal: string;
  border: string;
  hover: string;
  input: string;
  shadow: string;
  text: string;
  content: string;
  bg_btn: string;
  hover_btn: string;
  border_btn: string;
  shadow_btn: string;
};

export type ThemePaletteSet<T extends ModeType, K extends ThemeVariant, V> = {
  [key in T]: { [variant in K]: V };
};

export interface InjectThemeProps {
  variant: ThemeVariant;
  mode: ModeType;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  mode?: ModeType;
  themeVariant: ThemeVariant;
}
