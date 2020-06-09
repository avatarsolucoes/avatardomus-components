import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import { defaultTheme, shapeTheme } from './defaultTheme';
import GlobalStyled from './GlobalStyled';

/**
 * @typedef {import('./types').IThemeData} IThemeData
 * @exports IThemeData
 * @exports defaultTheme
 */

export default function ThemeProvider(props) {
  const { children, theme } = props;

  /**
   * @function getTheme
   * @returns {IThemeData}
   */
  function getTheme() {
    return theme;
  }

  /**
   * @function getTheme
   * @returns {IThemeData}
   */
  function getDefaultTheme() {
    return defaultTheme;
  }
  return (
    <ThemeContext.Provider value={{ theme, getTheme, getDefaultTheme }}>
      <GlobalStyled />
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.defaultProps = {
  children: null,
  theme: defaultTheme,
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
  // theme: PropTypes.any,
  theme: PropTypes.shape(shapeTheme),
};
