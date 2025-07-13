import { useMode, useThemeVariant } from "@/hook/use";
import { AueraElementProps } from "@/types/auera-system";
import { useProps } from "@/utils";
import { getDisplayName } from "@/utils/displayname";
import { forwardRef } from "react";
import { tw } from "stywind";

export const AueraElement = <T extends React.ElementType = "div">({
  children,
  mode,
  themeVariant: TVariant,
  ...props
}: AueraElementProps<T>) => {
  const { currentMode } = useMode(mode);
  const themeVariant = useThemeVariant(TVariant);

  const Element = props.as;

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
  const { mode, themeVariant, ...rest } = props;
  return (
    <AueraElement
      as="button"
      mode={mode}
      themeVariant={themeVariant}
      {...rest}
    />
  );
};

export const AueraDiv = forwardRef<HTMLElement, AueraElementProps<"div">>(
  (props, ref) => {
    const { mode, as, themeVariant, ...rest } = props;
    return (
      <AueraElement
        as="div"
        ref={ref}
        mode={mode}
        themeVariant={themeVariant}
        {...rest}
      />
    );
  }
);

export const AueraInput = (props: AueraElementProps<"input">) => {
  const { mode, as, themeVariant, ...rest } = props;
  return (
    <AueraElement
      as="input"
      mode={mode}
      themeVariant={themeVariant}
      {...rest}
    />
  );
};

export const AueraSpan = (props: AueraElementProps<"span">) => {
  const { mode, themeVariant, ...rest } = props;
  return (
    <AueraElement as="span" mode={mode} themeVariant={themeVariant} {...rest} />
  );
};
