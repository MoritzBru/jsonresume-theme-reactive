import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';

type ThemeColors = {
  primary?: string;
  secondary?: string;
};

type ThemeI18n = Record<string, string>;

type ThemeOptions = {
  themeOptions?: {
    colors?: ThemeColors;
    i18n?: ThemeI18n;
  };
};

const DEFAULT_THEME_OPTIONS = {
  themeOptions: {
    colors: {
      primary: '#3F51B5',
      secondary: '#AD1457',
    },
    i18n: {
      'sections.awards': 'Awards',
      'sections.education': 'Education',
      'sections.interests': 'Interests',
      'sections.languages': 'Languages',
      'sections.projects': 'Projects',
      'sections.publications': 'Publications',
      'sections.references': 'References',
      'sections.skills': 'Skills',
      'sections.volunteer': 'Volunteer',
      'sections.work': 'Work',
      'timeRange.openEnd': 'Present',
    },
  },
} as const satisfies ThemeOptions;

const getColorVariables = (colors?: ThemeColors) => Object.entries({
  primary: colors?.primary ?? DEFAULT_THEME_OPTIONS.themeOptions.colors.primary,
  secondary: colors?.secondary ?? DEFAULT_THEME_OPTIONS.themeOptions.colors.secondary,
})
  .map(([name, value]) => `--c-${name}:${value};`)
  .join('');

const getI18n = (i18n?: ThemeI18n) => ({ ...DEFAULT_THEME_OPTIONS.themeOptions.i18n, ...i18n });

export let i18n = DEFAULT_THEME_OPTIONS.themeOptions.i18n;

const Theme = ({ meta }: { meta?: ResumeSchema['meta'] & ThemeOptions }) => (
  <>
    {(() => { i18n = getI18n(meta?.themeOptions?.i18n); })()}
    <style>
      {new RawHtml(`:root { ${getColorVariables(meta?.themeOptions?.colors)} }`)}
    </style>
  </>
);

export default Theme;
