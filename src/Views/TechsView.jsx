import { pageTransitions } from '../animations/pageTransition.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Technology } from '../components/Technology.jsx';
import { formationData } from '../data/formationData.js';
import { CustomLabel } from '../components/CustomLabel.jsx';
import { ReactLogo } from '../logos/ReactLogo.jsx';
import { VueLogo } from '../logos/VueLogo.jsx';

export const TechsView = () => {
  return (
    <motion.section
      className="page-container techs-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <CustomLabel label="Formación React" icon={<ReactLogo height={28} />} />
      {formationData.react.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
      <CustomLabel label="Formación Vue" icon={<VueLogo height={28.5} />} logoStyle="move-bottom" />
      {formationData.vue.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
    </motion.section>
  );
};
