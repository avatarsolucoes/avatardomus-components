/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tabs.css';

export default function Tab(props) {
  const { className, label, isActive, onClick, onClickTab } = props;

  const cfgClassLink = {
    [css.tabsTabLink]: true,
    [css.active]: isActive,
  };

  const activeLinkClass = cx(cfgClassLink, 'tabs__tab-link', className, {
    active: isActive,
  });

  const tabClass = cx(css.tabsTab, 'tabs__tab', className);

  function handleClick(e) {
    onClickTab(e);
    onClick(e);
  }

  return (
    <div className={tabClass}>
      <button type="button" className={activeLinkClass} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
}

Tab.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  onClickTab: PropTypes.func,
};

Tab.defaultProps = {
  label: `\u0020`,
  className: null,
  isActive: false,
  onClick: () => {},
  onClickTab: null,
};
