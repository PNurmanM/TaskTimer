import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/   "homepage": "https://PNurmanM.github.io/TaskTimer",
export default defineConfig({
  base: '/TaskTimer/',
  plugins: [react()],
})
