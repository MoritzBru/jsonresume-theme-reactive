import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';

const Summary = ({ basics }: { basics: ResumeSchema['basics'] }) => (
  <>
    { basics?.summary && (
      <section class="bg-primary-200 p-4 text-justify text-pretty text-black">
        {new RawHtml(md2html(basics.summary))}
      </section>
    )}
  </>
);

export default Summary;
