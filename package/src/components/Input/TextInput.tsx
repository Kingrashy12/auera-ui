import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  for: "password" | "email" | "number";
  variant?: "solid" | "outline" | "ghost";
}

const TextInput = () => {
  return <div>TextInput</div>;
};

export default TextInput;
