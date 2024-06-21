import type { ResumeSchema } from '../../resumeSchema.d.ts';

const Skill = (skill: Exclude<ResumeSchema['skills'], undefined>[number]) => (
  <div>
    {skill.name && <dt class="font-bold opacity-75">{skill.name}</dt>}
    {skill.keywords?.length && <dd class="font-light">{skill.keywords.join(', ')}</dd>}
  </div>
);

const Skills = ({ skills }: { skills: ResumeSchema['skills'] }) => (
  <>
    { skills?.length && (
      <section class="m-4">
        <h2 class="text-lg">Skills</h2>
        <hr class="border-t-2 border-secondary" />
        <dl class="grid grid-cols-2 mt-2 gap-2 [&>*:nth-child(odd):last-child]:col-span-2">
          { skills.map((skill) => Skill(skill))}
        </dl>
      </section>
    )}
  </>
);

export default Skills;
