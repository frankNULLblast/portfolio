import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// GitHub Pages project site is served from a subpath
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio/",
})
