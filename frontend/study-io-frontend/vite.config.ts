import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base to root
  resolve: {
    alias: {
      '@components': '/src/components', // Alias for your components directory
      '@icons': '/src/components/Icons' // Alias for your Icons directory if needed
    }
  }
});
