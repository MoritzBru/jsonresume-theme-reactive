import type { ResumeSchema } from '../../resumeSchema.d.ts';
import { md2txt } from '../utils/converte';

const Head = ({ basics }: { basics: ResumeSchema['basics'] }) => (
  <>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>
      CV
      {basics?.name && ` - ${basics?.name}`}
    </title>
    {basics?.summary && <meta name="description" content={md2txt(basics?.summary)} />}
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E @media (prefers-color-scheme: dark) %7B rect %7B fill: %23000; %7D text %7B fill: %23fff; %7D %7D %3C/style%3E%3Crect width='16' height='16' rx='4' fill='%23fff'/%3E%3Ctext x='1' y='12' textLength='14' fill='%23000' font-family='system-ui, sans-serif' font-size='11'%3ECV%3C/text%3E%3C/svg%3E" />
  </>
);

export default Head;
