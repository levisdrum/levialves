import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const compositionSource = `<Avatar>
  <AvatarImage src="/img/profile-linkedin.jpg" alt="Levi Alves" />
  <AvatarFallback>LA</AvatarFallback>
</Avatar>`;

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  subcomponents: {
    AvatarImage,
    AvatarFallback
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composable avatar primitive built on top of Radix Avatar. Consumers assemble the root, image, and fallback explicitly so loading and fallback behavior stays visible in code."
      }
    }
  },
  args: {
    className: ""
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional class names merged with the root avatar element.",
      table: {
        category: "Layout"
      }
    }
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/img/profile-linkedin.jpg" alt="Levi Alves" />
      <AvatarFallback>LA</AvatarFallback>
    </Avatar>
  )
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: "Base composition with image and fallback. This is the API consumers should copy into product code."
      },
      source: {
        code: compositionSource
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", gap: "1rem" }}>
      <Avatar style={{ width: "2.75rem", height: "2.75rem" }}>
        <AvatarImage src="/img/profile-linkedin.jpg" alt="Levi Alves" />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>
      <Avatar style={{ width: "4rem", height: "4rem" }}>
        <AvatarImage src="/img/profile-linkedin.jpg" alt="Levi Alves" />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>
      <Avatar style={{ width: "5.5rem", height: "5.5rem" }}>
        <AvatarImage src="/img/profile-linkedin.jpg" alt="Levi Alves" />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "The primitive accepts custom sizing from the consuming surface while preserving the same image and fallback behavior."
      },
      source: {
        code: `<Avatar style={{ width: "4rem", height: "4rem" }}>
  <AvatarImage src="/img/profile-linkedin.jpg" alt="Levi Alves" />
  <AvatarFallback>LA</AvatarFallback>
</Avatar>`
      }
    }
  }
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback delayMs={0}>DS</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Fallback-only state used when an image is not available yet or when initials are enough for the UI."
      },
      source: {
        code: `<Avatar>
  <AvatarFallback delayMs={0}>DS</AvatarFallback>
</Avatar>`
      }
    }
  }
};
