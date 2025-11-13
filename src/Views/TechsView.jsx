import { pageTransitions } from '../animations/pageTransition.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Technology } from '../components/Technology.jsx';
import { formationData } from '../data/formationData.js';
import { MediumLinkButton } from '../components/MediumButton.jsx';
import { useEffect, useState } from 'react';
import { TechButtonContext } from '../context/TechButtonContext.jsx';
import { techsData, Techs } from '../data/techsData.jsx';

export const TechsView = () => {
  const [formations, setFormations] = useState([]);
  const [selectedButton, setSelectedButton] = useState('all');

  const selectButton = (button) => setSelectedButton(button);

  useEffect(() => {
    setFormations(
      formationData.filter((formation) =>
        selectedButton === Techs.all ? formationData : formation.techs.includes(selectedButton)
      )
    );
  }, [selectedButton]);

  return (
    <motion.section
      className="page-container techs-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <TechButtonContext value={selectedButton}>
        <div className="technologies">
          {Object.entries(techsData).map((tech) => (
            <MediumLinkButton
              key={tech[0]}
              logo={tech[1].logo}
              label={tech[1].name}
              ref={tech[0]}
              selectButton={selectButton}
            />
          ))}
        </div>
      </TechButtonContext>
      <h2 className="courses-label">
        {selectedButton === Techs.all ? '' : techsData[selectedButton].logo}
        {selectedButton === Techs.all ? 'Todas las formaciones' : `Formación ${techsData[selectedButton].name}`}
      </h2>
      {formations.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
    </motion.section>
  );
};
