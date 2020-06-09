/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input } from '@rocketseat/unform';
import { getImageByType } from '../../Images/form';

export default function Campo(props) {
  const { name, lbicon, campoClass, ...rest } = props;

  const classe = classNames('campo', 'lbicon', campoClass, {
    disabled: !!rest.disabled,
  });

  const styleLabel = {
    backgroundImage: `url(${getImageByType(lbicon, true)})`,
  };

  return (
    <div className={classe}>
      <Input name={name} className="primary" {...rest} />
      <label data-lbicon={lbicon} htmlFor={name} className="bgcontrast hover" style={styleLabel} />
    </div>
  );
}

Campo.propTypes = {
  name: PropTypes.string.isRequired,
  lbicon: PropTypes.string,
  campoClass: PropTypes.string,
};

Campo.defaultProps = {
  campoClass: null,
  lbicon: 'unknow',
};
