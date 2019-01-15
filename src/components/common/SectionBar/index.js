import React, { Component } from 'react';
import style from './index.module.css';

const SectionBar = (props) => (
  <div className={style['theme-network-label']}>
    <p className={style['tnl-text']}>{props.label}</p>
    <div className={style['tnl-backdrop']}></div>
  </div>
);

export default SectionBar;