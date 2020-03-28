import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './cards.css';

export default function ListCards(props) {
  const { children, className, stretch, ...rest } = props;
  const cfgClass = {
    [css.listOfCards]: true,
    [css.stretch]: !!stretch,
  };

  const classe = cx(cfgClass, 'list-of-cards', className);
  return (
    <div className={classe} {...rest}>
      {children}
    </div>
  );
}

ListCards.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  stretch: PropTypes.bool,
};

ListCards.defaultProps = {
  children: null,
  className: '',
  stretch: false,
};
