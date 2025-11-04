import { Project } from './Project';
import { TechnologyBox } from './TechnologyBox';

export const Projects = ({ label, icon, projects, logoStyle = '' }) => {
  return (
    <div>
      <h2>
        <span className={`project-logo ${logoStyle}`}>{icon}</span>
        {label}
      </h2>
      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.codeUrl}
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
