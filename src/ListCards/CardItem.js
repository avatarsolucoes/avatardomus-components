/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './cards.css';

const numWidth = [25, 30, 50, 100];

function configureWidths({ w, desk, mobile, tablet }) {
  const result = {};
  const cxW = w ? `w${w}` : null;
  const cxDesk = desk ? `deskW${desk}` : null;
  const cxTablet = tablet ? `tabletW${tablet}` : null;
  const cxMob = mobile ? `mobileW${mobile}` : null;

  result[css[cxW]] = !!css[cxW];
  result[css[cxDesk]] = !!css[cxDesk];
  result[css[cxTablet]] = !!css[cxTablet];
  result[css[cxMob]] = !!css[cxMob];

  delete result.undefined;
  return result;
}

export default function CardItem(props) {
  const { children, className, width, mini, w, mobile, desk, tablet, hidden, ...rest } = props;
  const styles = {
    width,
  };

  const widths = configureWidths({ w, desk, tablet, mobile });

  const cfgClass = {
    [css.cardOffset]: true,
    [css.mini]: mini,
    ...widths,
    [css.hidden]: !!hidden,
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
  desk: PropTypes.oneOf(numWidth),
  mobile: PropTypes.oneOf(numWidth),
  tablet: PropTypes.oneOf(numWidth),
  hidden: PropTypes.bool,
};

CardItem.defaultProps = {
  children: null,
  className: null,
  width: 'auto',
  mini: false,
  w: null,
  desk: null,
  mobile: null,
  tablet: null,
  hidden: false,
};
