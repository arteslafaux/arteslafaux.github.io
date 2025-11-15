import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "/",
    build: {
      minify: true,
      sourcemap: mode !== 'production',
      cssMinify: true,
      // rollupOptions: {
      // output: {
      // manualChunks(id) {
      // if (id.includes('node_modules')) {
      // return 'vendor';
      // }

      // return null;
      // }
      // }
      // }
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
    preview: {
      allowedHosts: [ "hp15da0011la" ],
      host: '0.0.0.0',
      cors: true,
      port: 4173,
    },
    server: {
      allowedHosts: [
        "hp15da0011la",
        "hp15da0011la.local"

      ],
      watch: { usePolling: true },
      host: '0.0.0.0',
      cors: true,
      port: 5173,
    },
  }
})
