/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Form } from '@rocketseat/unform';

// import useTheme from '../DomusThemeProvider/useTheme';

export default function FormContent(props) {
  // const { theme } = useTheme();
  const { children, className, initialData, onSubmit, ...rest } = props;

  return (
    <div className={cx('formDomus', className)}>
      <Form initialData={initialData} onSubmit={onSubmit} {...rest}>
        {children}
      </Form>
    </div>
  );
}

FormContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  initialData: PropTypes.object,
  onSubmit: PropTypes.func,
};

FormContent.defaultProps = {
  children: null,
  className: null,
  initialData: {},
  onSubmit: () => {},
};
