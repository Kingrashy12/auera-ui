import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, Provider } from "auera-ui";

const meta = {
  title: "Components/Button",
  component: Button,
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
  tags: ["docs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outline", "ghost", "light", "flat"],
      table: { defaultValue: { summary: "solid" } },
      type: "string",
    },
    colorScheme: {
      control: "radio",
      options: ["primary", "danger", "warning", "success"],
      table: { defaultValue: { summary: "primary" } },
      type: "string",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg", "xl"],
      table: { defaultValue: { summary: "md" } },
      type: "string",
    },
    radius: {
      control: "radio",
      options: ["none", "sm", "md", "lg", "xl", "full"],
      table: { defaultValue: { summary: "sm" } },
      type: "string",
    },
    design: {
      control: "radio",
      options: ["corporate", "frost", "neumorphic"],
      table: { defaultValue: { summary: "corporate" } },
      type: "string",
    },
    fullWidth: {
      control: "radio",
      options: ["true", "false"],
      type: "boolean",
    },
    mode: {
      control: "radio",
      options: ["light", "dark"],
      type: "string",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "Button",
  },
};
export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Loading: Story = {
  args: {
    children: "isLoading",
    isLoading: true,
  },
};

export const Neumorphic: Story = {
  args: {
    children: "Neobrutalism",
    design: "neobrutalism",
  },
};
