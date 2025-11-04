import { pageTransitions } from '../animations/pageTransition';
import { Projects } from '../components/Projects';
import { Data } from '../data/data';
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
        projects={[Data.portfolio, Data.quickTrivia]}
      />
      <Projects
        label="Proyectos Vue"
        icon={<VueLogo height={28.5} />}
        logoStyle="move-bottom"
        projects={[Data.dragonBall]}
      />
      <Projects
        label="Proyectos Vanilla JS"
        icon={<JavaScriptLogo height={24.5} />}
        logoStyle="move-bottom"
        projects={[Data.cocktails]}
      />
    </motion.section>
  );
};
