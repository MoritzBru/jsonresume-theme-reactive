import { RawHtml } from 'static-jsx';
import type { ResumeSchema } from '../resumeSchema.d.ts';
import style from './style.css?inline';

import Head from './components/Head';
import Theme from './components/Theme';
import Basics from './components/Basics';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import References from './components/References';
import Summary from './components/Summary';
import Work from './components/Work';
import Projects from './components/Projects';
import Education from './components/Education';
import Volunteer from './components/Volunteer';
import Awards from './components/Awards';
import Publications from './components/Publications';
import LastModified from './components/LastModified';

const Resume = ({ resume }: { resume: ResumeSchema }) => (
  <>
    {new RawHtml('<!DOCTYPE html>')}
    <html lang={resume?.meta?.language ?? 'en'}>
      <head>
        <Head basics={resume?.basics} />
        <style>{new RawHtml(style)}</style>
        <Theme meta={resume?.meta} />
      </head>
      <body class="bg-white text-black font-sans text-base dark:bg-gray-900 dark:text-white">
        <main class="grid mx-auto max-w-[210mm] min-h-[297mm] md:grid-cols-[1fr_2fr]">
          <div class="flex flex-col gap-y-4 bg-primary-200 px-5 text-black dark:bg-primary-800 dark:text-white">
            <Basics basics={resume?.basics} className="-mx-5" />
            <Summary basics={resume?.basics} className="block md:hidden" />
            <Skills skills={resume?.skills} />
            <Languages languages={resume?.languages} />
            <Interests interests={resume?.interests} />
            <References references={resume?.references} />
          </div>
          <div class="mx-5 flex flex-col gap-y-4">
            <Summary basics={resume?.basics} className="hidden -mx-5 md:block" />
            <Work work={resume?.work} />
            <Projects projects={resume?.projects} />
            <Education education={resume?.education} />
            <Volunteer volunteer={resume?.volunteer} />
            <Awards awards={resume?.awards} />
            <Publications publications={resume?.publications} />
            <LastModified meta={resume?.meta} />
          </div>
        </main>
      </body>
    </html>
  </>
);

export default Resume;
