/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tabs.css';

export default function Tabs(props) {
  const { className, defaultActiveIndex } = props;
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  function handleTabClick(tabIndex) {
    if (tabIndex !== activeIndex) {
      setActiveIndex(tabIndex);
    }
  }

  function cloneTabElement(tab, index = 0) {
    return React.cloneElement(tab, {
      onClick: () => {
        handleTabClick(index);
      },
      tabIndex: index,
      isActive: index === activeIndex,
    });
  }

  function renderChildrenTabs() {
    const { children } = props;
    if (!Array.isArray(children)) {
      return cloneTabElement(children);
    }
    return children.map(cloneTabElement);
  }

  function renderActiveTabContent() {
    const { children } = props;
    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }
    return children.props.children;
  }

  const cssClass = cx(css.tabs, 'tabs', className);
  const classUl = cx(css.tabsList, 'tabs__list');
  const classContent = cx(css.tabsContent, 'tabs__content');

  return (
    <section className={cssClass}>
      <ul className={classUl}>{renderChildrenTabs()}</ul>
      <div className={classContent}>{renderActiveTabContent()}</div>
    </section>
  );
}

Tabs.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  defaultActiveIndex: PropTypes.number,
};

Tabs.defaultProps = {
  className: null,
  defaultActiveIndex: 0,
};
