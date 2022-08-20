import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: '@ico-data/log-viewer',
      formats: ['es'],
      fileName: (name: string) => `log-viewer.${name}.js`,
    },
    watch: {
      include: ["src/**/*"]
    },
    outDir: "lib/dist",
    target: "es2015",
    minify: "terser",
    manifest: false,
    sourcemap: true,
  }
})
