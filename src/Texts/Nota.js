import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './texts.css';

import Span from './Span';

export default function Nota(props) {
  const { children, text, bold, inline, className, style, ...rest } = props;

  const classCss = {
    [css.textNota]: true,
    [css.bold]: !!bold,
  };

  const classe = cx(classCss, 'text-nota', { bold: !!bold }, className);

  const styles = { ...style };
  if (inline) styles.display = 'inline';

  return (
    <Span style={styles} className={classe} {...rest}>
      {children || text}
    </Span>
  );
}

Nota.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  bold: PropTypes.bool,
  strong: PropTypes.bool,
  inline: PropTypes.bool,
  style: PropTypes.object,
};

Nota.defaultProps = {
  children: null,
  text: null,
  className: null,
  size: null,
  bold: false,
  strong: false,
  inline: null,
  style: {},
};
