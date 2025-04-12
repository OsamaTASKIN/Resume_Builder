import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Resume_Builder/', // ✅ Must match repo name
  plugins: [vue()],
})
