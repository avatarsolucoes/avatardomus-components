/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Form } from '@rocketseat/unform';
import css from './form-domus.css';

import FormContext from './FormContext';

export default function FormContent(props) {
  const { children, className, initialData, width, onSubmit, customContext, ...rest } = props;
  const styleCss = { [css.formDomus]: true };

  return (
    <FormContext.Provider value={customContext}>
      <div className={cx(styleCss, className)} style={{ width }}>
        <Form initialData={initialData} onSubmit={onSubmit} {...rest}>
          {children}
        </Form>
      </div>
    </FormContext.Provider>
  );
}

FormContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  initialData: PropTypes.object,
  onSubmit: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  customContext: PropTypes.any,
};

FormContent.defaultProps = {
  children: null,
  className: null,
  initialData: {},
  onSubmit: () => {},
  width: '100%',
  customContext: {},
};
