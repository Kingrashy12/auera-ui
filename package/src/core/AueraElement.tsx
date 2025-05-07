import { useMode, useThemeVariant } from "@/hook/use";
import { AueraElementProps } from "@/types/auera-system";
import { useProps } from "@/utils";
import { getDisplayName } from "@/utils/displayname";
import { tw } from "stywind";

export const AueraElement = <T extends keyof JSX.IntrinsicElements>({
  tag: Element = "div",
  children,
  mode,
  themeVariant: TVariant,
  ...props
}: AueraElementProps<T>) => {
  const { currentMode } = useMode(mode);
  const themeVariant = useThemeVariant(TVariant);

  const Props = useProps(props, Element);

  return (
    <Element
      data-theme={currentMode}
      data-theme-variant={themeVariant}
      className={tw(props.hidden && "hidden", props.className)}
      {...Props}
    >
      {children}
    </Element>
  );
};

AueraElement.displayName = getDisplayName("Element");

export const AueraButton = (props: AueraElementProps<"button">) => {
  const { tag, mode, themeVariant, ...rest } = props;
  return (
    <AueraElement
      tag="button"
      mode={mode}
      themeVariant={themeVariant}
      {...rest}
    />
  );
};

export const AueraDiv = (props: AueraElementProps<"div">) => {
  const { tag, mode, themeVariant, ...rest } = props;
  return (
    <AueraElement tag="div" mode={mode} themeVariant={themeVariant} {...rest} />
  );
};

export const AueraInput = (props: AueraElementProps<"input">) => {
  const { tag, mode, themeVariant, ...rest } = props;
  return (
    <AueraElement
      tag="input"
      mode={mode}
      themeVariant={themeVariant}
      {...rest}
    />
  );
};

export const AueraSpan = (props: AueraElementProps<"span">) => {
  const { tag, mode, themeVariant, ...rest } = props;
  return (
    <AueraElement
      tag="span"
      mode={mode}
      themeVariant={themeVariant}
      {...rest}
    />
  );
};
