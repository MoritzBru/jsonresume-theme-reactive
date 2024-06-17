import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import '@unocss/reset/normalize.css';
import './style.css';
import type { ResumeSchema } from '../resumeSchema.d.ts';
import Resume from './resume';

const style = readFileSync(resolve(__dirname, './index.css'), 'utf-8');

export const render = (resume: ResumeSchema) => {
  const rendered = (
    <Resume resume={resume} style={style} />
  );
  return rendered.html;
};
