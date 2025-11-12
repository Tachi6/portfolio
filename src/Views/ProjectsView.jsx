import { pageTransitions } from '../animations/pageTransition';
import { Projects } from '../components/Projects';
import { projectsData } from '../data/projectsData.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { ReactLogo } from '../logos/ReactLogo';
import { VueLogo } from '../logos/VueLogo';
import { JavaScriptLogo } from '../logos/JavaScriptLogo';
import { CustomLabel } from '../components/CustomLabel.jsx';

export const ProjectsView = () => {
  return (
    <motion.section
      className="page-container projects-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <Projects
        label={<CustomLabel label="Proyectos React" icon={<ReactLogo />} />}
        projects={[projectsData.portfolio, projectsData.quickTrivia]}
      />
      <Projects label={<CustomLabel label="Proyectos Vue" icon={<VueLogo />} />} projects={[projectsData.dragonBall]} />
      <Projects
        label={<CustomLabel label="Proyectos Vanilla JS" icon={<JavaScriptLogo />} />}
        projects={[projectsData.cocktails]}
      />
    </motion.section>
  );
};
