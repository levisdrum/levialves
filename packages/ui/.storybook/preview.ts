import type { Preview } from "@storybook/react";
import "@levi/tokens/styles.css";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "error"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
