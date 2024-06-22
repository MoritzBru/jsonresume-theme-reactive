import type { ResumeSchema } from '../../resumeSchema.d.ts';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';
import MaybeLink from './helper/MaybeLink.js';

const Position = (position: Exclude<ResumeSchema['education'], undefined>[number]) => (
  <article>
    <header class="flex justify-between">
      <p class="flex gap-1">
        {position.studyType && <span>{position.studyType}</span>}
        {position.area && <span class="font-bold">{position.area}</span>}
      </p>
      {position.startDate && <TimeRange startDate={position.startDate} endDate={position.endDate} />}
    </header>
    <div>
      <MaybeLink url={position.url}>
        <span class="font-bold opacity-75">{position.institution}</span>
      </MaybeLink>
      { position.score && (<p class="font-light">{position.score}</p>)}
      { position.courses?.length && (
        <ul class="ml-4 mt-1 list-disc list-outside font-light leading-tight marker:text-secondary">
          {position.courses.map((course) => <li>{course}</li>)}
        </ul>
      )}
    </div>
  </article>
);

const Education = ({ education }: { education: ResumeSchema['education'] }) => (
  <>
    { education?.length && (
      <section class="m-4">
        <SectionHeading>Education</SectionHeading>
        <div class="mt-2 flex flex-col gap-2">
          { education.map((education) => Position(education))}
        </div>
      </section>
    )}
  </>
);

export default Education;
