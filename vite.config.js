import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/portfolioBLA/'
// })

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/portfolioBLA/' : '/',
}));
