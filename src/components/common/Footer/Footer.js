import React, { Component } from 'react';
import style from './Footer.module.css';

class Footer extends Component {
  constructor (props){
    super(props);
  }
  componentWillMount () {
    // console.log(1, this.props);
  }
  render () {
    return (
      <div className={style.footer}>
        <p className={style['footer-top']}>Footer</p>
      </div>
    );
  }
}

export default Footer;