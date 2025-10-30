import { Link } from 'react-router';

export const BigButton = ({ text, icon, customClass, url }) => {
  return (
    <div className="big-button-container">
      <Link role="button" className={`big-button ${customClass}`} to={url} target="_blank">
        {/* <button className={customClass} onClick={() => {}}> */}
        {icon}
        {/* </button> */}
      </Link>
      <p>{text}</p>
    </div>
  );
};
