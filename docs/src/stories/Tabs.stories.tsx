import type { Meta, StoryObj } from "@storybook/react";
import Tab from "@/components/.storybook/Tabs/Default";
import { Provider } from "auera-ui";

const meta = {
  component: Tab,
  title: "Components/Tabs",
  decorators: (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      type: "string",
      control: "radio",
      options: ["line", "solid"],
    },
    rounded: {
      type: "boolean",
      control: "radio",
      options: ["true", "false"],
      table: { defaultValue: { summary: "false" } },
    },
    hideScrollBar: {
      type: "boolean",
      control: "boolean",
      options: ["true", "false"],
      table: { defaultValue: { summary: "false" } },
    },
  },
  tags: ["docs"],
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "line",
    fullWidth: true,
  },
};
