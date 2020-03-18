import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './cards.css';

export default function CardContent(props) {
  const { children, className, width, ...rest } = props;
  const styles = {
    width,
  };

  const classe = cx(css.cardItemContent, 'card-item-content', className);
  return (
    <div className={classe} style={styles} {...rest}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CardContent.defaultProps = {
  children: null,
  className: '',
  width: 'auto',
};
