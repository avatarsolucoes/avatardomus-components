export interface ThemeBgColor {
  color: string;
  background: string;
}

export interface IThemeData {
  primary: string;
  secundary: string;
  contrast: string;
  bgprimary: ThemeBgColor;
  bgsecundary: ThemeBgColor;
  bgcontrast: ThemeBgColor;
  charts: {
    primary: string;
    secundary: string;
    contrast: string;
    primaryContrast: string;
    secundaryContrast: string;
  };
  logo: {
    url: string;
  }
}

export interface IUseTheme {
  theme: IThemeData;
  getTheme: IThemeData;
  getDefaultTheme: IThemeData;
}
