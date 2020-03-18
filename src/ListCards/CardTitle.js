import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './cards.css';

export default function CardTitle(props) {
  const { children, className, ...rest } = props;
  const classe = cx(css.cardItemTitle, 'card-item-title', className);
  return (
    <div className={classe} {...rest}>
      {children}
    </div>
  );
}

CardTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

CardTitle.defaultProps = {
  children: null,
  className: '',
};
