import { defineConfig } from 'tsup';
export default defineConfig({
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  treeshake: false,  // Disable tree-shaking to prevent removal of imports
  entry: ['index.ts'],
  skipNodeModulesBundle: true,
  shims: true,
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
});
