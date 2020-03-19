import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './texts.css';

import Span from './Span';

export default function Text(props) {
  const { children, text, className, ...rest } = props;

  const classCss = {
    [css.f14]: true,
  };

  const classe = cx(classCss, 'f14', className);

  return (
    <Span {...rest} className={classe}>
      {children || text}
    </Span>
  );
}

Text.propTypes = {
  children: PropTypes.any,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  text: null,
  className: null,
};
