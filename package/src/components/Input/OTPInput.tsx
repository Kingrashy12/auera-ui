import { getDisplayName } from "@/utils/displayname";
import { ChangeEvent, FC, KeyboardEvent, useRef, useState } from "react";
import { defineClass, tw } from "stywind";

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  className?: string;
  errorMessage?: string;
  hasError?: boolean;
}

const OTPInput: FC<OTPInputProps> = ({ onComplete, length = 4, className }) => {
  // Create a state to store the OTP value
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Style for each individual input box
  const Input = defineClass(`
    w-12 h-12 p-4 rounded-lg border border-neutral-400 caret-black text-center text-lg focus:outline-none focus:border-2 shadow transition-all duration-500 focus:border-blue-500 
    appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-moz-number-spin-box]:display-none
  `);

  // Style for the container holding all input boxes
  const Container = defineClass(
    "flex items-center p-4 gap-4 bg-white rounded-lg shadow-md"
  );

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Ensure only 1 digit is entered
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join("")); // Call the callback with the complete OTP
    }
  };

  // Handle key press (e.g., Backspace)
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = ""; // Clear current input
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus(); // Move to previous input
      }
    }
  };

  return (
    <div className={tw(Container, className as string)}>
      {/* Attach the onInput event handler to each input */}
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
