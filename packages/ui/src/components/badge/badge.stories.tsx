import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const playgroundSource = `<Badge variant="default">Design Tokens</Badge>`;

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Small metadata label used for taxonomy, status, and lightweight categorization. Keep content short so the badge stays scannable."
      }
    }
  },
  args: {
    children: "Design Tokens",
    variant: "default"
  },
  argTypes: {
    children: {
      control: "text",
      description: "Short label rendered inside the badge.",
      table: {
        category: "Content"
      }
    },
    variant: {
      control: "inline-radio",
      options: ["default", "subtle"],
      description: "Chooses the contrast level for the label.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    className: {
      control: "text",
      description: "Additional class names merged with the base badge styles.",
      table: {
        category: "Layout"
      }
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: "Interactive badge preview with the public API exposed through Controls."
      },
      source: {
        code: playgroundSource
      }
    }
  }
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Badge variant="default">Accessibility</Badge>
      <Badge variant="subtle">Documentation</Badge>
    </div>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "The default variant is more prominent. `subtle` works better inside dense metadata groups."
      },
      source: {
        code: `<Badge variant="default">Accessibility</Badge>
<Badge variant="subtle">Documentation</Badge>`
      }
    }
  }
};

export const TaxonomyGroup: Story = {
  name: "Taxonomy group",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Badge>Tokens</Badge>
      <Badge>Accessibility</Badge>
      <Badge variant="subtle">Governance</Badge>
      <Badge variant="subtle">Documentation</Badge>
    </div>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Typical use in case-study cards and technology groups, where multiple tags need to stay visually compact."
      },
      source: {
        code: `<Badge>Tokens</Badge>
<Badge>Accessibility</Badge>
<Badge variant="subtle">Governance</Badge>
<Badge variant="subtle">Documentation</Badge>`
      }
    }
  }
};
