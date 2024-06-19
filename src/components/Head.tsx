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
    { basics?.summary && <meta name="description" content={md2txt(basics?.summary)} /> }
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='50' fill='%23222222'%3E%3C/rect%3E%3Cpath fill='%23fff' d='M40.28 58.31L46.06 58.31Q45.69 65.63 41.95 69.50Q38.22 73.38 31.41 73.38L31.41 73.38Q24.56 73.38 20.53 68.17Q16.50 62.97 16.50 54.06L16.50 54.06L16.50 45.81Q16.50 36.94 20.64 31.78Q24.78 26.63 31.94 26.63L31.94 26.63Q38.53 26.63 42.14 30.58Q45.75 34.53 46.06 41.88L46.06 41.88L40.28 41.88Q39.91 36.31 37.94 33.94Q35.97 31.56 31.94 31.56L31.94 31.56Q27.28 31.56 24.78 35.20Q22.28 38.84 22.28 45.88L22.28 45.88L22.28 54.22Q22.28 61.13 24.61 64.81Q26.94 68.50 31.41 68.50Q35.88 68.50 37.84 66.28Q39.81 64.06 40.28 58.31L40.28 58.31ZM56.47 27.25L66.81 63.97L77.22 27.25L83.50 27.25L69.34 72.75L64.34 72.75L50.22 27.25L56.47 27.25Z'%3E%3C/path%3E%3C/svg%3E" />
  </>
);

export default Head;
