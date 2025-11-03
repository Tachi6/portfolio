import { Link } from 'react-router';

export const BigButton = ({ text, icon, customClass = '', url, clickAction }) => {
  return (
    <div className="big-button-container">
      <Link role="button" className={`big-button ${customClass}`} to={url} target="_blank" onClick={clickAction}>
        {/* <button className={customClass} onClick={() => {}}> */}
        {icon}
        {/* </button> */}
      </Link>
      <p>{text}</p>
    </div>
  );
};
