import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const playgroundSource = `<Button variant="default" size="md">
  Save changes
</Button>`;

const asChildSource = `<Button asChild variant="secondary" size="md">
  <a href="https://github.com/levisdrum" target="_blank" rel="noreferrer">
    Open GitHub
  </a>
</Button>`;

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Action primitive for the portfolio and future products. Supports visual variants, three sizes, and `asChild` composition when the semantic element must be provided by the consumer."
      }
    }
  },
  args: {
    children: "Save changes",
    variant: "default",
    size: "md",
    asChild: false
  },
  argTypes: {
    children: {
      control: "text",
      description: "Visible label or nested content rendered inside the button.",
      table: {
        category: "Content"
      }
    },
    variant: {
      control: "inline-radio",
      options: ["default", "secondary", "subtle"],
      description: "Visual treatment for emphasis level.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Vertical rhythm and horizontal padding.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    asChild: {
      control: "boolean",
      description: "Renders the styles on the child element through Radix Slot.",
      table: {
        category: "Composition",
        defaultValue: {
          summary: "false"
        }
      }
    },
    className: {
      control: "text",
      description: "Additional class names merged with the design-system styles.",
      table: {
        category: "Layout"
      }
    },
    onClick: {
      action: "clicked",
      table: {
        category: "Events"
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: "Interactive playground for the public API. Use Controls to inspect the final rendered DOM behavior."
      },
      source: {
        code: playgroundSource
      }
    }
  }
};

export const VariantMatrix: Story = {
  name: "Variant matrix",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Button variant="default">Primary action</Button>
      <Button variant="secondary">Secondary action</Button>
      <Button variant="subtle">Low emphasis</Button>
    </div>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Compare the three supported emphasis levels side by side."
      },
      source: {
        code: `<Button variant="default">Primary action</Button>
<Button variant="secondary">Secondary action</Button>
<Button variant="subtle">Low emphasis</Button>`
      }
    }
  }
};

export const SizeMatrix: Story = {
  name: "Size matrix",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Use `sm`, `md`, and `lg` to match density and hierarchy of the consuming surface."
      },
      source: {
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`
      }
    }
  }
};

export const AsChildLink: Story = {
  name: "As child link",
  render: () => (
    <Button asChild variant="secondary" size="md">
      <a href="https://github.com/levisdrum" target="_blank" rel="noreferrer">
        Open GitHub
      </a>
    </Button>
  ),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Use `asChild` when you need anchor semantics but still want the same design-system styling contract."
      },
      source: {
        code: asChildSource
      }
    }
  }
};
