import { Abilities } from '../components/Abilities';
import { Contact } from '../components/Contact';
import { Projects } from '../components/Projects';
import { projectsData } from '../data/projectsData.js';
import mainPhoto from '../assets/images/main-photo.jpg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { pageTransitions } from '../animations/pageTransition';
import { Techs, techsData } from '../data/techsData.jsx';
import { CustomLabel } from '../components/CustomLabel.jsx';

export const HomeView = () => {
  return (
    <motion.section
      className="page-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <div className="top-content">
        <div className="main-info">
          <h1>
            David Gonzalez <span className="break-line">de la Rosa</span>
          </h1>
          <Abilities abilities={[techsData.html, techsData.css, techsData.js, techsData.ts, techsData.react]} />
          <p className="description-text">
            Creador de diseños elegantes e intuitivos con código limpio y estructurado.
            <br />
            Transformo ideas eficientemente en soluciones digitales cuidando los detalles.
          </p>
          <Contact />
        </div>
        <img src={mainPhoto} alt="main-photo" className="main-photo" />
      </div>
      <Projects
        label={<CustomLabel label="Proyectos destacados" />}
        projects={[projectsData.cocktails, projectsData.dragonBall]}
      />
    </motion.section>
  );
};
