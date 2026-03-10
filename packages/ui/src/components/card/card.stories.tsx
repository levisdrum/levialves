import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      control: "text"
    },
    title: {
      control: "text"
    },
    description: {
      control: "text"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Content container for project/case highlights with optional call-to-action."
      }
    }
  },
  args: {
    eyebrow: "Design System",
    title: "Flora",
    description: "Token-driven architecture used across multiple products.",
    action: <Button size="sm">Read case</Button>
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithoutAction: Story = {
  args: {
    action: undefined
  }
};
