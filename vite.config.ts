import react from '@vitejs/plugin-react'
import { glob } from 'glob'
import { dirname, extname, relative, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

const input = Object.fromEntries(
  glob
    .sync('lib/**/*.{ts,tsx}', {
      ignore: ['lib/**/*.d.ts'],
    })
    .map(file => [
      relative('lib', file.slice(0, file.length - extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
)
console.log('INPUTS:', input)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ tsconfigPath: resolve(import.meta.dirname, 'tsconfig.lib.json') }),
  ],
  css: {
    modules: {
      getJSON: (cssFileName, json, outputFileName) => {
        console.log('CSS getJSON:', cssFileName, json, outputFileName) // 결과 파일명 확인 가능
      },
    },
  },
  build: {
    outDir: 'dist/vite',
    lib: {
      entry: resolve(import.meta.dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input,
      output: {
        // assetFileNames: 'assets/[name][extname]',
        assetFileNames(chunkInfo) {
          console.log(chunkInfo)
          const entryDirectory = dirname(relative('lib', chunkInfo.originalFileName ?? ''))
          return `${entryDirectory}/[name][extname]`
        },
        entryFileNames: '[name].js',
      },
    },
  },
})
