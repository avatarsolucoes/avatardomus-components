import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

function setSelectDisabled(el, disabled) {
  if (disabled) return el.setAttribute('disabled', !!disabled);
  return el.removeAttribute('disabled');
}

/**
 * @typedef {Object} Option
 * @property {String} id
 * @property {String} title
 */

/**
 * @typedef {Object} SelectProps
 * @property {String} name
 * @property {String} label
 * @property {String} placeholder
 * @property {Array} options
 */

export default function Select(props) {
  const { name, placeholder, defaultValue, options, ...rest } = props;

  const ref = useRef();
  const { fieldName, registerField, defaultValue: initialData, error } = useField(name);

  function prepareArrayOptions() {
    return options.map(({ id, ...r }) => {
      return {
        uid: `${name}-${id}`,
        id: id ? id.toString() : '',
        ...r,
      };
    });
  }

  const myOptions = prepareArrayOptions();

  const setMyValue = (v) => {
    if (ref.current) ref.current.value = v;
  };

  const configureOptions = (select) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < select.options.length; i++) {
      const uid = select.options[i].getAttribute('data-uid');
      const found = myOptions.filter((o) => o.uid === uid)[0] || false;
      if ((found && found.uid) === uid) {
        setSelectDisabled(select.options[i], !!found.disabled);
      }
    }
  };

  useEffect(
    () => {
      if (ref.current) {
        ref.current.value = initialData || defaultValue;
        ref.current.setMyValue = setMyValue;
        configureOptions(ref.current);
        // ref.current.setAttribute('data-uid',);
      }

      if (ref.current) {
        registerField({ name: fieldName, ref: ref.current, path: 'value' });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldName, defaultValue, initialData],
  );

  return (
    <>
      <select
        // {...rest}
        id={fieldName}
        name={fieldName}
        defaultValue={initialData || defaultValue}
        aria-label={fieldName}
        ref={ref}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}

        {myOptions.map(({ id, title, uid }) => {
          return (
            <option key={id} value={id} data-uid={uid}>
              {title}
            </option>
          );
        })}
      </select>
      {error && <span>{error}</span>}
    </>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  placeholder: '',
  defaultValue: '',
  options: [],
  onChange: () => {},
};
