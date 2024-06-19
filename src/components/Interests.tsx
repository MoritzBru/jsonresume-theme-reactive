import type { ResumeSchema } from '../../resumeSchema.d.ts';

const Interest = (interest: Exclude<ResumeSchema['interests'], undefined>[number]) => (
  <div>
    {interest?.name && <h3 class="font-bold opacity-75">{interest.name}</h3>}
    {interest.keywords?.length && <p class="font-light">{interest.keywords.join(', ')}</p>}
  </div>
);

const Interests = ({ interests }: { interests: ResumeSchema['interests'] }) => (
  <>
    { interests?.length && (
      <section class="m-4">
        <h2 class="text-lg">Interests</h2>
        <hr class="border-t-2 border-secondary" />
        <div class="grid grid-cols-2 mt-2 gap-2 [&>*:nth-child(odd):last-child]:col-span-2">
          { interests.map((interest) => Interest(interest))}
        </div>
      </section>
    )}
  </>
);

export default Interests;
