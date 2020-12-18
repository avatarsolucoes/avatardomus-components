import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tablediv.css';

export default function DivCell(props) {
  const { children, className, style, width, grow, ...rest } = props;
  const classCell = cx(css.tabledivCell, 'table-div-cell', className);
  const styles = { ...style };
  if (width) {
    styles.width = width;
    styles.maxWidth = width;
  }
  if (grow) {
    if (typeof grow === 'number') {
      styles.flexGrow = grow;
    } else {
      styles.flexGrow = 1;
    }
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
  grow: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};
DivCell.defaultProps = { children: null, className: null, style: {}, width: null, grow: null };
