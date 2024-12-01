import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

export default defineConfig({
  optimizeDeps: {
    needsInterop: ["@module-federation/runtime"],
  },
  plugins: [
    react(),
    federation({
      name: "host",
      manifest: true,
      remotes: {
        board: {
          type: "module",
          name: "board",
          entry:
            process.env.BOARD_URL ?? "http://localhost:5001/remoteEntry.js",
        },
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
        "react-router-dom": {
          requiredVersion: dependencies["react-router-dom"],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  build: {
    target: "chrome89",
  },
});
