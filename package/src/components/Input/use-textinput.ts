import { AueraDiv, AueraInput } from "@/core/AueraElement";
import { useMemo } from "react";
import { createStyle } from "stywind";
import {
  input,
  input_interface,
  TextInput_IVariants,
} from "./textinput-variants";

const useComputeInput = (
  props: TextInput_IVariants & { inputClass?: string }
) => {
  const { className, inputClass, variant, radius, disabled } = props;
  const Input = useMemo(
    () => createStyle(AueraInput).classname(input({ className: inputClass })),
    [inputClass]
  );

  const InputInterface = useMemo(
    () =>
      createStyle(AueraDiv).classname(
        input_interface({ variant, disabled, radius, className })
      ),
    [variant, disabled, radius, className]
  );

  return { Input, InputInterface };
};

export { useComputeInput };
