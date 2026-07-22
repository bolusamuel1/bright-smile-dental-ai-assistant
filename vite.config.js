import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this site from a sub-path
// (https://YOUR-USERNAME.github.io/bright-smile-dental-ai-assistant/),
// not the domain root, so the production build needs to know that.
// Local dev (`npm run dev`) still runs at the root, so this only
// applies when we run `npm run build`.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/bright-smile-dental-ai-assistant/' : '/',
}))
