import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './pagetitle.css';

export default function PageTitle(props) {
  const { children, className, ...rest } = props;
  const classe = cx(css.pageTitle, 'page-title', className);
  return (
    <div className={classe} {...rest}>
      {children}
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

PageTitle.defaultProps = {
  children: 'PageTitle Sem titulo',
  className: null,
};
