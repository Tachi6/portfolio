import { useContext, useState } from 'react';
import { TechButtonContext } from '../context/TechButtonContext';

export const MediumLinkButton = ({ logo, label, ref, selectButton }) => {
  const [hover, setHover] = useState(false);

  const techButtonContext = useContext(TechButtonContext);

  return (
    <div className="medium-button-container">
      <button
        className={`medium-button ${hover ? 'hover' : ''} ${techButtonContext === ref ? 'selected' : ''}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => selectButton(ref)}
      >
        {logo}
      </button>
      <p>{label}</p>
    </div>
  );
};
