import { Link } from 'react-router';

export const SmallButon = ({ text, icon, url, customClass = '' }) => {
  return (
    <div className="small-button-container">
      {url && (
        <Link
          role="button"
          className={`small-button ${customClass}`}
          to={url}
          target="_blank"
          download={customClass === 'cv' ? true : false}
        >
          {icon}
          {text}
        </Link>
      )}
      {customClass === 'mail' && (
        <button
          className={customClass}
          onClick={() => {
            navigator.clipboard.writeText('dav6wat@gmail.com');
          }}
        >
          {text}
        </button>
      )}
    </div>
  );
};
