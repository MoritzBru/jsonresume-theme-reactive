import type { ResumeSchema } from '../../resumeSchema.d.ts';
import SectionHeading from './helper/SectionHeading.js';

const Language = (language: Exclude<ResumeSchema['languages'], undefined>[number]) => (
  <div>
    {language.language && <dt class="subheading">{language.language}</dt>}
    {language.fluency && <dd class="font-light">{language.fluency}</dd>}
  </div>
);

const Languages = ({ languages }: { languages: ResumeSchema['languages'] }) => (
  <>
    {languages?.length && (
      <section class="m-4">
        <SectionHeading>Languages</SectionHeading>
        <dl class="array">
          {languages.map((language) => Language(language))}
        </dl>
      </section>
    )}
  </>
);

export default Languages;
