import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Icon.scss';

export const Icon = ({ children, className, color, outlined, size, type }) => {
  const classNames = classnames(
    'icon',
    { 'icon--outlined': outlined },
    className
  );
  return (
    <span
      aria-hidden="true"
      className={classNames}
      style={{ color, fontSize: size, height: size, width: size }}
    >
      {children || type}
    </span>
  );
};

Icon.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  outlined: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.string,
};

Icon.defaultProps = {
  children: null,
  className: null,
  color: 'black',
  outlined: false,
  size: 24,
  type: null,
};
