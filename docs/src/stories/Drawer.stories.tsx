import { Drawer } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "auera-ui";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  parameters: { layout: "centered" },
  argTypes: {
    position: {
      type: "string",
      control: "radio",
      options: ["left", "right"],
      table: { defaultValue: { summary: "right" } },
    },
    type: {
      type: "string",
      control: "radio",
      options: ["sticky", "float"],
      table: { defaultValue: { summary: "sticky" } },
    },
  },
  tags: ["docs"],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  //@ts-expect-error Can't flag on test
  args: {},
};

export const Sticky_Left: Story = {
  //@ts-expect-error Can't flag on test
  args: {
    position: "left",
  },
};
