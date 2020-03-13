/* eslint-disable react/prop-types */
import React from 'react';
import cx from 'classnames';
import css from './texts.css';

import Span from './Span';

export default function TextOff(props) {
  const { children, text, className, ...rest } = props;
  const classe = cx(css.TextOff, 'text-off', 'contrast', className);
  return (
    <Span className={classe} {...rest}>
      {children || text}
    </Span>
  );
}
