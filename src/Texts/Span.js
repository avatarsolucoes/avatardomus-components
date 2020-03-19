import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './texts.css';

export default function Span(props) {
  const { children, text, className, size, bold, strong, ...rest } = props;
  const styles = size ? { fontSize: size, ...rest.style } : { ...rest.style };

  const classCss = {
    [css.textSpan]: true,
    [css.bold]: !!bold,
  };

  const classe = cx(classCss, 'text-span', { bold: !!bold }, className);
  return (
    <>
      {strong ? (
        <strong className={classe} {...rest} style={styles}>
          {children || text}
        </strong>
      ) : (
        <span className={classe} {...rest} style={styles}>
          {children || text}
        </span>
      )}
    </>
  );
}

Span.propTypes = {
  children: PropTypes.any,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  size: PropTypes.number,
  bold: PropTypes.bool,
  strong: PropTypes.bool,
};

Span.defaultProps = {
  children: null,
  text: null,
  className: null,
  size: null,
  bold: false,
  strong: false,
};
