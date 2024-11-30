import { Backdrop } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "auera-ui";

const meta = {
  title: "Components/Backdrop",
  component: Backdrop,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    intensity: {
      type: "string",
      control: "radio",
      options: ["none", "sm", "md", "lg", "xl"],
      table: { defaultValue: { summary: "sm" } },
    },
    mode: {
      type: "string",
      control: "radio",
      options: ["light", "dark"],
      table: { defaultValue: { summary: "light" } },
    },
  },
  args: {},
  tags: ["docs"],
} satisfies Meta<typeof Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  //@ts-expect-error Can't flag on test
  args: {
    mode: "dark",
  },
};
