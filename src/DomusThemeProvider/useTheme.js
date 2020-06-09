import { useContext } from 'react';

import ThemeContext from './ThemeContext';

/**
 * @typedef {import('./types').IThemeData} IThemeData
 * @typedef {import('./types').IUseTheme} IUseTheme
 */

/**
 * @function useTheme
 * @returns {IUseTheme}
 */
export default function useTheme() {
  const { theme, getTheme, getDefaultTheme } = useContext(ThemeContext);
  return {
    theme,
    getTheme,
    getDefaultTheme,
  };
}
