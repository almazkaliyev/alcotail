import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const path = require('path');

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 9000,
  },
  build: {
    target: 'es6',
  },
  resolve: {
    alias: {
      'api': path.resolve(__dirname, './src/api'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'config': path.resolve(__dirname, './src/config'),
      'constants': path.resolve(__dirname, './src/constants'),
      'interfaces': path.resolve(__dirname, './src/interfaces'),
      'modules': path.resolve(__dirname, './src/modules'),
      'pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
