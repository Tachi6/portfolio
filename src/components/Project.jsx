import { useState } from 'react';

import { GitHubLogo } from '../logos/GitHubLogo';
import { LinkIcon } from '../icons/LinkIcon';
import { BigLinkButton } from './BigLinkButton';

export const Project = ({ name, image, codeUrl, viewUrl, infoText, technologies }) => {
  const [hover, setHover] = useState(false);

  const clearHover = () => window.innerWidth <= 960 && setHover(false);

  return (
    <div
      className={`project ${hover ? 'hover' : ''}`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="image-container">
        <img src={image} className={`project-image ${hover ? 'project-image-hover' : ''}`} />
        <div className={`project-buttons ${hover ? 'show' : ''}`}>
          <BigLinkButton icon={<GitHubLogo />} text="Code" url={codeUrl} clickAction={clearHover} />
          <BigLinkButton icon={<LinkIcon />} text="View" url={viewUrl} clickAction={clearHover} />
        </div>
      </div>
      <div className="technologies">
        <h3 className="expanded">{name}</h3>
        {technologies}
      </div>

      <p className="project-text">{infoText}</p>
    </div>
  );
};
