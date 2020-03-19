import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ItemButtons(props) {
  const { children, className, ...rest } = props;

  const classTools = classNames('toolsbar-item', 'toolsbar-buttons', className);
  return (
    <div {...rest} className={classTools}>
      {children}
    </div>
  );
}

ItemButtons.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  text: PropTypes.string,
};

ItemButtons.defaultProps = {
  children: null,
  className: null,
  text: null,
};
