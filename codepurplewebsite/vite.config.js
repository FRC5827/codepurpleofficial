import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  base: '/codepurplewebsite/',
  build: {
    outDir: "docs",
  },
  plugins: [react()],
})
