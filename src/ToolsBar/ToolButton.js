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
  const { className, disabled, icon, actived, ...rest } = props;

  const styles = {
    backgroundImage: `url(${imgButton.getImageByType(icon, true)})`,
  };

  if (typeof actived === 'string') styles.backgroundColor = actived;

  const cfgClass = {
    [css.toolsbarBtn]: true,
    [css.disabled]: !!disabled,
    [css.actived]: !!(typeof actived === 'boolean' && actived),
  };

  const classBtn = cx(cfgClass, 'toolsbar-btn', className, 'hover', {
    disabled: !!disabled,
    actived: !!actived,
  });

  return (
    <ToolItem>
      <button type="button" className={classBtn} {...rest} disabled={disabled} style={styles} />
    </ToolItem>
  );
}

ToolButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  actived: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  icon: PropTypes.string,
};

ToolButton.defaultProps = {
  className: null,
  disabled: false,
  actived: false,
  icon: 'unknow',
  // type: 'button',
};
