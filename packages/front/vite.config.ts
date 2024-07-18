import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      src: path.resolve('src/')
    }
  }
});
