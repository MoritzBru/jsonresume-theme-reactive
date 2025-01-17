import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { RawHtml } from 'static-jsx';
import { md2html } from '../utils/converte';
import { formatDate } from '../utils/formatters.js';
import SectionHeading from './helper/SectionHeading.js';
import MaybeLink from './helper/MaybeLink.js';
import { i18n } from './Theme';

const Publication = (publication: Exclude<ResumeSchema['publications'], undefined>[number]) => (
  <article>
    <header class="between">
      {publication.name && (
        <h3 class="font-bold">
          <MaybeLink url={publication.url}>{publication.name}</MaybeLink>
        </h3>
      )}
      {publication.releaseDate && <time class="time" date={publication.releaseDate}>{formatDate(publication.releaseDate)}</time>}
    </header>
    <div>
      {publication.publisher && (<p class="subheading">{publication.publisher}</p>)}
      {publication.summary && (
        <div class="summary">
          {new RawHtml(md2html(publication.summary))}
        </div>
      )}
    </div>
  </article>
);

const Publications = ({ publications }: { publications: ResumeSchema['publications'] }) => (
  <>
    {publications?.length && (
      <section>
        <SectionHeading>{i18n['sections.publications']}</SectionHeading>
        <div class="array">
          {publications.map((publication) => Publication(publication))}
        </div>
      </section>
    )}
  </>
);

export default Publications;
