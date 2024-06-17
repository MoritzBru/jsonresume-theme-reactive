import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  cli: {
    entry: {
      patterns: ['src/**/*.tsx'],
      outFile: 'style.txt', // workaround: export as txt so esbuild can import the contents
    },
  },
  content: {
    filesystem: [
      'src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  presets: [
    presetUno(),
    presetIcons(),
  ],
  theme: {
    colors: {
      primary: {
        light: '#3F51B5',
        dark: '#3F51B5',
      },
      secondary: {
        light: '#AD1457',
        dark: '#AD1457',
      },
      accent: {
        light: '#1A237E',
        dark: '#1A237E',
      },
      base: {
        light: '#fff',
        dark: '#000',
      },
      content: {
        light: '#000',
        dark: '#fff',
      },
    },
  },
});
