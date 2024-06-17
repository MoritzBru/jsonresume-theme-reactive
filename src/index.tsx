import Resume from './resume';

import type { ResumeSchema } from '../schema.d.ts';

export const render = (resume: ResumeSchema) => {
  const rendered = (
    <Resume resume={resume} />
  );
  return rendered.html;
};
