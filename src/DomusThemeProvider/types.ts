export interface ThemeBgColor {
  color: string;
  background: string;
}

export interface IChartsTheme {
  primary: string;
  secundary: string;
  contrast: string;
  primaryContrast: string;
  secundaryContrast: string;
}

export interface ILogoTheme {
  url: string;
}
export interface IThemeData {
  primary: string;
  secundary: string;
  contrast: string;
  bgprimary: ThemeBgColor;
  bgsecundary: ThemeBgColor;
  bgcontrast: ThemeBgColor;
  charts: IChartsTheme;
  logo: ILogoTheme;
}

export interface IUseTheme {
  theme: IThemeData;
  getTheme: IThemeData;
  getDefaultTheme: IThemeData;
}
