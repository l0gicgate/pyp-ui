import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Logo } from '../../../ui';
import styles from './Hero.module.scss';

export const Hero = ({ className, onClick }) => {
  const classNames = classnames(styles.hero, className);
  return (
    <section className={classNames}>
      <header className={styles.hero__header}>
        <Logo />
      </header>
      <div className={styles.hero__inner}>
        <div className={styles.inner__left}>
          <h1>
            Politicians work for us. It is our duty as citizens to keep them
            accountable.
          </h1>
          <button onClick={onClick}>Take Action Now!</button>
        </div>
        <div className={styles.inner__right}>
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
