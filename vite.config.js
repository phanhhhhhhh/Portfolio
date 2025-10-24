import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { fileURLToPath } from 'url'; // <<< Thêm vào

// <<< Thêm 2 dòng này để định nghĩa __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.config.js/
export default defineConfig({
  // Bỏ 'tailwindcss()' ra khỏi plugins
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});