/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Form } from '@rocketseat/unform';
import css from './form-domus.css';

export default function FormContent(props) {
  const { children, className, initialData, width, onSubmit, ...rest } = props;
  const styleCss = { [css.formDomus]: true };
  return (
    <div className={cx(styleCss, className)} style={{ width }}>
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
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

FormContent.defaultProps = {
  children: null,
  className: null,
  initialData: {},
  onSubmit: () => {},
  width: '100%',
};
