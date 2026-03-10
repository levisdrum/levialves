import { createElement } from "react";
import type { Preview } from "@storybook/react";
import "@levi/tokens/styles.css";
import "../src/styles.css";

const preview: Preview = {
  decorators: [
    (Story) =>
      createElement(
        "div",
        {
          style: {
            minHeight: "100vh",
            padding: "1.5rem",
            background: "var(--color-background)",
            color: "var(--color-foreground)"
          }
        },
        createElement(Story)
      )
  ],
  parameters: {
    a11y: {
      test: "error"
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      source: {
        state: "shown"
      }
    },
    layout: "padded"
  }
};

export default preview;
