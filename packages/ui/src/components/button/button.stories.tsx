import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "secondary", "subtle"]
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Primary action component with `variant`, `size`, and `asChild` support."
      }
    }
  },
  args: {
    children: "Action"
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Subtle: Story = {
  args: {
    variant: "subtle"
  }
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Primary call to action"
  }
};
