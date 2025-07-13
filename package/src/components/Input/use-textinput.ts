import { AueraDiv, AueraInput } from "@/core/AueraElement";
import { useMemo } from "react";
import { createStyle, tw } from "stywind";
import {
  input,
  input_interface,
  TextInput_IVariants,
} from "./textinput-variants";
import { useInputRules } from "@/hook/useStyleRules";
import { useMode } from "@/hook/use";
import { DesignVariant, ModeType } from "@/types/auera-system";

const useComputeInput = (
  props: TextInput_IVariants & {
    inputClass?: string;
    id: string;
    mode: ModeType;
  }
) => {
  const { className, inputClass, variant, radius, disabled, design, mode, id } =
    props;

  const StyledInput = createStyle(AueraInput);
  const StyledInterface = createStyle(AueraDiv);

  const { currentMode } = useMode(mode);

  const {
    appliedVariant,
    appliedClassName,
    appliedRadius,
    appliedDesign,
    appliedInputClassName,
  } = useInputRules(
    id,
    className,
    variant as string,
    design as DesignVariant,
    currentMode
  );

  const inputStyles = useMemo(
    () => tw(input(), appliedInputClassName?.value, inputClass),
    [inputClass, appliedInputClassName?.value]
  );
  const interfaceStyles = useMemo(
    () =>
      tw(
        input_interface({
          variant: appliedVariant?.value || variant,
          disabled,
          radius: appliedRadius?.value || radius,
          design: appliedDesign?.value || design,
        }),
        appliedClassName,
        className
      ),
    [
      variant,
      disabled,
      radius,
      appliedClassName,
      className,
      appliedDesign?.value,
      appliedVariant?.value,
      appliedRadius?.value,
    ]
  );

  return {
    Input: useMemo(() => StyledInput.classname(inputStyles), [inputStyles]),
    InputInterface: useMemo(
      () => StyledInterface.classname(interfaceStyles),
      [interfaceStyles]
    ),
  };
};

export { useComputeInput };
