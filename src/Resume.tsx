import { RawHtml } from 'static-jsx';
import type { ResumeSchema } from '../resumeSchema.d.ts';
import Head from './components/Head';
import Theme from './components/Theme';
import Basics from './components/Basics';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import References from './components/References';
import Summary from './components/Summary';
import Work from './components/Work';
import Education from './components/Education';
import Volunteer from './components/Volunteer';

const Resume = ({ resume, style }: { resume: ResumeSchema; style: string }) => (
  <>
    {new RawHtml('<!DOCTYPE html>')}
    <html lang={resume?.meta?.language ?? 'en'}>
      <head>
        <Head basics={resume?.basics} />
        <style>{new RawHtml(style)}</style>
        <Theme meta={resume?.meta} />
      </head>
      <body class="bg-white text-[13px] text-black font-sans">
        <hr class="absolute top-[297mm] w-full border-dashed print:hidden" />
        <main class="grid grid-cols-[1fr_2fr] mx-auto max-w-[210mm] min-h-[297mm]">
          <div class="bg-primary-200 text-black">
            <Basics basics={resume?.basics} />
            <Skills skills={resume?.skills} />
            <Languages languages={resume?.languages} />
            <Interests interests={resume?.interests} />
            <References references={resume?.references} />
          </div>
          <div class="right">
            <Summary basics={resume?.basics} />
            <Work work={resume?.work} />
            <Education education={resume?.education} />
            <Volunteer volunteer={resume?.volunteer} />
          </div>
        </main>
      </body>
    </html>
  </>
);

export default Resume;
