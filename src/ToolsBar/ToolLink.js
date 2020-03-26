import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { imgButton } from '../Images';
import ToolItem from './ToolItem';
import css from './toolsbar.css';

export default function ToolLink(props) {
  const { children, className, disabled, icon, value, ...rest } = props;
  const styles = { backgroundImage: `url(${imgButton.getImageByType(icon, true)})` };
  const path = disabled ? '' : value;

  const cfgClass = {
    [css.toolsbarBtn]: true,
    [css.disabled]: !!disabled,
  };
  const classBtn = cx(cfgClass, 'toolsbar-btn', 'hover', className, { disabled: !!disabled });

  return (
    <ToolItem>
      <a href={path} className={classBtn} disabled={disabled} style={styles} {...rest}>
        {children}
      </a>
    </ToolItem>
  );
}

ToolLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
};

ToolLink.defaultProps = {
  children: ' ',
  className: null,
  disabled: false,
  hint: null,
  icon: 'unknow',
  value: null,
};
