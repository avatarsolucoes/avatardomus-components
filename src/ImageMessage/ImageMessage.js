import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getImageByType } from '../Images';

import css from './image-message.css';

export default function ImageMessage(props) {
  const { type, text, className, children, src, size, raw } = props;

  const c = {
    main: cx(css.imageMessage, 'image-message', className),
    img: cx(css.imageContent, 'image-content'),
    text: cx(css.messageText, 'message-text'),
  };
  const element = children || (text ? <p className={c.text}>{text}</p> : null);

  const sizes = size ? { width: size, height: size } : {};

  function renderImage() {
    if (!src) {
      const Img = getImageByType(type, false);
      return <Img {...sizes} />;
    }
    const source = !raw ? src : getImageByType(type, true);
    return <img src={source} alt={type} title={type} className={c.img} styles={sizes} />;
  }

  return (
    <div className={c.main}>
      {renderImage()}
      {element}
    </div>
  );
}

ImageMessage.propTypes = {
  type: PropTypes.string,
  text: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.number,
  raw: PropTypes.bool,
};

ImageMessage.defaultProps = {
  type: 'unknow',
  children: null,
  text: '',
  className: null,
  src: null,
  size: null,
  raw: false,
};
