import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './toolsbar.css';

import ToolItem from './ToolItem';

export default function ItemTitle(props) {
  const { children, className, text, ...rest } = props;
  const classTools = cx(css.toolsbarTitle, 'toolsbar-title', className);

  const element = !text ? children : <h3>{text}</h3>;

  return (
    <ToolItem {...rest} className={classTools}>
      {element}
    </ToolItem>
  );
}

ItemTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ItemTitle.defaultProps = {
  children: null,
  className: null,
  text: null,
};
