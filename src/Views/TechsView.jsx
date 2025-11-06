import { pageTransitions } from '../animations/pageTransition.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Technology } from '../components/Technology.jsx';

export const TechsView = () => {
  return (
    <motion.section
      className="page-container techs-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <Technology />
    </motion.section>
  );
};
