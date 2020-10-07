/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';
import css from '../form-domus.css';
import CampoContent from '../CampoContent';
import { getImageByType } from '../../Images/form';
import useTheme from '../../DomusThemeProvider/useTheme';

function bgColor({ model, theme, disabled }, hover) {
  if (model === 'text') return hover && !disabled ? 'rgba(255, 255, 255, 0.3)' : 'transparent';
  if (model === 'default') return hover ? theme.bgsecundary.background : '#ffffff';
  return hover ? theme.bgsecundary.background : theme.bgcontrast.background;
}

function color({ model, theme, disabled }, hover) {
  if (model === 'text') return disabled ? 'rgba(255, 255, 255, 0.5)' : '#ffffff';
  if (model === 'default') return hover ? theme.bgsecundary.color : theme.primary;
  return hover ? theme.bgcontrast.color : theme.bgsecundary.color;
}

const Btn = styled.button`
  background-color: ${(props) => bgColor(props)} !important;
  color: ${(props) => color(props)} !important;
  :hover {
    background-color: ${(props) => bgColor(props, true)} !important;
    color: ${(props) => color(props, true)} !important;
  }
`;

export default function ButtonCampo(props) {
  const { theme } = useTheme();
  const { children, wchild, model, icon, iconR, style, className, customTheme, ...rest } = props;

  const styleCss = {
    [css.button]: true,
    [css.btnDefault]: !!(model === 'default'),
    [css.btnText]: !!(model === 'text'),
    [css.btnSubmit]: !!(model === 'submit'),
    [css.btnIcon]: !!icon,
    [css.btnIconR]: !!iconR,
    primary: !!(model === 'default'),
    [css.disabled]: rest.disabled,
  };
  const s = {
    ...style,
    backgroundImage: icon || iconR ? `url(${getImageByType(icon || iconR, true)})` : 'none',
  };

  const classe = cx(styleCss, className);

  return (
    <CampoContent wchild={wchild} disabled={!!rest.disabled}>
      <Btn
        {...rest}
        className={classe}
        model={model}
        theme={{ ...theme, ...customTheme }}
        style={s}
      >
        {children}
      </Btn>
    </CampoContent>
  );
}

ButtonCampo.propTypes = {
  children: PropTypes.any,
  wchild: PropTypes.string,
  model: PropTypes.oneOf([null, 'text', 'default', 'submit']),
  style: PropTypes.object,
  icon: PropTypes.string,
  iconR: PropTypes.string,
  className: PropTypes.string,
  customTheme: PropTypes.object,
};

ButtonCampo.defaultProps = {
  children: null,
  wchild: '',
  model: 'default',
  style: {},
  icon: null,
  iconR: null,
  className: null,
  customTheme: {},
};
