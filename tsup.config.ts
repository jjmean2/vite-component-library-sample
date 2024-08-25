import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['lib/main.ts'],
  outDir: 'dist/tsup',
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  tsconfig: './tsconfig.lib.json',
  // loader: {
  //   '.module.css': 'local-css',
  // },
})
