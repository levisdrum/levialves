import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  staticDirs: [{ from: "../../../apps/web/public", to: "/" }],
  addons: ["@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      dedupe: ["react", "react-dom"]
    },
    optimizeDeps: {
      ...config.optimizeDeps,
      include: [
        ...(config.optimizeDeps?.include ?? []),
        "react",
        "react-dom",
        "react-dom/client"
      ]
    }
  })
};

export default config;
