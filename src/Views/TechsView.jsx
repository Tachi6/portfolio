import { pageTransitions } from '../animations/pageTransition.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Technology } from '../components/Technology.jsx';
import { formationData } from '../data/formationData.js';
import { CustomLabel } from '../components/CustomLabel.jsx';
import { ReactLogo } from '../logos/ReactLogo.jsx';
import { VueLogo } from '../logos/VueLogo.jsx';
import { FlutterLogo } from '../logos/FlutterLogo.jsx';
import { CodingLogo } from '../logos/CodingLogo.jsx';
import { GitHubLogo } from '../logos/GitHubLogo.jsx';
import { VSCodeLogo } from '../logos/VSCodeLogo.jsx';
import { MediumLinkButton } from '../components/MediumButton.jsx';
import { HtmlLogo } from '../logos/HtmlLogo.jsx';
import { CssLogo } from '../logos/CssLogo.jsx';
import { JavaScriptLogo } from '../logos/JavaScriptLogo.jsx';
import { TypeScriptLogo } from '../logos/TypeScriptLogo.jsx';
import { BootstrapLogo } from '../logos/BootstrapLogo.jsx';
import { DartLogo } from '../logos/DartLogo.jsx';
import { PythonLogo } from '../logos/PythonLogo.jsx';
import { PostgreSQLLogo } from '../logos/PostgreSQLLogo.jsx';
import { useState } from 'react';
import { TechButtonContext } from '../context/TechButtonContext.jsx';
import { ViewAllLogo } from '../logos/ViewAllLogo.jsx';

export const TechsView = () => {
  const [selectedButton, setSelectedButton] = useState();

  const selectButton = (button) => setSelectedButton(button);

  return (
    <motion.section
      className="page-container techs-container"
      initial={pageTransitions.initial}
      animate={pageTransitions.animate}
      exit={pageTransitions.exit}
    >
      <TechButtonContext value={selectedButton}>
        <div className="technologies">
          <MediumLinkButton logo={<ViewAllLogo />} label="Todos" selectButton={selectButton} />
          <MediumLinkButton logo={<HtmlLogo />} label="HTML" selectButton={selectButton} />
          <MediumLinkButton logo={<CssLogo />} label="CSS" selectButton={selectButton} />
          <MediumLinkButton logo={<JavaScriptLogo />} label="JavaScript" selectButton={selectButton} />
          <MediumLinkButton logo={<TypeScriptLogo />} label="TypeScript" selectButton={selectButton} />
          <MediumLinkButton logo={<BootstrapLogo />} label="Bootstrap" selectButton={selectButton} />
          <MediumLinkButton logo={<GitHubLogo />} label="GitHub" selectButton={selectButton} />
          <MediumLinkButton logo={<ReactLogo />} label="React" selectButton={selectButton} />
          <MediumLinkButton logo={<VueLogo />} label="Vue.js" selectButton={selectButton} />
          <MediumLinkButton logo={<FlutterLogo />} label="Flutter" selectButton={selectButton} />
          <MediumLinkButton logo={<DartLogo />} label="Dart" selectButton={selectButton} />
          <MediumLinkButton logo={<PostgreSQLLogo />} label="PostgreSQL" selectButton={selectButton} />
          <MediumLinkButton logo={<PythonLogo />} label="Python" selectButton={selectButton} />
          <MediumLinkButton logo={<CodingLogo />} label="Otros" selectButton={selectButton} />
        </div>
      </TechButtonContext>
      <CustomLabel label={`Formación ${selectedButton}`} icon={<ReactLogo />} />
      {formationData.react.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
      <CustomLabel label="Formación Vue" icon={<VueLogo />} logoStyle="move-bottom" />
      {formationData.vue.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
      <CustomLabel label="Formación Flutter" icon={<FlutterLogo />} logoStyle="move-bottom" />
      {formationData.flutter.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
      <CustomLabel label="Formación Git-GitHub" icon={<GitHubLogo />} logoStyle="move-bottom" />
      {formationData.gitHub.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
      <CustomLabel label="Lenguajes de programación" icon={<CodingLogo />} logoStyle="move-bottom" />
      {formationData.languages.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
      <CustomLabel label="Formación en programación" icon={<VSCodeLogo />} logoStyle="move-bottom" />
      {formationData.programming.map((formation) => (
        <Technology key={formation.center.name + formation.course} course={formation} />
      ))}
    </motion.section>
  );
};
