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
