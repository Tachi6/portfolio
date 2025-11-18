import { useState } from 'react';
import { Link } from 'react-router';

export const SmallLinkButton = ({ content, url }) => {
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
        download={!url.includes('http') && 'CV_David_Gonzalez.pdf'}
      >
        {content}
      </Link>
    </div>
  );
};
