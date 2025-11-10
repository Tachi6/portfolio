import { Project } from './Project';
import { TechnologyBox } from './TechnologyBox';

export const Projects = ({ label, projects }) => {
  return (
    <div>
      {label}
      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.name + project.codeUrl}
            name={project.name}
            image={project.image}
            codeUrl={project.codeUrl}
            viewUrl={project.viewUrl}
            infoText={project.infoText}
            technologies={project.technologies.map((technology) => (
              <TechnologyBox key={project.codeUrl + technology.type.name} logo={technology} />
            ))}
          />
        ))}
      </div>
    </div>
  );
};
