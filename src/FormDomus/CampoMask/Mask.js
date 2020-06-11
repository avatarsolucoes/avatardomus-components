import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { useField } from '@rocketseat/unform';

export default function Mask({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  // console.log('defaultValue', defaultValue);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.value;
    return selectValue || '';
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: (selectRef) => selectRef.clearValue(),
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;
    if (ref.current && ref.current.setInputValue) {
      ref.current.setInputValue(defaultValue || '');
    }
    return defaultValue;
  }

  return (
    <>
      <InputMask
        id={name}
        name={fieldName}
        aria-label={fieldName}
        defaultValue={getDefaultValue()}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

Mask.propTypes = {
  name: PropTypes.string.isRequired,
};
