import type { ResumeSchema } from '../../resumeSchema.d.ts';

const Language = (language: Exclude<ResumeSchema['languages'], undefined>[number]) => (
  <div>
    {language.language && <dt class="font-bold opacity-75">{language.language}</dt>}
    {language.fluency && <dd class="font-light">{language.fluency}</dd>}
  </div>
);

const Languages = ({ languages }: { languages: ResumeSchema['languages'] }) => (
  <>
    { languages?.length && (
      <section class="m-4">
        <h2 class="text-lg">Languages</h2>
        <hr class="border-t-2 border-secondary" />
        <dl class="mt-2 flex flex-col gap-2">
          { languages.map((language) => Language(language))}
        </dl>
      </section>
    )}
  </>
);

export default Languages;
