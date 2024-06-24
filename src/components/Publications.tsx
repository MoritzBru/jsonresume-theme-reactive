import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import { formatDate } from '../utils/formatters.js';
import SectionHeading from './helper/SectionHeading.js';
import MaybeLink from './helper/MaybeLink.js';

const Publication = (publication: Exclude<ResumeSchema['publications'], undefined>[number]) => (
  <article>
    <header class="flex justify-between">
      { publication.name && (
        <MaybeLink url={publication.url}>
          <span class="font-bold">{publication.name}</span>
        </MaybeLink>
      )}
      {publication.releaseDate && <time date={publication.releaseDate}>{formatDate(publication.releaseDate)}</time>}
    </header>
    <div>
      { publication.publisher && (<p class="font-bold opacity-75">{publication.publisher}</p>)}
      { publication.summary && (
        <div class="mt-1 text-justify text-pretty font-light leading-tight">
          {new RawHtml(md2html(publication.summary))}
        </div>
      )}
    </div>
  </article>
);

const Publications = ({ publications }: { publications: ResumeSchema['publications'] }) => (
  <>
    { publications?.length && (
      <section class="m-4">
        <SectionHeading>Publications</SectionHeading>
        <div class="mt-2 flex flex-col gap-2">
          { publications.map((publication) => Publication(publication))}
        </div>
      </section>
    )}
  </>
);

export default Publications;
