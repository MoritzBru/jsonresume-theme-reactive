import type { ResumeSchema } from '../../resumeSchema.d.ts';

const Language = (language: Exclude<ResumeSchema['languages'], undefined>[number]) => (
  <div>
    {language?.language && <h3 class="font-bold opacity-75">{language.language}</h3>}
    {language.fluency && <p class="font-light">{language.fluency}</p>}
  </div>
);

const Languages = ({ languages }: { languages: ResumeSchema['languages'] }) => (
  <>
    { languages?.length && (
      <section class="m-4">
        <h2 class="text-lg">Languages</h2>
        <hr class="border-t-2 border-secondary" />
        <div class="mt-2 flex flex-col gap-2">
          { languages.map((language) => Language(language))}
        </div>
      </section>
    )}
  </>
);

export default Languages;
