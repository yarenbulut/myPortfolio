import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          style: ['bootstrap', 'bootstrap-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
