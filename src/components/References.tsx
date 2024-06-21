import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';

const Reference = (reference: Exclude<ResumeSchema['references'], undefined>[number]) => (
  <blockquote>
    {reference.name && <cite class="font-bold font-not-italic opacity-75">{reference.name}</cite>}
    {reference.reference && <div class="font-light">{new RawHtml(md2html(reference.reference))}</div>}
  </blockquote>
);

const References = ({ references }: { references: ResumeSchema['references'] }) => (
  <>
    { references?.length && (
      <section class="m-4">
        <h2 class="text-lg">References</h2>
        <hr class="border-t-2 border-secondary" />
        <div class="mt-2 flex flex-col gap-2">
          { references.map((reference) => Reference(reference))}
        </div>
      </section>
    )}
  </>
);

export default References;
