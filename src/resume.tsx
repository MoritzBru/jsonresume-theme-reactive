import { RawHtml } from 'static-jsx';
import type { ResumeSchema } from '../schema.d.ts';

const resume = ({ resume }: { resume: ResumeSchema }) => (
  <>
    {new RawHtml('<!DOCTYPE html>')}
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Example page</title>
      </head>
      <body>
        Hello,
        { resume.basics?.name }
        !
      </body>
    </html>
  </>
);

export default resume;
