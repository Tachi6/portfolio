import { useState } from 'react';
import cocktailsImage from '../assets/cocktails.png';
import { CssLogo } from '../icons/CssLogo';
import { GitHubIcon } from '../icons/GitHubIcon';
import { HtmlLogo } from '../icons/HtmlLogo';
import { JavaScriptLogo } from '../icons/JavaScriptLogo';
import { LinkIcon } from '../icons/LinkIcon';
import { TechnologyBox } from './TechnologyBox';
import { TextButton } from './TextButton';
import { BigButton } from './BigButton';

export const Project = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="project" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="image-container">
        <img src={cocktailsImage} className={`project-image ${hover && 'project-image-hover'}`} />
        <div className="hide">
          <BigButton icon={<GitHubIcon />} text="Code" />
          <BigButton icon={<LinkIcon />} text="Open" customClass="link" />
        </div>
      </div>
      <p className="project-text">Busca inspiración y recetas de cocktails. Prueba y valora las creaciones.</p>
      <div className="projects">
        <TechnologyBox logo={<HtmlLogo height={24} />} />
        <TechnologyBox logo={<CssLogo height={24} />} />
        <TechnologyBox logo={<JavaScriptLogo height={24} />} />
      </div>
    </div>
  );
};
