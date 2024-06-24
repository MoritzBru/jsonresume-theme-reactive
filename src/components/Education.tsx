import type { ResumeSchema } from '../../resumeSchema.d.ts';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';
import MaybeLink from './helper/MaybeLink.js';

const Position = (position: Exclude<ResumeSchema['education'], undefined>[number]) => (
  <article>
    <header class="between">
      {position.institution && (
        <h3 class="font-bold">
          <MaybeLink url={position.url}>{position.institution}</MaybeLink>
        </h3>
      )}
      {position.startDate && <TimeRange startDate={position.startDate} endDate={position.endDate} />}
    </header>
    <div class="between">
      {position.studyType && <p class="subheading">{position.studyType}</p>}
      {position.area && <p>{position.area}</p>}
    </div>
    <div class="mt-0.5 flex flex-col gap-y-0.5">
      {position.score && (<p class="font-light">{position.score}</p>)}
      {position.courses?.length && (
        <ul class="list">
          {position.courses.map((course) => <li>{course}</li>)}
        </ul>
      )}
    </div>
  </article>
);

const Education = ({ education }: { education: ResumeSchema['education'] }) => (
  <>
    {education?.length && (
      <section class="m-4">
        <SectionHeading>Education</SectionHeading>
        <div class="array">
          {education.map((education) => Position(education))}
        </div>
      </section>
    )}
  </>
);

export default Education;
