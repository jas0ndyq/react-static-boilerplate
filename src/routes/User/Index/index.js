import React, { Component } from 'react';
import style from './index.module.css';
import { Link } from 'react-router';

class Index extends Component {
  render () {
    return (
      <div className={style['index']}>
        <h1>首页</h1>
      </div>
    );
  }
}

export default Index;