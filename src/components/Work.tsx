import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';
import MaybeLink from './helper/MaybeLink.js';
import { i18n } from './Theme';

const Position = (position: Exclude<ResumeSchema['work'], undefined>[number]) => (
  <article>
    <header class="between">
      {position.position && <h3 class="font-bold">{position.position}</h3>}
      {position.startDate && <TimeRange startDate={position.startDate} endDate={position.endDate} />}
    </header>
    <div>
      <div class="between">
        {position.name && (
          <MaybeLink url={position.url}>
            <span class="subheading">{position.name}</span>
          </MaybeLink>
        )}
        {position.location && <p class="opacity-75">{position.location}</p>}
      </div>
      {position.description && (<p class="font-light leading-tight">{position.description}</p>)}
      {position.summary && (
        <div class="summary">
          {new RawHtml(md2html(position.summary))}
        </div>
      )}
      {position.highlights?.length && (
        <ul class="list">
          {position.highlights.map((highlight) => <li>{highlight}</li>)}
        </ul>
      )}
    </div>
  </article>
);

const Work = ({ work }: { work: ResumeSchema['work'] }) => (
  <>
    {work?.length && (
      <section class="m-4">
        <SectionHeading>{i18n['sections.work']}</SectionHeading>
        <div class="array">
          {work.map((position) => Position(position))}
        </div>
      </section>
    )}
  </>
);

export default Work;
