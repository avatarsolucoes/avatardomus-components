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
  const { className, disabled, icon, ...rest } = props;

  const styles = {
    backgroundImage: `url(${imgButton.getImageByType(icon, true)})`,
  };

  const cfgClass = {
    [css.toolsbarBtn]: true,
    [css.disabled]: !!disabled,
  };

  const classBtn = cx(cfgClass, 'toolsbar-btn', className, 'hover', { disabled: !!disabled });
  return (
    <ToolItem>
      <button type="button" className={classBtn} {...rest} disabled={disabled} style={styles} />
    </ToolItem>
  );
}

ToolButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

ToolButton.defaultProps = {
  className: null,
  disabled: false,
  icon: 'unknow',
  // type: 'button',
};
