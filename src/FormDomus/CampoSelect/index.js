/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Select from './select';
import CampoContent from '../CampoContent';
import css from '../form-domus.css';

export default function CampoSelect(props) {
  const { name, campoClass, ...rest } = props;

  const classe = cx({ [css.lbicon]: true }, campoClass);

  return (
    <CampoContent className={classe} disabled={!!rest.disabled}>
      <Select name={name} className="primary" {...rest} />
    </CampoContent>
  );
}

CampoSelect.propTypes = {
  name: PropTypes.string.isRequired,
  campoClass: PropTypes.string,
};

CampoSelect.defaultProps = {
  campoClass: null,
};
