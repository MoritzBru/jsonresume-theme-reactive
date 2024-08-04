import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      build: {
        outDir: '.',
        target: 'esnext',
      },
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
      },
      publicDir: false,
    };
  }

  return {
    build: {
      lib: {
        entry: './src/index.ts',
        fileName: 'index',
        formats: ['es', 'cjs'],
      },
      target: 'esnext',
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: './resumeSchema.d.ts',
            dest: '.',
          },
          {
            src: './src/index.d.ts',
            transform: (content) => content.replace('../resumeSchema.d.ts', './resumeSchema.d.ts'),
            dest: '.',
          },
          {
            src: './src/index.d.ts',
            transform: (content) => content.replace('../resumeSchema.d.ts', './resumeSchema.d.ts'),
            dest: '.',
            rename: 'index.d.cts',
          },
        ],
      }),
    ],
    publicDir: false,
  };
});
