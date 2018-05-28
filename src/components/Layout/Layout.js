import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import classes from './Layout.css'

export const CoreLayout = ({ children }) => (
  <div className="container text-center">
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CoreLayout
