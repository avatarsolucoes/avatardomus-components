import React, { useContext } from 'react';
import chroma from 'chroma-js';
import { createGlobalStyle } from 'styled-components';
import ThemeContext from './ThemeContext';

function prepareColorsName(theme, key) {
  const color = theme[key].color || theme[key];
  return chroma(color).alpha(1);
}

const Global = createGlobalStyle`
  @keyframes fadeinMain{
	  0% { opacity:0; overflow: hidden; }
	  100% { opacity:1; overflow: hidden; }
  }

  body {
    background-color: ${({ theme }) => theme.bgprimary.background};
    color: ${({ theme }) => prepareColorsName(theme, 'bgprimary')};
    min-height: 100%;
    overflow-x: hidden;
    a { color: ${({ theme }) => prepareColorsName(theme, 'bgprimary')} };
  }

  h1, h2 {
    font-size: 18px;
    margin: 0 auto;
    text-align: center;
    padding: 0;
    padding-bottom: 10px;
  }
  h3, h4 {
    margin: 0 auto;
    padding: 0 0 6px 0;
  }

  h3 { font-size: 20px; }
  h4 { font-size: 16px; }

  p {
    font-size: 16px;
    padding: 0 0 6px 0;
    margin: 0 auto;
  }
  p + h1, p + h2, p + h3, p + h4 { padding-top: 6px; }
  ul, ol {
    display: block;
    max-width: 100%;
    padding: 0 8px;
    margin: 0;
  }
  ul li, ol li {
    font-size: 16px;
    margin: 0 0 2px 8px;
    padding: 2px;
  }

  .footer {
    max-height: 44px;
    display: flex;
    padding: 3px;
    img {
      display: block;
      margin: 0 auto;
    }
  };

  #root {
    height: 100vh;
    margin: 0 auto;
    position: relative;
  }

  #layout {
    height: 100%;
    transition: all 0.2s linear;
    animation: fadeinMain 0.3s linear;
  }

  #header, .header-content {
    display: block;
    margin: 0 auto;
    padding: 0;
    position: relative;
    border: 0;
  }
  #header{
    padding: 8px 4px 26px 4px;
    background-repeat: repeat-x;
    background-position: bottom left;
    background-size: 390px 16px;
  }

  .header-content {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .header-content.between {
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    display: block;
    margin:0 auto;
    max-height:44px;
  }

  .primary {
    color: ${({ theme }) => theme.primary}
  };

  .secundary {
    color: ${({ theme }) => theme.secundary}
  };

  .contrast {
    color: ${({ theme }) => theme.contrast}
  };

  .bgprimary {
    color: ${({ theme }) => theme.bgprimary.color};
    background: ${({ theme }) => theme.bgprimary.background};
  };

  .bgsecundary {
    color: ${({ theme }) => theme.bgsecundary.color};
    background: ${({ theme }) => theme.bgsecundary.background};
  };

  .bgcontrast {
    color: ${({ theme }) => theme.bgcontrast.color};
    background: ${({ theme }) => theme.bgcontrast.background};
  };

  @media screen and (min-width: 721px) {
	  h1, h2 { font-size: 26px; }
	  #header {
      padding: 14px;
      padding-bottom: 36px;
    }
	  .logo {
      max-height: 64px;
    }

	  .content {
      padding: 0 12px 12px 12px;
    }
  }

`;

export default function GlobalStyled() {
  const { theme } = useContext(ThemeContext);
  return <Global theme={theme} />;
}
