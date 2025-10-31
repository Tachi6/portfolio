import { useState } from 'react';

import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkIcon } from '../icons/LinkIcon';
import { BigButton } from './BigButton';

export const Project = ({ image, codeUrl, viewUrl, infoText, technologies }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="project" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="image-container">
        <img src={image} className={`project-image ${hover && 'project-image-hover'}`} />
        <div className={`project-buttons ${hover && 'show'}`}>
          <BigButton icon={<GitHubIcon />} text="Code" url={codeUrl} />
          <BigButton icon={<LinkIcon />} text="View" url={viewUrl} customClass="link" />
        </div>
      </div>
      <p className="project-text">{infoText}</p>
      <div className="technologies">{technologies}</div>
    </div>
  );
};
