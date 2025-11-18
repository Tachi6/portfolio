import { createContext } from 'react';

export const ThemeContext = createContext(localStorage.getItem('isLightMode'));
