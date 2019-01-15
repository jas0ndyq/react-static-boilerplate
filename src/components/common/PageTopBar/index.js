import React, { Component } from 'react';
import style from './index.module.css';

import IconPosition from './imgs/position.png';

class PageTopBar extends Component {
  
  render () {
    const { title } = this.props;
    return (
      <div className={style['page-top-bar']}>
        <p className={style['ptb-title']}>
          <span className={style['ptb-icon']}>
            <img src={IconPosition} />
          </span>
          <span>{title}</span>
        </p>
      </div>
    );
  }
}

export default PageTopBar;