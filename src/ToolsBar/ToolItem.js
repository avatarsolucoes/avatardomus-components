import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './toolsbar.css';

export default function ToolItem(props) {
  const { children, className, ...rest } = props;
  const classMain = cx(css.toolsbarItem, 'toolsbar-item', className);
  return (
    <div className={classMain} {...rest}>
      {children}
    </div>
  );
}

ToolItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

ToolItem.defaultProps = {
  children: null,
  className: null,
};
