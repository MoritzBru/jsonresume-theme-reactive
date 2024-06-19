import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';

type ThemeColors = {
  primary?: string;
  secondary?: string;
};

type ThemeOptions = {
  themeOptions?: {
    colors?: ThemeColors;
  };
};

const DEFAULT_THEME_OPTIONS = {
  themeOptions: {
    colors: {
      primary: '#3F51B5',
      secondary: '#AD1457',
    },
  },
} as const satisfies ThemeOptions;

const getColorVariables = (colors?: ThemeColors) => Object.entries({
  primary: colors?.primary ?? DEFAULT_THEME_OPTIONS.themeOptions.colors.primary,
  secondary: colors?.secondary ?? DEFAULT_THEME_OPTIONS.themeOptions.colors.secondary,
})
  .map(([name, value]) => `--c-${name}:${value};`)
  .join('');

const Theme = ({ meta }: { meta?: ResumeSchema['meta'] & ThemeOptions }) => (
  <style>
    { new RawHtml(`:root { ${getColorVariables(meta?.themeOptions?.colors)} }`)}
  </style>
);

export default Theme;
