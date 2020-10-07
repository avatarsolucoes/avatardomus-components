import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tablediv.css';

export default function DivCell(props) {
  const { children, className, style, width, ...rest } = props;
  const classCell = cx(css.tabledivCell, 'table-div-cell', className);
  const styles = { ...style };
  if (width) {
    styles.width = width;
    styles.maxWidth = width;
  }
  return (
    <div {...rest} className={classCell} style={styles}>
      {children}
    </div>
  );
}
DivCell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
DivCell.defaultProps = { children: null, className: null, style: {}, width: null };
