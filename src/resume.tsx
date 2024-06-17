import { RawHtml } from 'static-jsx';
import type { ResumeSchema } from '../resumeSchema.d.ts';

const Resume = ({ resume, style }: { resume: ResumeSchema; style: string }) => (
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
      <body class="bg-base-light text-sm text-content-light font-sans dark:bg-base-dark dark:text-content-dark">
        <main class="mx-auto max-w-[210mm] p-5">
          Hello,
          { resume.basics?.name }
          !
          <div class="animate-bounce-alt animate-duration-1s animate-count-infinite text-5xl text-green-500 fw100">
            UnoCSS is so cool
          </div>
          <div class="i-ph-cow-duotone" />

        </main>
      </body>
    </html>
  </>
);

export default Resume;
