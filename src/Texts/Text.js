import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './texts.css';

import Span from './Span';

export default function Text(props) {
  const { children, text, className, onDoubleClick, onClick, bold, ...rest } = props;

  const classCss = {
    [css.f14]: true,
  };

  const classe = cx(classCss, className);

  return (
    <Span
      bold={!!bold}
      className={classe}
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      {...rest}
    >
      {children || text}
    </Span>
  );
}

Text.propTypes = {
  children: PropTypes.any,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  onDoubleClick: PropTypes.func,
  onClick: PropTypes.func,
  bold: PropTypes.bool,
  title: PropTypes.string,
  style: PropTypes.object,
};

Text.defaultProps = {
  children: null,
  text: null,
  className: '',
  onDoubleClick: () => {},
  onClick: () => {},
  bold: false,
  title: '',
  style: {},
};
