import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import { formatDate } from '../utils/formatters.js';
import SectionHeading from './helper/SectionHeading.js';

const Award = (award: Exclude<ResumeSchema['awards'], undefined>[number]) => (
  <article>
    <header class="flex justify-between">
      {award.title && <p class="font-bold">{award.title}</p>}
      {award.date && <time date={award.date}>{formatDate(award.date)}</time>}
    </header>
    <div>
      { award.awarder && (<p class="font-bold opacity-75">{award.awarder}</p>)}
      { award.summary && (
        <div class="mt-1 text-justify text-pretty font-light leading-tight">
          {new RawHtml(md2html(award.summary))}
        </div>
      )}
    </div>
  </article>
);

const Awards = ({ awards }: { awards: ResumeSchema['awards'] }) => (
  <>
    { awards?.length && (
      <section class="m-4">
        <SectionHeading>Awards</SectionHeading>
        <div class="mt-2 flex flex-col gap-2">
          { awards.map((award) => Award(award))}
        </div>
      </section>
    )}
  </>
);

export default Awards;
