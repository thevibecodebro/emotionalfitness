
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";

// Update browserslist database before build
if (process.env.NODE_ENV === 'production') {
  try {
    console.log('Updating browserslist database...');
    execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to update browserslist database:', error);
    // Continue with the build even if update fails
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification
    minify: 'terser',
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
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
}));
