/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getImageByType } from '../../Images/form';
import css from '../form-domus.css';

import CampoContent from '../CampoContent';

export default function LabelButton(props) {
  const { id, name, type, value, lbicon, className, onClick, ...rest } = props;
  const classe = cx({ [css.lbicon]: true, bgcontrast: true, [css.labelfix]: true }, className);
  const styleLabel = { backgroundImage: `url(${getImageByType(lbicon, true)})` };

  return (
    <CampoContent
      className={css.labelfix}
      style={{
        width: 44,
        maxWidth: 44,
        padding: 0,
        margin: 0,
      }}
    >
      <button
        id={id || `idbutton-${name}`}
        data-lbicon={lbicon}
        name={name}
        type={type}
        value={value}
        style={styleLabel}
        className={classe}
        onClick={onClick}
        {...rest}
      />
    </CampoContent>
  );
}

LabelButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  lbicon: PropTypes.string,
  className: PropTypes.string,
  wchild: PropTypes.oneOf(['', 'w50', 'w70', 'w100']),
  hidden: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

LabelButton.defaultProps = {
  id: null,
  name: `noname-${Math.random()}`,
  lbicon: 'unknow',
  className: null,
  wchild: '',
  hidden: false,
  type: 'button',
  value: '',
  onClick: () => {},
};
