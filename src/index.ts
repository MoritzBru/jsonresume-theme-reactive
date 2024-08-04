import type { ResumeSchema } from '../resumeSchema.d.ts';
import { jsx } from 'static-jsx';
import Resume from './Resume';

export const render = (resume: ResumeSchema) => {
  const rendered = jsx(Resume, { resume });
  return rendered.html;
};
