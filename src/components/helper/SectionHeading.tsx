import type { RawHtml } from 'static-jsx';

const SectionHeading = ({ children }: { children: string | RawHtml | RawHtml[] }) => (
  <h2 class="border-b-2 border-secondary text-lg">{children}</h2>
);

export default SectionHeading;
