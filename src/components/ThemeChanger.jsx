import { useEffect, useState } from 'react';
import { DarkModeIcon } from '../icons/DarkModeIcon';
import { LightModeIcon } from '../icons/LightModeIcon';

export const ThemeChanger = () => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode'));

  useEffect(() => {
    const obtainOSTheme = () => {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setThemeMode(systemTheme);
      return systemTheme;
    };

    document.body.className = themeMode === null ? obtainOSTheme() : themeMode;
  }, [themeMode]);

  const toogleThemeMode = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';

    localStorage.setItem('themeMode', newThemeMode);
    setThemeMode(newThemeMode);
  };

  return (
    <div className="theme-changer" role="button" onClick={toogleThemeMode}>
      <div className={`theme-selector ${themeMode === 'light' ? 'light-active' : ''}`}></div>
      <DarkModeIcon />
      <LightModeIcon />
    </div>
  );
};
