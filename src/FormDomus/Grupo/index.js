import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from '../form-domus.css';

export default function Grupo(props) {
  const { children, className, fixed, between, ...rest } = props;

  const styleCss = { [css.grupo]: true, [css.fixed]: !!fixed, [css.between]: !!between };

  return (
    <div className={cx(styleCss, className)} {...rest}>
      {children}
    </div>
  );
}

Grupo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  between: PropTypes.bool,
};

Grupo.defaultProps = {
  children: null,
  className: null,
  fixed: false,
  between: false,
};
