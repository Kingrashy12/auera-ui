import { useMode } from "@/hook/use";
import { AueraElementProps } from "@/types/auera-system";
import { useProps } from "@/utils";
import { getDisplayName } from "@/utils/displayname";
import { tw } from "stywind";

export const AueraElement = <T extends keyof JSX.IntrinsicElements>({
  tag: Element = "div",
  children,
  mode,
  ...props
}: AueraElementProps<T>) => {
  const { currentMode } = useMode(mode);

  const Props = useProps(props, Element);

  return (
    <Element
      data-theme={currentMode}
      className={tw(props.hidden && "hidden", props.className)}
      {...Props}
    >
      {children}
    </Element>
  );
};

AueraElement.displayName = getDisplayName("Element");

export const AueraButton = (props: AueraElementProps<"button">) => {
  const { tag, mode, ...rest } = props;
  return <AueraElement tag="button" mode={mode} {...rest} />;
};
