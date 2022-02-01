import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Footer.scss';

export const Footer = ({ className }) => {
  const classNames = classnames(className);
  const year = new Date().getFullYear();
  return (
    <footer className={classNames}>
      &copy; 2021-{year} Pressure Your Politicians
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};
