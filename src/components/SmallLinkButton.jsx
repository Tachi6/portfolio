import { Link } from 'react-router';

export const SmallLinkButon = ({ content, url, customClass = '' }) => {
  return (
    <div className="small-button-container">
      <Link
        role="button"
        className={`small-button ${customClass}`}
        to={url}
        target="_blank"
        download={customClass === 'cv' ? true : false}
      >
        {content}
      </Link>
    </div>
  );
};
