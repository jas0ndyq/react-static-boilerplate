import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './index.module.css';
import { IndexLink, Link } from 'react-router';
import { checkIe } from '@helpers/helper';

class MobileNav extends Component {
  constructor () {
    super();
    this.state = {
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
  }
  render () {
    if (checkIe()) {
      return null;
    }
    const { mobileNavOpen } = this.props;
    if (mobileNavOpen) {
      document.body.setAttribute('class', 'ovh');
    }
    else {
      document.body.setAttribute('class', null);
    }
    return (
      <div className={style['mobile-nav-container']}>
        <div className={style['mobile-nav'] + ' ' + (mobileNavOpen ? style['mobile-nav-open'] : style['mobile-nav-close'])}>
          <div className={style['mn-items']}>
            {
              this.state.routes.map(r => {
                if (r.path == '/') {
                  return (
                    <IndexLink className={style['mn-item']} key={r.path} to={r.path} activeClassName={style.activeRoute}>
                      {r.title}
                    </IndexLink>
                  );
                }
                else {
                  return (
                    <Link className={style['mn-item']} key={r.path} to={r.path} activeClassName={style.activeRoute}>
                      {r.title}
                    </Link>
                  );
                }
              })
            }
          </div>
        </div>
        <div 
          onClick={
            e => this.props.mobileNav('close')
          } 
          className={style['mobile-nav-backdrop'] + ' ' + (mobileNavOpen ? style['mobile-nav-backdrop-show'] : style['mobile-nav-backdrop-close'])}></div>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);