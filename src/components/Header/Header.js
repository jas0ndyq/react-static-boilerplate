import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Header.css';

export const Header = () => (
  <div>
    <h1>IE8 React Redux Starter Kit</h1>
    <IndexLink to="/" activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to="/counter" activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
    <Link to="/Echarts" activeClassName={classes.activeRoute}>
      Echarts
    </Link>
    {' · '}
    <Link to="/article" activeClassName={classes.activeRoute}>
      Article
    </Link>
    {' · '}
    <Link to="/calendar" activeClassName={classes.activeRoute}>
      Calendar
    </Link>
  </div>
);

export default Header;
