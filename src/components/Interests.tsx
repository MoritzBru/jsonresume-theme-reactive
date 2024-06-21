import type { ResumeSchema } from '../../resumeSchema.d.ts';
import SectionHeading from './helper/SectionHeading.js';

const Interest = (interest: Exclude<ResumeSchema['interests'], undefined>[number]) => (
  <div>
    {interest.name && <dt class="font-bold opacity-75">{interest.name}</dt>}
    {interest.keywords?.length && <dd class="font-light">{interest.keywords.join(', ')}</dd>}
  </div>
);

const Interests = ({ interests }: { interests: ResumeSchema['interests'] }) => (
  <>
    { interests?.length && (
      <section class="m-4">
        <SectionHeading>Interests</SectionHeading>
        <dl class="grid grid-cols-2 mt-2 gap-2 [&>*:nth-child(odd):last-child]:col-span-2">
          { interests.map((interest) => Interest(interest))}
        </dl>
      </section>
    )}
  </>
);

export default Interests;
