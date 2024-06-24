import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import SectionHeading from './helper/SectionHeading.js';

const Reference = (reference: Exclude<ResumeSchema['references'], undefined>[number]) => (
  <blockquote>
    {reference.name && <cite class="subheading font-not-italic">{reference.name}</cite>}
    {reference.reference && <div class="border-l-2 border-black/20 pl-1 font-light">{new RawHtml(md2html(reference.reference))}</div>}
  </blockquote>
);

const References = ({ references }: { references: ResumeSchema['references'] }) => (
  <>
    {references?.length && (
      <section class="m-4">
        <SectionHeading>References</SectionHeading>
        <div class="array">
          {references.map((reference) => Reference(reference))}
        </div>
      </section>
    )}
  </>
);

export default References;
