import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './toolsbar.css';

export default function ToolsBar(props) {
  const { children, className, line, ...rest } = props;
  const cfgClass = {
    [css.toolsbar]: true,
    [css.line]: !!line,
  };

  const classTools = cx(cfgClass, 'toolsbar', className, { line: !!line });
  return (
    <div {...rest} className={classTools}>
      {children}
    </div>
  );
}

ToolsBar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  line: PropTypes.bool,
};
ToolsBar.defaultProps = {
  children: null,
  className: null,
  line: false,
};
