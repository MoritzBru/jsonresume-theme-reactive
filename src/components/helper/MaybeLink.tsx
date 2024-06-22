import type { RawHtml } from 'static-jsx';

const MaybeLink = ({ children, url }: { children: string | RawHtml | RawHtml[]; url?: string }) => (
  <>
    { url ? <a href={url}>{children}</a> : <>{ children }</> }
  </>
);

export default MaybeLink;
