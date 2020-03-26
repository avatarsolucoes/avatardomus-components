import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tabs.css';

export default function Tab(props) {
  const { className, label, isActive, onClick } = props;

  const cfgClassLink = {
    [css.tabsTabLink]: true,
    [css.active]: isActive,
  };

  const activeLinkClass = cx(cfgClassLink, 'tabs__tab-link', className, {
    active: isActive,
  });

  const tabClass = cx(css.tabsTab, 'tabs__tab', className);

  return (
    <div className={tabClass}>
      <button type="button" className={activeLinkClass} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  className: null,
  isActive: false,
  onClick: null,
};
