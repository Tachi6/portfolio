import { useState } from 'react';
import { CopyIcon } from '../icons/CopyIcon';

export const MailButton = () => {
  const [showPopup, setSHowPopup] = useState(false);
  const [hover, setHover] = useState(false);

  const copyClipboard = () => {
    navigator.clipboard.writeText('dav6wat@gmail.com');
    setSHowPopup(true);
    setTimeout(() => setSHowPopup(false), 2000);
  };

  return (
    <div className="mail-button">
      <button
        className={`mail ${hover ? 'hover' : ''} `}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={copyClipboard}
      >
        dav6wat@gmail.com
        <CopyIcon />
      </button>
      <p className={`clipboard ${showPopup ? 'show' : ''}`}>Copied to clipboard</p>
    </div>
  );
};
