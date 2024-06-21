import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';

const Position = (position: Exclude<ResumeSchema['work'], undefined>[number]) => (
  <details open>
    <summary class="flex justify-between">
      {position.name && <span class="font-bold">{position.name}</span>}
      {position.startDate && <TimeRange startDate={position.startDate} endDate={position.endDate} />}
    </summary>
    <div>
      <div class="flex justify-between">
        {position.position && <p class="">{position.position}</p>}
        {position.location && <p class="opacity-75">{position.location}</p>}
      </div>
      { position.summary && (
        <div class="mt-1 text-justify text-pretty font-light leading-tight">
          {new RawHtml(md2html(position.summary))}
        </div>
      )}
    </div>
  </details>
);

const Work = ({ work }: { work: ResumeSchema['work'] }) => (
  <>
    { work?.length && (
      <section class="m-4">
        <SectionHeading>Work</SectionHeading>
        <div class="mt-2 flex flex-col gap-2">
          { work.map((position) => Position(position))}
        </div>
      </section>
    )}
  </>
);

export default Work;
