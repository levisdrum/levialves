import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolveBasePath = () => {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }

  if (process.env.GITHUB_PAGES === "true") {
    const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
    return repository ? `/${repository}/` : "/";
  }

  return "/";
};

export default defineConfig({
  plugins: [react()],
  base: resolveBasePath()
});
