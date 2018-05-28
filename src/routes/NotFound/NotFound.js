import React from 'react'
import { browserHistory } from 'react-router'
import classes from './NotFound.css'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const NotFound = () => (
  <div className={classes.notFound}>
    <h4>Page not found!</h4>
    <p><a href="#" onClick={goBack}>&larr; Back</a></p>
  </div>
)

export default NotFound
