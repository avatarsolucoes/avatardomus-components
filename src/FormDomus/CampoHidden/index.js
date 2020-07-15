import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

export default function CampoHide(props) {
  const { name, ...rest } = props;
  return <Input type="hidden" name={name} {...rest} />;
}

CampoHide.propTypes = {
  name: PropTypes.string,
};
CampoHide.defaultProps = {
  name: `noname-hidden-${Math.random()}`,
};
