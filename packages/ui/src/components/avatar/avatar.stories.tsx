import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Profile image primitive based on Radix Avatar, aligned with shadcn/ui composition."
      }
    }
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/img/profile-linkedin.jpg" alt="Levi Alves" />
      <AvatarFallback>LA</AvatarFallback>
    </Avatar>
  )
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    className: "DSLEVIS-avatar-story--lg"
  }
};

export const FallbackOnly: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>DS</AvatarFallback>
    </Avatar>
  )
};
