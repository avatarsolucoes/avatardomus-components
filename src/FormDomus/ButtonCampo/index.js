/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function ButtonCampo(props) {
  const { children, wchild, ...rest } = props;

  return (
    <div className={cx('campo', wchild)}>
      <button {...rest}>{children}</button>
    </div>
  );
}

ButtonCampo.propTypes = {
  children: PropTypes.any,
  wchild: PropTypes.string,
};

ButtonCampo.defaultProps = {
  children: null,
  wchild: '',
};
