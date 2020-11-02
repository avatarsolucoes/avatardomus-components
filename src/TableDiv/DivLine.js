import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './tablediv.css';

export default function DivLine(props) {
  const {
    children,
    className,
    fstart,
    fend,
    fcenter,
    faround,
    fbetween,
    deleted,
    underline,
    ...rest
  } = props;

  const cfgClass = {
    [css.tabledivLine]: true,
    [css.fstart]: !!fstart,
    [css.fend]: !!fend,
    [css.fcenter]: !!fcenter,
    [css.faround]: !!faround,
    [css.fbetween]: !!fbetween,
    [css.linedeleted]: !!deleted,
    [css.borderless]: !underline,
  };

  const cfgClassLine = {
    fstart: !!fstart,
    fend: !!fend,
    fcenter: !!fcenter,
    faround: !!faround,
    fbetween: !!fbetween,
    linedeleted: !!deleted,
    borderless: !underline,
  };

  const classLine = cx(cfgClass, 'table-div-line', cfgClassLine, className);

  return (
    <div {...rest} className={classLine}>
      {children}
    </div>
  );
}
DivLine.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  fstart: PropTypes.bool,
  fend: PropTypes.bool,
  fcenter: PropTypes.bool,
  faround: PropTypes.bool,
  fbetween: PropTypes.bool,
  deleted: PropTypes.bool,
  underline: PropTypes.bool,
};
DivLine.defaultProps = {
  children: null,
  className: null,
  fstart: false,
  fend: false,
  fcenter: false,
  faround: false,
  fbetween: false,
  deleted: false,
  underline: true,
};
