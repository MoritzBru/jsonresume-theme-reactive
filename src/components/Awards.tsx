import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import { formatDate } from '../utils/formatters.js';
import SectionHeading from './helper/SectionHeading.js';
import { i18n } from './Theme';

const Award = (award: Exclude<ResumeSchema['awards'], undefined>[number]) => (
  <article>
    <header class="between">
      {award.title && <h3 class="font-bold">{award.title}</h3>}
      {award.date && <time class="time" date={award.date}>{formatDate(award.date)}</time>}
    </header>
    <div>
      {award.awarder && (<p class="subheading">{award.awarder}</p>)}
      {award.summary && (
        <div class="summary">
          {new RawHtml(md2html(award.summary))}
        </div>
      )}
    </div>
  </article>
);

const Awards = ({ awards }: { awards: ResumeSchema['awards'] }) => (
  <>
    {awards?.length && (
      <section class="m-4">
        <SectionHeading>{i18n['sections.awards']}</SectionHeading>
        <div class="array">
          {awards.map((award) => Award(award))}
        </div>
      </section>
    )}
  </>
);

export default Awards;
