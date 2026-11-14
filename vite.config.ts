import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// base "./" keeps every asset URL relative, so the site works on
// username.github.io/<repo>/, on a custom domain, or from any sub-folder.
export default defineConfig({
  base: "./",
  server: { host: "::", port: 8080 },
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          r3f: ["@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
});
