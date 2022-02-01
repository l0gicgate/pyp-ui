import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Logo } from '../../../ui';
import './Hero.scss';

export const Hero = ({ className, onClick }) => {
  const classNames = classnames('hero', className);
  return (
    <section className={classNames}>
      <header>
        <Logo />
      </header>
      <div className="hero__inner">
        <div className="inner__left">
          <h1>
            The people who are crazy enough to think they can change the world
            are the ones who do.
          </h1>
          <button onClick={onClick}>Take Action Now!</button>
        </div>
        <div className="inner__right">
          <img
            alt="Political Stage Illustration"
            className="hero__illustration"
            src="/images/splash.svg"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Hero.defaultProps = {
  className: null,
};
