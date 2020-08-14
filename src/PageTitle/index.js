/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './pagetitle.css';
import { ImagesButton } from '../Images/buttons/require';

function ImgLink() {
  return (
    <span
      className={css.link}
      style={{
        backgroundImage: `url(${ImagesButton.back})`,
      }}
    />
  );
}

export default function PageTitle(props) {
  const { children, className, h1, h2, h3, h4, backLink: BackLink, ...rest } = props;
  const classe = cx(
    css.pageTitle,
    {
      [css.backlink]: !!BackLink,
    },
    className,
  );
  return (
    <div className={classe} {...rest}>
      {BackLink && <div />}
      {children ||
        (h1 ? <h1>{h1}</h1> : h2 ? <h2>{h2}</h2> : h3 ? <h3>{h3}</h3> : h4 ? <h4>{h4}</h4> : '')}
      {BackLink ? (
        <>
          <BackLink>
            <ImgLink />
          </BackLink>
        </>
      ) : null}
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
  h3: PropTypes.string,
  h4: PropTypes.string,
  backLink: PropTypes.any,
};

PageTitle.defaultProps = {
  children: null,
  className: null,
  h1: null,
  h2: null,
  h3: null,
  h4: null,
  backLink: null,
};
