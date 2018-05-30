import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer/Footer';
import classes from './Layout.css';

export const CoreLayout = ({ children }) => (
  <div className="container text-center">
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
    <Footer />
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;
