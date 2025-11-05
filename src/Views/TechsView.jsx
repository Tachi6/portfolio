import { pageTransitions } from '../animations/pageTransition.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export const TechsView = () => {
  return (
    <motion.section
      className="page-container about-me-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    ></motion.section>
  );
};
