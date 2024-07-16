import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  /* server:{
    proxy:{
      '/api':"https://cryptic-backend.onrender.com"
    }
  }, */
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
