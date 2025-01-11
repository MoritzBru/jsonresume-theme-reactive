import { exec } from 'node:child_process';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      build: {
        lib: {
          entry: './src/index.ts',
          fileName: 'index',
          formats: ['es'],
        },
        target: 'esnext',
      },
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
      },
      plugins: [
        {
          name: 'on-success',
          closeBundle() {
            console.log('📄 Rendering Resume');
            exec('npm run render', (error, stdout, stderr) => {
              if (error) {
                console.error(error.message);
                return;
              }
              if (stderr) {
                console.error(stderr);
                return;
              }
              console.log(stdout);
            });
          },
        },
      ],
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
