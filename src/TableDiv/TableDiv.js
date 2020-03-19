import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tablediv.css';

export default function TableDiv(props) {
  const { children, className, ...rest } = props;
  const classe = cx(css.tabledivMain, 'table-div-main', className);
  return (
    <div className={classe} {...rest}>
      {children}
    </div>
  );
}
TableDiv.propTypes = { children: PropTypes.any, className: PropTypes.string };
TableDiv.defaultProps = { children: null, className: null };
