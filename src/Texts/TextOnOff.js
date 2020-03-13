/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import TextOn from './TextOn';
import TextOff from './TextOff';

export default function TextOnOff(props) {
  const { children, text, className, online, ...rest } = props;
  const Result = online ? TextOn : TextOff;
  const defaultText = online ? 'Online' : 'Offline';

  return (
    <Result className={className} {...rest}>
      {children || text || defaultText}
    </Result>
  );
}
TextOnOff.propTypes = {
  online: PropTypes.bool,
  text: PropTypes.string,
};
TextOnOff.defaultProps = {
  online: false,
  text: null,
};
