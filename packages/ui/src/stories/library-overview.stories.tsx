import type { Meta, StoryObj } from "@storybook/react";

const installSource = `import "@levi/tokens/styles.css";
import "@levi/ui/styles.css";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
} from "@levi/ui";`;

const structureSource = `packages/
  tokens/
    src/styles.css        # design tokens globais
  ui/
    src/components/
      button/
      badge/
      card/
      avatar/
apps/
  web/
    src/                  # portfolio consumindo a lib`;

const meta = {
  title: "Getting Started/Library Overview",
  tags: ["autodocs"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        component:
          "High-level map of the design system workspace. This page explains what the library exports, how tokens are consumed, and where the portfolio app uses the shared UI package."
      },
      source: {
        code: installSource
      }
    }
  },
  render: () => (
    <div style={{ display: "grid", gap: "1.5rem", maxWidth: "72rem" }}>
      <section style={{ display: "grid", gap: "0.75rem" }}>
        <p style={{ margin: 0, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.65 }}>
          Package API
        </p>
        <h2 style={{ margin: 0, fontSize: "2rem", lineHeight: 1 }}>What lives inside `@levi/ui`</h2>
        <p style={{ margin: 0, maxWidth: "52rem", lineHeight: 1.7, opacity: 0.82 }}>
          The workspace is split into tokens, UI primitives, and the portfolio app. Storybook documents the shared UI
          package as the public API used by the app.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem" }}>
        {[
          {
            title: "Button",
            text: "Action primitive with variant, size, and asChild composition."
          },
          {
            title: "Badge",
            text: "Small metadata label for taxonomy, status, and categorization."
          },
          {
            title: "Card",
            text: "Editorial container for case summaries and content blocks."
          },
          {
            title: "Avatar",
            text: "Composable profile primitive built with Radix Avatar."
          }
        ].map((item) => (
          <article
            key={item.title}
            style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1rem", padding: "1rem 1.1rem" }}
          >
            <h3 style={{ margin: 0, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.title}</h3>
            <p style={{ margin: "0.65rem 0 0", lineHeight: 1.6, opacity: 0.8 }}>{item.text}</p>
          </article>
        ))}
      </section>

      <section style={{ display: "grid", gap: "1rem" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Import surface</h3>
          <p style={{ margin: "0.5rem 0 0", lineHeight: 1.6, opacity: 0.8 }}>
            Tokens and component styles are imported explicitly. This keeps the app aware of the design system layers it is
            consuming.
          </p>
        </div>
        <pre
          style={{
            margin: 0,
            padding: "1rem 1.1rem",
            overflowX: "auto",
            borderRadius: "1rem",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)"
          }}
        >
          <code>{installSource}</code>
        </pre>
      </section>

      <section style={{ display: "grid", gap: "1rem" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Workspace structure</h3>
          <p style={{ margin: "0.5rem 0 0", lineHeight: 1.6, opacity: 0.8 }}>
            Each component folder in `packages/ui` owns its implementation, types, tests, and stories. The portfolio app
            consumes this package instead of recreating primitives inline.
          </p>
        </div>
        <pre
          style={{
            margin: 0,
            padding: "1rem 1.1rem",
            overflowX: "auto",
            borderRadius: "1rem",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)"
          }}
        >
          <code>{structureSource}</code>
        </pre>
      </section>
    </div>
  )
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
