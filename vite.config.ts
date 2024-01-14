import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        home: '/src/pages/Home.tsx',
        unauthorized: '/src/pages/Unauthorized.tsx'
      }
    }
  }
})
