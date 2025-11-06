import { useState } from 'react';
import { Link } from 'react-router';

export const SmallLinkButon = ({ content, url }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="small-button-container">
      <Link
        role="button"
        className={`small-button ${hover ? 'hover' : ''}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        to={url}
        target="_blank"
        download={!url.includes('http') ? true : false}
      >
        {content}
      </Link>
    </div>
  );
};
