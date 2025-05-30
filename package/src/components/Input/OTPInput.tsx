import { getDisplayName } from "@/utils/displayname";
import { ChangeEvent, FC, KeyboardEvent, useRef, useState } from "react";
import { useComputeInput } from "./otp-input";
import { useMode } from "@/hook/use";
import { OTPInputProps } from "../../types/auera-ui";

const OTPInput: FC<OTPInputProps> = ({
  onComplete,
  length = 4,
  classNames,
  radius,
  error,
  mode,
  id,
}) => {
  const { currentMode } = useMode(mode);
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { Input, Interface, InputMode } = useComputeInput({
    error,
    className: classNames?.interface,
    radius,
    inputClass: classNames?.input,
    id,
    mode: currentMode,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <Interface data-theme={currentMode}>
      {otp.map((digit, index) => (
        <Input
          key={index}
          mode={InputMode || currentMode}
          // @ts-ignore
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          placeholder="⚬"
        />
      ))}
    </Interface>
  );
};

export default OTPInput;
OTPInput.displayName = getDisplayName("OTPInput");
