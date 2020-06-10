import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';
import css from '../form-domus.css';
import useTheme from '../../DomusThemeProvider/useTheme';

const DivCampoContent = styled.div`
  input:focus {
    border: 1px solid ${({ theme }) => theme.secundary};
  }

  input:focus + label {
    background-color: ${({ theme }) => theme.secundary};
  }

  label:hover {
    background-color: ${({ theme }) => theme.secundary};
  }

  button:hover {
    background-color: ${({ theme }) => theme.secundary};
  }
`;

export default function CampoContent(props) {
  const { theme } = useTheme();
  const { children, className, wchild, disabled, ...rest } = props;
  const styleCss = {
    [css.campo]: true,
    [css.w50]: wchild === 'w50',
    [css.w70]: wchild === 'w70',
    [css.w100]: wchild === 'w100',
    [css.disabled]: !!disabled,
  };

  return (
    <DivCampoContent className={cx(styleCss, className)} {...rest} theme={theme}>
      {children}
    </DivCampoContent>
  );
}

CampoContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  wchild: PropTypes.oneOf(['w50', 'w70', 'w100']),
  disabled: PropTypes.bool,
};

CampoContent.defaultProps = {
  children: null,
  className: null,
  wchild: null,
  disabled: false,
};
