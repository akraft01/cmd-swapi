import { defineConfig } from 'vite';
import path from 'path';
import { Plugin } from 'vite';
import fs from 'fs';

function addShebangPlugin(): Plugin {
  return {
    name: 'add-shebang',
    writeBundle(options, bundle) {
        const outputFile = path.resolve(__dirname, options.dir!, 'swapi-cli.cjs');
        // The '!' asserts that 'options.dir' is not undefined
      
        const shebang = '#!/usr/bin/env node\n';
        
        const fileContent = fs.readFileSync(outputFile, 'utf8');
        if (!fileContent.startsWith(shebang)) {
          fs.writeFileSync(outputFile, shebang + fileContent, 'utf8');
        }
      }
      
  };
}

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/cli.ts'),
      formats: ['cjs'],
      fileName: () => `swapi-cli.cjs`,
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['commander', 'node-fetch', 'https-proxy-agent'],
    },
  },
  plugins: [addShebangPlugin()],
});
