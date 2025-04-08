import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    fs: {
      strict: false,
    },
  },
  plugins: [react()],
  assetsInclude: ["**/*.json"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));