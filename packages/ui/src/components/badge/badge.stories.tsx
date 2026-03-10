import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "subtle"]
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Compact status/label component for metadata and taxonomy."
      }
    }
  },
  args: {
    children: "Design Tokens"
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Subtle: Story = {
  args: {
    variant: "subtle"
  }
};

export const Taxonomy: Story = {
  args: {
    children: "Accessibility",
    variant: "default"
  }
};
