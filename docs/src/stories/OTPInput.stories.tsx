import OTPInput from "@/components/lib/OTPInput";
import type { StoryObj, Meta } from "@storybook/react";
// import { OTPInput } from "auera-ui";

const meta = {
  component: OTPInput,
  title: "Components/OTPInput",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    length: {
      control: "number",
      type: "number",
    },
    inputClass: {
      control: "text",
      type: "string",
    },
    radius: {
      control: "radio",
      type: "string",
      options: ["md", "lg", "xl", "full"],
    },
    error: {
      type: "boolean",
      control: "radio",
      options: ["true", "false"],
    },
  },
  tags: ["docs"],
} satisfies Meta<typeof OTPInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OTP: Story = {
  args: {
    length: 6,
    onComplete(otp) {
      console.log(otp);
    },
  },
};
