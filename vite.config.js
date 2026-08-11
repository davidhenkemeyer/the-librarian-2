import { defineConfig } from 'vite';
import { copyFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

function sitesBuild() {
  let root = process.cwd();

  return {
    name: 'sites-build',
    apply: 'build',
    configResolved(config) {
      root = config.root;
    },
    async buildStart() {
      await rm(resolve(root, 'dist'), { recursive: true, force: true });
    },
    async closeBundle() {
      const serverDir = resolve(root, 'dist/server');
      const metadataDir = resolve(root, 'dist/.openai');
      await mkdir(serverDir, { recursive: true });
      await mkdir(metadataDir, { recursive: true });
      await copyFile(resolve(root, 'worker/index.js'), resolve(serverDir, 'index.js'));
      await copyFile(
        resolve(root, '.openai/hosting.json'),
        resolve(metadataDir, 'hosting.json'),
      );
    },
  };
}

export default defineConfig({
  base: '/',
  server: { port: 5273, open: false },
  plugins: [sitesBuild()],
  build: {
    outDir: 'dist/client',
    target: 'esnext',
    chunkSizeWarningLimit: 2000,
  },
});
