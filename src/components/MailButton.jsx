import { useState } from 'react';

export const MailButton = () => {
  const [showPopup, setSHowPopup] = useState(false);

  const copyClipboard = () => {
    navigator.clipboard.writeText('dav6wat@gmail.com');
    setSHowPopup(true);
    setTimeout(() => setSHowPopup(false), 2000);
  };

  return (
    <div className="mail-button">
      <button className="mail" onClick={copyClipboard}>
        dav6wat@gmail.com
      </button>
      <p className={`clipboard ${showPopup ? 'show' : ''}`}>Copied to clipboard</p>
    </div>
  );
};
