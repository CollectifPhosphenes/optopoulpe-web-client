import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: 'components', replacement: path.resolve(__dirname, '/src/components') },
      { find: 'assets', replacement: path.resolve(__dirname, '/src/assets') },
      { find: 'pages', replacement: path.resolve(__dirname, '/src/pages') },
      { find: 'store', replacement: path.resolve(__dirname, '/src/store') },
      { find: 'helpers', replacement: path.resolve(__dirname, '/src/helpers') },
      { find: 'hooks', replacement: path.resolve(__dirname, '/src/hooks') }
    ],
  }
})
