import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';

const Summary = ({ basics, className }: { basics: ResumeSchema['basics']; className?: string }) => (
  <>
    {basics?.summary && (
      <section class={['bg-primary-200 px-5 py-4 text-justify text-pretty text-black dark:bg-primary-800 dark:text-white', className].filter(Boolean).join(' ')}>
        {new RawHtml(md2html(basics.summary))}
      </section>
    )}
  </>
);

export default Summary;
