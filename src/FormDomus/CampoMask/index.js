/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Mask from './Mask';
import css from '../form-domus.css';
import { getImageByType } from '../../Images/form';
import CampoContent from '../CampoContent';

export default function CampoMask(props) {
  const { name, lbicon, className, ...rest } = props;

  const styleCss = {
    [css.lbicon]: true,
  };

  const classe = cx(styleCss, className);
  const styleLabel = {
    backgroundImage: `url(${getImageByType(lbicon, true)})`,
  };

  return (
    <CampoContent className={classe} disabled={!!rest.disabled}>
      <Mask name={name} className="primary" {...rest} />
      <label data-lbicon={lbicon} htmlFor={name} className="bgcontrast" style={styleLabel} />
    </CampoContent>
  );
}

CampoMask.propTypes = {
  name: PropTypes.string,
  lbicon: PropTypes.string,
  className: PropTypes.string,
};

CampoMask.defaultProps = {
  name: `noname-${Math.random()}`,
  lbicon: 'unknow',
  className: null,
};
