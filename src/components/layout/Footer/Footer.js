import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      &copy; 2021-{year} Pressure Your Politicians
    </footer>
  );
};
