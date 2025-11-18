import { useEffect, useState } from 'react';
import { DarkModeIcon } from '../icons/DarkModeIcon';
import { LightModeIcon } from '../icons/LightModeIcon';

export const ThemeChanger = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.className = isLightMode ? 'light' : 'dark';
  }, [isLightMode]);

  const toogleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="theme-changer" role="button" onClick={toogleLightMode}>
      <div className={`theme-selector ${isLightMode ? 'light-active' : ''}`}></div>
      <DarkModeIcon />
      <LightModeIcon />
    </div>
  );
};
