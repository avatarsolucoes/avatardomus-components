/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from '../form-domus.css';

// COMPONENTS
import Grupo from '../Grupo';
import UnFormCheckToogle from './index';

export default function LineToogle(props) {
  const { children, className, label, name, onChange, checked, ...rest } = props;
  const classGrupo = cx(css.LineToogle, className);
  return (
    <Grupo className={classGrupo} fixed between>
      <div className={css.lineToogleText}>
        {children || label}
        <label htmlFor={name} className={css.lineToogleLabel} />
      </div>
      <div>
        <UnFormCheckToogle name={name} onChange={onChange} checked={checked} {...rest} />
      </div>
    </Grupo>
  );
}

LineToogle.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

LineToogle.defaultProps = {
  name: `nonamed-linetoogle-${Math.random()}`,
  className: null,
  label: null,
  children: null,
  onChange: () => {},
  checked: false,
};
