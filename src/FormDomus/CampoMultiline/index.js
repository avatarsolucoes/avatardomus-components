/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Input } from '@rocketseat/unform';
import css from '../form-domus.css';

import CampoContent from '../CampoContent';

export default function CampoMultiline(props) {
  const { name, className, wchild, hidden, ...rest } = props;

  const styleCss = {
    [css.lbicon]: false,
  };

  const classe = cx(styleCss, className);

  return (
    <CampoContent className={classe} wchild={wchild} disabled={!!rest.disabled} hidden={hidden}>
      <Input multiline name={name} className="primary" {...rest} />
    </CampoContent>
  );
}

CampoMultiline.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  wchild: PropTypes.oneOf(['', 'w50', 'w70', 'w100']),
  hidden: PropTypes.bool,
};

CampoMultiline.defaultProps = {
  name: `noname-${Math.random()}`,
  className: null,
  wchild: '',
  hidden: false,
};
