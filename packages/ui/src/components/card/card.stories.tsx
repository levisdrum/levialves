import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Card } from "./card";

const playgroundSource = `<Card
  eyebrow="Design System"
  title="Flora"
  description="Token-driven architecture used across multiple products."
  action={<Button size="sm">Read case</Button>}
/>`;

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Editorial content container for cases, highlights, and summaries. The API stays intentionally small: eyebrow, title, description, and an optional action slot."
      }
    }
  },
  args: {
    eyebrow: "Design System",
    title: "Flora",
    description: "Token-driven architecture used across multiple products.",
    action: <Button size="sm">Read case</Button>
  },
  argTypes: {
    eyebrow: {
      control: "text",
      description: "Optional metadata label displayed above the title.",
      table: {
        category: "Content"
      }
    },
    title: {
      control: "text",
      description: "Main heading of the card.",
      table: {
        category: "Content"
      }
    },
    description: {
      control: "text",
      description: "Body text that summarizes the case or content block.",
      table: {
        category: "Content"
      }
    },
    action: {
      control: false,
      description: "Optional React node rendered in the action slot.",
      table: {
        category: "Composition",
        type: {
          summary: "ReactNode"
        }
      }
    }
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: "Interactive API for the base card contract."
      },
      source: {
        code: playgroundSource
      }
    }
  }
};

export const WithoutAction: Story = {
  args: {
    action: undefined
  },
  parameters: {
    docs: {
      description: {
        story: "Use the action slot only when the card needs a direct CTA. The layout remains stable without it."
      },
      source: {
        code: `<Card
  eyebrow="Case study"
  title="Documentation foundations"
  description="Reusable guidance for design, engineering, and product teams."
/>`
      }
    }
  }
};

export const InContext: Story = {
  name: "In context",
  render: () => (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "32rem" }}>
      <Card
        eyebrow="Case study"
        title="Design token adoption"
        description="Semantic tokens aligned design and engineering across multiple product teams."
        action={<Button size="sm">Open case</Button>}
      />
      <Card
        eyebrow="Documentation"
        title="Component governance"
        description="Decision rules, ownership, and versioning patterns documented in a shared surface."
        action={<Button size="sm" variant="secondary">Read guidelines</Button>}
      />
    </div>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Representative composition for editorial case listings. The card is intentionally simple so the surrounding layout owns the page rhythm."
      },
      source: {
        code: `<Card
  eyebrow="Case study"
  title="Design token adoption"
  description="Semantic tokens aligned design and engineering across multiple product teams."
  action={<Button size="sm">Open case</Button>}
/>`
      }
    }
  }
};
