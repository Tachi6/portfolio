import { pageTransitions } from '../animations/pageTransition.js';
import { TextBox } from '../components/TextBox.jsx';
import { aboutData } from '../data/AboutData.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export const AboutView = () => {
  return (
    <motion.section
      className="page-container about-me-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <h2>Conóceme más</h2>
      {aboutData.map((data) => (
        <TextBox key={data.label} label={data.label} content={data.content} />
      ))}
    </motion.section>
  );
};
