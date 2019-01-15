import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import style from './Header.module.css';
import { checkWidth, checkIe } from '@helpers/helper';
import { connect } from 'react-redux';

import Logo from './logo.png';
import SvgText from './wenzi_boyan.svg';

const mobileNav = (type) => {
  return {
    type: 'MOBILE_NAV',
    payload: type
  };
};

function mapDispatchToProps (dispatch) {
  return {
    mobileNav: (value)=> {
      dispatch(mobileNav(value));
    },
  };
}

const mapStateToProps = (state) => ({
  mobileNavOpen: state.pageReducer.mobileNav,
});

class Header extends Component {
  constructor () {
    super();
    this.state = {
      device: checkWidth(),
      routes: [
        {
          path: '/',
          title: '首页'
        },
        {
          path: '/literature/search',
          title: '文献检索'
        },
        // {
        //   path: '/Echarts',
        //   title: '引文检索'
        // },
        {
          path: '/theme/analysis',
          title: '主题分析'
        },
        {
          path: '/professor/search',
          title: '专家检索'
        }
      ]
    };
    window.onresize = () => {
      this.setState({
        device: checkWidth()
      });
    };
  }
  render () {
    const path = this.props.path;
    return (
      <div className={style.header}>
        <div className={style['header-content']}>
          header
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
