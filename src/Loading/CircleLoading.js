import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './loading.css';

export function Carga({ color, duration, size }) {
  const calcW = Math.ceil((size * 15.789) / 100);
  const styleCarga = {
    borderTopColor: color,
    animationDuration: `${duration}s`,
    width: size,
    height: size,
    borderWidth: calcW,
  };
  return <div className={styles.loadingChargeCircle} style={styleCarga} duration={duration} />;
}

Carga.propTypes = {
  color: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default function CircleLoading(props) {
  const { children, text, className, opacity, color, duration, size } = props;

  const returnText = () => {
    if (text) return <div className={styles.loadingText}>{text}</div>;
    return children || null;
  };

  const mainClass = cx(styles.divLoading, className);

  return (
    <div className={mainClass} opacity={opacity}>
      <div className={styles.loadingContent}>
        <div>
          <Carga color={color} duration={duration} size={size} />
          {returnText()}
        </div>
      </div>
    </div>
  );
}

CircleLoading.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  opacity: PropTypes.number,
  size: PropTypes.number,
};

CircleLoading.defaultProps = {
  children: null,
  text: null,
  className: null,
  color: '#000',
  duration: 0.5,
  opacity: 0.5,
  size: 44,
};
