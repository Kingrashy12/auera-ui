import type { StoryObj, Meta } from "@storybook/react";
import { Box } from "auera-ui";

const meta = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
    direction: {
      type: "string",
      options: ["row", "column"],
      control: "radio",
      table: { defaultValue: { summary: "row" } },
    },
    wrap: {
      type: "boolean",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h1>This is a Box, </h1>
        <h1>Content</h1>
      </>
    ),
  },
};
