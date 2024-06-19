import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
  content: {
    filesystem: [
      'src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: {
          name: 'Space Grotesk',
          weights: ['300', '400', '700'],
          italic: true,
        },
      },
    }),
  ],
  safelist: [
    // icons for basics.profile
    ...['behance', 'codepen', 'codesandbox', 'dev-to', 'discord', 'dribbble', 'facebook', 'github', 'gitlab', 'instagram', 'linkedin', 'linktree', 'mastodon', 'medium', 'notion', 'patreon', 'pinterest', 'reddit', 'replit', 'skype', 'slack', 'snapchat', 'soundcloud', 'spotify', 'stack-overflow', 'telegram', 'threads', 'tiktok', 'twitch', 'twitter', 'wechat', 'whatsapp', 'x', 'youtube'].map((brand) => `i-ph-${brand}-logo-duotone`),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--c-primary)',
        100: 'color-mix(in srgb, var(--c-primary) 10%, white)',
        200: 'color-mix(in srgb, var(--c-primary) 30%, white)',
        300: 'color-mix(in srgb, var(--c-primary) 50%, white)',
        400: 'color-mix(in srgb, var(--c-primary) 70%, white)',
        500: 'var(--c-primary)',
        600: 'color-mix(in srgb, var(--c-primary), black 10%)',
        700: 'color-mix(in srgb, var(--c-primary), black 30%)',
        800: 'color-mix(in srgb, var(--c-primary), black 50%)',
        900: 'color-mix(in srgb, var(--c-primary), black 70%)',
      },
      secondary: {
        DEFAULT: 'var(--c-secondary)',
        100: 'color-mix(in srgb, var(--c-secondary) 10%, white)',
        200: 'color-mix(in srgb, var(--c-secondary) 30%, white)',
        300: 'color-mix(in srgb, var(--c-secondary) 50%, white)',
        400: 'color-mix(in srgb, var(--c-secondary) 70%, white)',
        500: 'var(--c-secondary)',
        600: 'color-mix(in srgb, var(--c-secondary), black 10%)',
        700: 'color-mix(in srgb, var(--c-secondary), black 30%)',
        800: 'color-mix(in srgb, var(--c-secondary), black 50%)',
        900: 'color-mix(in srgb, var(--c-secondary), black 70%)',
      },
    },
  },
});
