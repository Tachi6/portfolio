import { pageTransitions } from '../animations/pageTransition';
import { Projects } from '../components/Projects';
import { Data } from '../data/data';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export const ProjectsView = () => {
  return (
    <motion.section
      className="page-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <Projects label="Proyectos destacados" projects={[Data.cocktails, Data.dragonBall]} />
      <Projects label="Proyectos destacados" projects={[Data.cocktails, Data.dragonBall]} />
      <Projects label="Proyectos destacados" projects={[Data.cocktails, Data.dragonBall]} />
      <Projects label="Proyectos destacados" projects={[Data.cocktails, Data.dragonBall]} />
      <Projects label="Proyectos destacados" projects={[Data.cocktails, Data.dragonBall]} />
    </motion.section>
  );
};
