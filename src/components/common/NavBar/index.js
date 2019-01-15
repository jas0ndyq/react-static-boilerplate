import React, { Component } from 'react';
import style from './index.module.css';

class NavBar extends Component {
  constructor (props){
    super(props);
  }
  render (){
    const { barTitle } = this.props;
    return(
      <div className={style['nav-bar-card']}>
        <div className={style['bar-bg']}></div>
        <p className={style['title']}>{barTitle}</p>
      </div>
    );
  }
}

export default NavBar;