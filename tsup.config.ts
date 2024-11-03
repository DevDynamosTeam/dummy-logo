import { defineConfig } from 'tsup';
export default defineConfig({
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  entry: ['index.ts'],
  skipNodeModulesBundle: true,
  shims: true,
});
