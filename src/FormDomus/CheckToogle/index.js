/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UniversalStyle as Style, StyleCacheProvider } from 'react-css-component';

// COMPONENTS
import { Check } from '@rocketseat/unform';

// IMPORTS
import { round } from '../../helpers/formats';
import css from '../form-domus.css';

function calculateSizes(altura, largura) {
  const w = largura || round(altura * 1.618, 0);
  const h = round(altura / 1.618, 0);
  const t = w - h;
  return {
    mainH: altura,
    mainW: w,
    inputH: h,
    inputW: w,
    label: h,
    translate: t,
  };
}

export default function UnFormCheckToogle(props) {
  const parentRef = useRef();

  const { className, disabled, name, onChange, height, width, checked } = props;

  const [sizes, setSizes] = useState(calculateSizes(height, width));

  const getParentHeight = useCallback(
    (ref) => {
      const { offsetHeight } = ref.parentNode;
      if (offsetHeight) setSizes(calculateSizes(offsetHeight, width));
    },
    [width],
  );

  useEffect(() => {
    if (parentRef.current) {
      getParentHeight(parentRef.current);
    }
  }, [getParentHeight]);

  useEffect(() => {
    if (parentRef.current && checked) {
      const filhos = parentRef.current.children;
      for (let i = 0; i < filhos.length; i++) {
        const filho = filhos[i];
        if (filho.nodeName === 'INPUT') filho.checked = true;
      }
    }
  }, [checked]);

  function handleChange(e) {
    return onChange(e);
  }

  function buildCss(s) {
    return `.${css.ufCheckToogleContent}{
      max-height: 100%;
      height: ${s.mainH}px;
      width: ${s.mainW}px;
      min-width: ${s.mainW}px;
    }
    .${css.ufCheckToogleLabel} {
      height: ${s.label}px;
      max-height: ${s.label}px;
      width: ${s.label}px;
      max-width: ${s.label}px;
    }
    .${css.ufCheckToogleInput}:checked + label {
      -o-transform: translate(${s.translate}px, -50%);
      -ms-transform: translate(${s.translate}px, -50%);
      -moz-transform: translate(${s.translate}px, -50%);
      -webkit-transform: translate(${s.translate}px, -50%);
      transform: translate(${s.translate}px, -50%);
    }
    `;
  }

  const clsD = { disabled: !!disabled };
  const classMain = cx(css.ufCheckToogleContent, className);
  const classLabel = cx(css.ufCheckToogleLabel, 'bgsecundary', clsD);

  return (
    <StyleCacheProvider>
      <Style css={buildCss(sizes)} />
      <div ref={parentRef} className={classMain}>
        <Check
          disabled={!!disabled}
          defaultChecked={!!checked}
          // checked={!!checked}
          className={css.ufCheckToogleInput}
          name={name}
          onChange={handleChange}
        />
        <label className={classLabel} htmlFor={name} />
      </div>
    </StyleCacheProvider>
  );
}

UnFormCheckToogle.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,
};

UnFormCheckToogle.defaultProps = {
  name: `nonamed-checktoogle-${Math.random()}`,
  className: null,
  checked: false,
  disabled: false,
  onChange: () => {},
  height: 32,
  width: null,
};
