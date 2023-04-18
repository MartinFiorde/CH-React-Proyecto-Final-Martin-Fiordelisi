import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : '/CH-React-Proyecto-Final-Martin-Fiordelisi/',
  server: {
    port: 5174,
  },
})
