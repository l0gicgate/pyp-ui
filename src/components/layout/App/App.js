import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Head from 'next/head';
import { Footer } from '../Footer';
import './App.scss';

export const App = ({ children }) => {
  const classNames = classnames('app');
return (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
      />
      <link rel="icon" href={`/images/favicon.ico`} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className={classNames}>
      {children}
      <Footer />
    </div>
  </>
);
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};
