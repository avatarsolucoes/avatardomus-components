import PropTypes from 'prop-types';
/**
 * @typedef {import('./types').IThemeData} IThemeData
 * @exports IThemeData
 */

/** @type {IThemeData} */
export const defaultTheme = {
  primary: '#122A54',
  secundary: '#0D7ECC',
  contrast: '#BB1806',
  bgprimary: { color: '#FFFFFF', background: '#122A54' },
  bgsecundary: { color: '#FFFFFF', background: '#0D7ECC' },
  bgcontrast: { color: '#FFFFFF', background: '#BB1806' },
  charts: {
    primary: '#8884d8',
    secundary: '#82ca9d',
    contrast: '#FF0000',
    primaryContrast: '#6f3b64',
    secundaryContrast: '#56b3CC',
  },
  logo: {
    url: '',
  },
  headerImageBottom: {
    image: '',
  },
};

export const shapeBgColor = {
  color: PropTypes.string,
  background: PropTypes.string,
};

export const shapeChartsColor = {
  primary: PropTypes.string,
  secundary: PropTypes.string,
  contrast: PropTypes.string,
  primaryContrast: PropTypes.string,
  secundaryContrast: PropTypes.string,
};

export const shapeLogo = {
  url: PropTypes.string,
};

export const shapeTheme = {
  primary: PropTypes.string,
  secundary: PropTypes.string,
  contrast: PropTypes.string,
  bgprimary: PropTypes.shape(shapeBgColor),
  bgsecundary: PropTypes.shape(shapeBgColor),
  bgcontrast: PropTypes.shape(shapeBgColor),
  charts: PropTypes.shape(shapeChartsColor),
  logo: PropTypes.shape(shapeLogo),
  headerImageBottom: PropTypes.shape(shapeLogo),
};
