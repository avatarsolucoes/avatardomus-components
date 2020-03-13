/* eslint-disable react/prop-types */
import React from 'react';
import cx from 'classnames';

import css from './texts.css';

export default function PBloco(props) {
  const { children, className, right, line, ...rest } = props;
  const styles = right ? { textAlign: 'right', ...rest.style } : { ...rest.style };

  const classe = cx(css.pBloco, { [css.line]: !!line }, 'pBloco', { line: !!line }, className);
  return (
    <p className={classe} {...rest} style={styles}>
      {children}
    </p>
  );
}
