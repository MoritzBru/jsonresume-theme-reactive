import type { ResumeSchema } from '../../resumeSchema.d.ts';
import SectionHeading from './helper/SectionHeading.js';
import TimeRange from './helper/TimeRange.js';
import MaybeLink from './helper/MaybeLink.js';
import { i18n } from './Theme';

const Project = (project: Exclude<ResumeSchema['projects'], undefined>[number]) => (
  <article>
    <header class="between">
      {project.name && (
        <h3 class="font-bold">
          <MaybeLink url={project.url}>{project.name}</MaybeLink>
        </h3>
      )}
      {project.startDate && <TimeRange startDate={project.startDate} endDate={project.endDate} />}
    </header>
    <div class="between">
      {project.roles?.length && (
        <p class="subheading">
          {project.roles.length > 1 ? `${project.roles.slice(0, -1).join(', ')} & ${project.roles.at(-1)}` : project.roles.join()}
        </p>
      )}
      {project.entity && <p>{project.entity}</p>}
    </div>
    <div class="mt-0.5 flex flex-col gap-y-0.5">
      {project.description && (<p class="font-light leading-tight">{project.description}</p>)}
      {project.highlights?.length && (
        <ul class="list">
          {project.highlights.map((highlight) => <li>{highlight}</li>)}
        </ul>
      )}
      {project.keywords?.length && <p class="font-light">{project.keywords.join(', ')}</p>}
    </div>
  </article>
);

const Projects = ({ projects }: { projects: ResumeSchema['projects'] }) => (
  <>
    {projects?.length && (
      <section class="m-4">
        <SectionHeading>{i18n['sections.projects']}</SectionHeading>
        <div class="array">
          {projects.map((project) => Project(project))}
        </div>
      </section>
    )}
  </>
);

export default Projects;
