import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';
import MaybeLink from './helper/MaybeLink.js';
import { i18n } from './Theme';

const Position = (position: Exclude<ResumeSchema['volunteer'], undefined>[number]) => (
  <article>
    <header class="between">
      {position.position && <h3 class="font-bold">{position.position}</h3>}
      {position.startDate && <TimeRange startDate={position.startDate} endDate={position.endDate} />}
    </header>
    <div>
      {position.organization && (
        <MaybeLink url={position.url}>
          <span class="subheading">{position.organization}</span>
        </MaybeLink>
      )}
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

const Volunteer = ({ volunteer }: { volunteer: ResumeSchema['volunteer'] }) => (
  <>
    {volunteer?.length && (
      <section>
        <SectionHeading>{i18n['sections.volunteer']}</SectionHeading>
        <div class="array">
          {volunteer.map((volunteer) => Position(volunteer))}
        </div>
      </section>
    )}
  </>
);

export default Volunteer;
