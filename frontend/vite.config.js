// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

// Unique id per build → puts files under /assets/<BUILD_ID>/...
const buildId =
  process.env.BUILD_ID ||
  (process.env.GITHUB_SHA ? process.env.GITHUB_SHA.slice(0, 7) : Date.now().toString())

export default defineConfig({
  base: '/',                       // serve from domain root
  plugins: [react()],
  define: {
    // optional: readable in app: import.meta.env.BUILD_ID
    'import.meta.env.BUILD_ID': JSON.stringify(buildId),
  },
  css: { postcss: { plugins: [tailwind(), autoprefixer()] } },
  build: {
    assetsDir: `assets/${buildId}`, // <-- versioned assets folder
  },
  server: { host: true, port: 5173 },
})
