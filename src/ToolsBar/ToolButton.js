import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './toolsbar.css';

import { imgButton } from '../Images';
import ToolItem from './ToolItem';

// const getIcon = (key) => {
//   const ImagesButton = imgButton.requireList;
//   return key in ImagesButton ? ImagesButton[key] : ImagesButton.unknow;
// };

export default function ToolButton(props) {
  const { className, disabled, icon, actived, activedColor, style, itemStyle, ...rest } = props;

  const styles = {
    ...style,
    backgroundImage: `url(${imgButton.getImageByType(icon, true)})`,
  };

  if (typeof actived === 'string') styles.backgroundColor = actived;
  if (typeof activedColor === 'string') styles.backgroundColor = activedColor;

  const cfgClass = {
    [css.toolsbarBtn]: true,
    [css.disabled]: !!disabled,
    [css.actived]: !!(typeof actived === 'boolean' && actived),
  };

  const classBtn = cx(cfgClass, 'toolsbar-btn', className, 'hover', {
    disabled: !!disabled,
    actived: !!(actived || activedColor),
  });

  return (
    <ToolItem style={itemStyle}>
      <button type="button" className={classBtn} {...rest} disabled={disabled} style={styles} />
    </ToolItem>
  );
}

ToolButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  actived: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  icon: PropTypes.string,
  activedColor: PropTypes.string,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
};

ToolButton.defaultProps = {
  className: null,
  disabled: false,
  actived: false,
  activedColor: null,
  icon: 'unknow',
  style: {},
  itemStyle: {},
  // type: 'button',
};
