import { defineClass, tw } from "@/utils";
import { getDisplayName } from "@/utils/displayname";
import { ChangeEvent, FC, KeyboardEvent, useRef, useState } from "react";

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  className?: string;
  errorMessage?: string;
  hasError?: boolean;
}

const OTPInput: FC<OTPInputProps> = ({ onComplete, length = 4, className }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const Input = defineClass(`
    w-12 h-12 p-4 rounded-lg border border-neutral-400 caret-black text-center \
    text-lg focus:outline-none focus:border-2 shadow transition-all duration-500 focus:border-blue-500 
    appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-moz-number-spin-box]:display-none
  `);

  const Container = defineClass(
    "flex items-center p-4 gap-4 bg-white rounded-lg shadow-md"
  );

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
      onComplete(newOtp.join(""));
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
    <div className={tw(Container, className as string)}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          placeholder="⚬"
          className={Input}
        />
      ))}
    </div>
  );
};

export default OTPInput;
OTPInput.displayName = getDisplayName("OTPInput");
