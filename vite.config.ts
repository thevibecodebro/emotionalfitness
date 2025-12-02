import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification (using esbuild instead of terser to avoid native dependencies)
    minify: 'esbuild',
    // Enable chunk splitting for better caching
    cssCodeSplit: true,
    // Configure chunk sizing
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Ensure assets are fingerprinted for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Split vendor code from application code
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'react-router-dom',
            'lucide-react'
          ],
          ui: [
            '@radix-ui/react-toast',
            '@radix-ui/react-slot',
            '@radix-ui/react-dialog'
          ]
        }
      }
    },
    // Enable source maps for production (can be disabled for smaller bundles)
    sourcemap: false,
    // Optimize dependencies
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
}));
