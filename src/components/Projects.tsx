import type { ResumeSchema } from '../../resumeSchema.d.ts';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';
import MaybeLink from './helper/MaybeLink.js';

const Project = (project: Exclude<ResumeSchema['projects'], undefined>[number]) => (
  <article>
    <header class="flex justify-between">
      {project.name && (
        <MaybeLink url={project.url}>
          <span class="font-bold">{project.name}</span>
        </MaybeLink>
      )}
      {project.startDate && <TimeRange startDate={project.startDate} endDate={project.endDate} />}
    </header>
    <div>
      <div class="flex gap-1">
        { project.roles?.length && (
          <span class="font-bold opacity-75">
            {project.roles.slice(0, -1).join(', ') + ' & ' + project.roles.at(-1)}
          </span>
        )}
        { project.entity && (
          <span>
            at&nbsp;
            {project.entity}
          </span>
        )}
      </div>
      { project.description && (<p class="font-light leading-tight">{project.description}</p>)}
      { project.highlights?.length && (
        <ul class="ml-4 mt-1 list-disc list-outside font-light leading-tight marker:text-secondary">
          {project.highlights.map((highlight) => <li>{highlight}</li>)}
        </ul>
      )}
      { project.keywords?.length && (
        <ul class="mt-1 flex flex-wrap gap-1 font-light">
          {project.keywords.map((keyword) => <li class="rounded bg-neutral-100 px-1 py-0.5">{keyword}</li>)}
        </ul>
      )}
    </div>
  </article>
);

const Projects = ({ projects }: { projects: ResumeSchema['projects'] }) => (
  <>
    { projects?.length && (
      <section class="m-4">
        <SectionHeading>Projects</SectionHeading>
        <div class="mt-2 flex flex-col gap-2">
          { projects.map((project) => Project(project))}
        </div>
      </section>
    )}
  </>
);

export default Projects;
