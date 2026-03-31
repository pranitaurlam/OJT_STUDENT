import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // ✅ Jab bhi frontend /api/... pe call kare
      // Vite us request ko backend localhost:8000 pe bhej deta hai!
      '/api': {
        target: 'http://localhost:8000',  // FastAPI backend ka address
        changeOrigin: true,               // CORS issue fix
        secure: false,                    // HTTP allowed
      }
    }
  }
})