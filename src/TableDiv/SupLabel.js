import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tablediv.css';

export default function SupLabel(props) {
  const { children, className, ...rest } = props;
  const classSpan = cx(css.tabledivSuplabel, 'table-div-suplabel', className);
  return (
    <span {...rest} className={classSpan}>
      {children}
    </span>
  );
}
SupLabel.propTypes = { children: PropTypes.any, className: PropTypes.string };
SupLabel.defaultProps = { children: null, className: null };
