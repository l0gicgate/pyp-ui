import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Footer } from '../Footer';
import styles from './App.module.scss';

export const App = ({ children }) => (
  <>
    <Head>
      <meta
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
        name="viewport"
      />
      <link href="/images/favicon.ico" rel="icon" />
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className={styles.app}>
      {children}
      <Footer />
    </div>
  </>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};
