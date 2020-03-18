/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './cards.css';

function configureWidths({ w, desk, mobile }) {
  const result = {};
  const cxW = w ? `w${w}` : null;
  const cxDesk = desk ? `deskW${desk}` : null;
  const cxMob = mobile ? `mobileW${mobile}` : null;

  result[css[cxW]] = !!css[cxW];
  result[css[cxDesk]] = !!css[cxDesk];
  result[css[cxMob]] = !!css[cxMob];

  delete result.undefined;
  return result;
}

export default function CardItem(props) {
  const { children, className, width, mini, w, mobile, desk, ...rest } = props;
  const styles = {
    width,
  };

  const widths = configureWidths({ w, desk, mobile });

  const cfgClass = {
    [css.cardOffset]: true,
    [css.mini]: mini,
    ...widths,
  };

  const cxOffset = cx(cfgClass, 'card-offset', className);
  const cxItem = cx(css.cardItem, 'card-item');

  return (
    <div className={cxOffset}>
      <div className={cxItem} style={styles} {...rest}>
        {children}
      </div>
    </div>
  );
}

CardItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mini: PropTypes.bool,
  w: PropTypes.number,
  desk: PropTypes.number,
  mobile: PropTypes.number,
};

CardItem.defaultProps = {
  children: null,
  className: null,
  width: 'auto',
  mini: false,
  w: null,
  desk: null,
  mobile: null,
};
