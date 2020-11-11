import React from 'react';
import PropTypes from 'prop-types';
import { Scope } from '@rocketseat/unform';

export default function Campo(props) {
  const { path, name, children } = props;

  return <Scope path={name || path}>{children}</Scope>;
}

Campo.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Campo.defaultProps = {
  path: `path`,
  name: '',
};
