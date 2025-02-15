import { AueraDiv, AueraInput } from "@/core/AueraElement";
import { useMemo } from "react";
import { createStyle, tw } from "stywind";
import {
  input,
  input_interface,
  TextInput_IVariants,
} from "./textinput-variants";

const useComputeInput = (
  props: TextInput_IVariants & { inputClass?: string }
) => {
  const { className, inputClass, variant, radius, disabled } = props;

  const StyledInput = createStyle(AueraInput);
  const StyledInterface = createStyle(AueraDiv);

  const inputStyles = useMemo(() => tw(input(), inputClass), [inputClass]);
  const interfaceStyles = useMemo(
    () => tw(input_interface({ variant, disabled, radius }), className),
    [variant, disabled, radius, className]
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
