import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensures Vite listens on all network interfaces
    port: 3000, // You can specify a port if needed, 3000 is a common default
  },
});
