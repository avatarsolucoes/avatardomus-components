import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from '../toolsbar.css';

export default function ToolSelectItem(props) {
  const ref = useRef();
  const { className, defaultOptions, placeholder, onChange, name, defaultValue, ...rest } = props;

  const cfgClass = {
    [css.toolsbarSelectItem]: true,
  };
  const classMain = cx(cfgClass, 'toolsbar-select-item', className);

  const setDefaultValue = useCallback(
    (v) => {
      const valor = v || defaultValue;
      const item = defaultOptions.filter((o) => o.id === valor);
      if (ref.current && item.length > 0) ref.current.value = valor;
    },
    [defaultOptions, defaultValue],
  );

  useEffect(() => {
    setDefaultValue();
    if (ref.current) {
      const h = ref.current.clientHeight || 0;
      ref.current.style.paddingRight = `${h + 2}px`;
    }
  }, [setDefaultValue]);

  function handleChange(e) {
    onChange({ [name]: e.target.value });
  }

  return (
    <div className={classMain}>
      <select ref={ref} name={name} onChange={handleChange} className="primary" {...rest}>
        <>
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {defaultOptions.map(({ id, title, uid }) => {
            return (
              <option key={id} value={id} data-uid={uid}>
                {title}
              </option>
            );
          })}
        </>
      </select>
    </div>
  );
}

ToolSelectItem.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  defaultOptions: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

ToolSelectItem.defaultProps = {
  name: 'noNamed',
  className: null,
  defaultOptions: [],
  placeholder: null,
  onChange: () => {},
  defaultValue: '',
};
