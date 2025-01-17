import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { formatDate } from '../utils/formatters.js';

const LastModified = ({ meta }: { meta: ResumeSchema['meta'] }) => (
  <>
    {meta?.lastModified && (
      <section class="mb-4 mt-auto self-end text-sm">
        <time datetime={meta.lastModified}>
          {formatDate(meta.lastModified)}
        </time>
      </section>
    )}
  </>
);

export default LastModified;
