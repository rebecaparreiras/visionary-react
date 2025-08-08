import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      swiper: path.resolve(__dirname, 'node_modules/swiper'),
    },
  },
});

