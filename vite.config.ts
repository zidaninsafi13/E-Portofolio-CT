import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/E-Portofolio-CT/",
  plugins: [react(), tailwindcss()],
});
