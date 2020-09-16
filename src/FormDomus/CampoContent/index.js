import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';
import css from '../form-domus.css';
import useTheme from '../../DomusThemeProvider/useTheme';

const DivCampoContent = styled.div`
  select:focus {
    border: 1px solid ${({ theme }) => theme.secundary};
  }

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
  const { children, className, wchild, disabled, style, hidden, ...rest } = props;
  const styleCss = {
    [css.campo]: true,
    [css.w50]: wchild === 'w50',
    [css.w70]: wchild === 'w70',
    [css.w100]: wchild === 'w100',
    [css.disabled]: !!disabled,
    [css.hidden]: !!hidden,
  };

  // const styles = { ...style };
  // if (hidden) styles.display = 'none';

  return (
    <DivCampoContent className={cx(styleCss, className)} style={style} {...rest} theme={theme}>
      {children}
    </DivCampoContent>
  );
}

CampoContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  wchild: PropTypes.oneOf(['', 'w50', 'w70', 'w100']),
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  style: PropTypes.object,
};

CampoContent.defaultProps = {
  children: null,
  className: null,
  wchild: '',
  disabled: false,
  hidden: false,
  style: {},
};
