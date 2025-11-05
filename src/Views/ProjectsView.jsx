import { pageTransitions } from '../animations/pageTransition';
import { Projects } from '../components/Projects';
import { projectsData } from '../data/projectsData.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { ReactLogo } from '../icons/ReactLogo';
import { VueLogo } from '../icons/VueLogo';
import { JavaScriptLogo } from '../icons/JavaScriptLogo';

export const ProjectsView = () => {
  return (
    <motion.section
      className="page-container projects-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <Projects
        label="Proyectos React"
        icon={<ReactLogo height={28} />}
        projects={[projectsData.portfolio, projectsData.quickTrivia]}
      />
      <Projects
        label="Proyectos Vue"
        icon={<VueLogo height={28.5} />}
        logoStyle="move-bottom"
        projects={[projectsData.dragonBall]}
      />
      <Projects
        label="Proyectos Vanilla JS"
        icon={<JavaScriptLogo height={24.5} />}
        logoStyle="move-bottom"
        projects={[projectsData.cocktails]}
      />
    </motion.section>
  );
};
