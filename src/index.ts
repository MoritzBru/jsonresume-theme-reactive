import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import '@unocss/reset/tailwind.css';
import './style.css';
import type { ResumeSchema } from '../resumeSchema.d.ts';
import { jsx } from 'static-jsx';
import Resume from './Resume';

const style = readFileSync(resolve(__dirname, './index.css'), 'utf-8');

export const render = (resume: ResumeSchema) => {
  const rendered = jsx(Resume, { resume, style });
  return rendered.html;
};
