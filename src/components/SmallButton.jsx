import { useState } from 'react';

export const SmallButton = ({ content, action }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="small-button-container">
      <button
        className={`small-button ${hover ? 'hover' : ''}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={action}
      >
        {content}
      </button>
    </div>
  );
};
