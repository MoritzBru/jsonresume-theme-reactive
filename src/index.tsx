import Resume from './resume';

import type { ResumeSchema } from '../schema.d.ts';

export const render = (resume: ResumeSchema) => {
  const rendered = (
    <Resume resume={resume} />
  );
  console.log('🟣 ~ render ~ rendered:', rendered.html);
  return rendered.html;
};
