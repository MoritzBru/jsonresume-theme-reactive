import type { ResumeSchema } from '../../resumeSchema.d.ts';
import SectionHeading from './helper/SectionHeading.js';
import { i18n } from './Theme';

const Skill = (skill: Exclude<ResumeSchema['skills'], undefined>[number]) => (
  <div>
    {skill.name && <dt class="subheading">{skill.name}</dt>}
    {skill.keywords?.length && <dd class="font-light">{skill.keywords.join(', ')}</dd>}
  </div>
);

const Skills = ({ skills }: { skills: ResumeSchema['skills'] }) => (
  <>
    {skills?.length && (
      <section>
        <SectionHeading>{i18n['sections.skills']}</SectionHeading>
        <dl class="grid grid-cols-2 mt-2 gap-2 [&>*:nth-child(odd):last-child]:col-span-2">
          {skills.map((skill) => Skill(skill))}
        </dl>
      </section>
    )}
  </>
);

export default Skills;
