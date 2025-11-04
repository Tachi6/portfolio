import { useState } from 'react';

import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkIcon } from '../icons/LinkIcon';
import { BigLinkButton } from './BigLinkButton';

export const Project = ({ image, codeUrl, viewUrl, infoText, technologies }) => {
  const [hover, setHover] = useState(false);

  const clearHover = () => setHover(false);

  return (
    <div className={`project`} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="image-container">
        <img src={image} className={`project-image ${hover && 'project-image-hover'}`} />
        <div className={`project-buttons ${hover && 'show'}`}>
          <BigLinkButton icon={<GitHubIcon />} text="Code" url={codeUrl} clickAction={clearHover} />
          <BigLinkButton icon={<LinkIcon />} text="View" url={viewUrl} customClass="link" clickAction={clearHover} />
        </div>
      </div>
      <p className="project-text">{infoText}</p>
      <div className="technologies">{technologies}</div>
    </div>
  );
};
