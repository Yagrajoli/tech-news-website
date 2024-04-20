import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      proxy: "http://hn.algolia.com/api/v1/search?"
  },
  plugins: [react()],
})
