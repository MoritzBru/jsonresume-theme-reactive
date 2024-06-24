import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';
import MaybeLink from './helper/MaybeLink.js';

const Position = (position: Exclude<ResumeSchema['volunteer'], undefined>[number]) => (
  <article>
    <header class="flex justify-between">
      {position.position && <p class="font-bold">{position.position}</p>}
      {position.startDate && <TimeRange startDate={position.startDate} endDate={position.endDate} />}
    </header>
    <div>
      { position.organization && (
        <MaybeLink url={position.url}>
          <span class="font-bold opacity-75">{position.organization}</span>
        </MaybeLink>
      )}
      { position.description && (<p class="font-light leading-tight">{position.description}</p>)}
      { position.summary && (
        <div class="mt-1 text-justify text-pretty font-light leading-tight">
          {new RawHtml(md2html(position.summary))}
        </div>
      )}
      { position.highlights?.length && (
        <ul class="ml-4 mt-1 list-disc list-outside font-light leading-tight marker:text-secondary">
          {position.highlights.map((highlight) => <li>{highlight}</li>)}
        </ul>
      )}
    </div>
  </article>
);

const Volunteer = ({ volunteer }: { volunteer: ResumeSchema['volunteer'] }) => (
  <>
    { volunteer?.length && (
      <section class="m-4">
        <SectionHeading>Volunteer</SectionHeading>
        <div class="mt-2 flex flex-col gap-2">
          { volunteer.map((volunteer) => Position(volunteer))}
        </div>
      </section>
    )}
  </>
);

export default Volunteer;
