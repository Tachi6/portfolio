import { useState } from 'react';
import { Link } from 'react-router';

export const BigLinkButton = ({ text, icon, customClass = '', url, clickAction }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="big-button-container">
      <Link
        role="button"
        className={`big-button ${customClass} ${hover ? 'hover' : ''}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        to={url}
        target="_blank"
        onClick={clickAction}
      >
        {icon}
      </Link>
      <p>{text}</p>
    </div>
  );
};
