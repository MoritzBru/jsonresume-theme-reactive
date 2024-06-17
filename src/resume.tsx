import { RawHtml } from 'static-jsx';
import type { ResumeSchema } from '../schema.d.ts';
// @ts-expect-error no declaration for txt import
import style from '../style.txt';

const Resume = ({ resume }: { resume: ResumeSchema }) => (
  <>
    {new RawHtml('<!DOCTYPE html>')}
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{resume.basics?.name}</title>
        <meta name="description" content={resume.basics?.summary} />
        <style>{new RawHtml(style)}</style>
      </head>
      <body class="bg-base-light text-content-light dark:bg-base-dark dark:text-content-dark text-sm font-sans">
        <main class="mx-auto max-w-[210mm] p-5">
          Hello,
          { resume.basics?.name }
          !
          <div class="animate-bounce-alt animate-duration-1s animate-count-infinite text-5xl text-red-500 fw100">
            UnoCSS
          </div>
          <div class="i-ph-cow-duotone" />

        </main>
      </body>
    </html>
  </>
);

export default Resume;
