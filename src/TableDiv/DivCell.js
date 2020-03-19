import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tablediv.css';

export default function DivCell(props) {
  const { children, className, ...rest } = props;
  const classCell = cx(css.tabledivCell, 'table-div-cell', className);
  return (
    <div {...rest} className={classCell}>
      {children}
    </div>
  );
}
DivCell.propTypes = { children: PropTypes.any, className: PropTypes.string };
DivCell.defaultProps = { children: null, className: null };
