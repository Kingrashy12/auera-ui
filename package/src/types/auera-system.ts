import React from "react";
import { colors } from "../utils";
import { HTMLMotionProps } from "motion/react";
import { VariantProps } from "class-variance-authority";

export type DesignFlavour = "corporate" | "frost" | "neumorphic";
// | "material"
// | "cream";

export type SchemeVariant = "primary" | "success" | "danger" | "warning";
export type ButtonVariant =
  | "solid"
  | "flat"
  | "outline"
  | "light"
  | "ghost"
  | "unstyled";

export type ProviderProps = {
  flavour?: DesignFlavour;
  mode?: "light" | "dark";
  children: React.ReactNode;
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
    hidden?: boolean;
    disabled?: boolean;
  };

export type AueraElementPropsWithMotion<T extends keyof HTMLElements> =
  HTMLMotionProps<T> & {
    tag?: keyof HTMLElements;
    mode?: ModeType;
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
