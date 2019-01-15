import React, { Component } from 'react';
import style from './index.module.css';
// import Particles from 'react-particles-js';
import { Link } from 'react-router';
import { Row, Col, Input } from 'antd';

import Footer from '@components/common/Footer/Footer';

class Login extends Component {
  render () {
    return (
      <div className={style['login']}>
        <div className={style['login-back']}>
        </div>
        <div className={style['login-back-white']}></div>
        <div className={style['login-content']}>
          <div className={style['login-content-main']}>
            <Row>
              <Col md={16} xs={24}>
                <h1 className={style['lc-title']}>海量对比资源、迅捷检测速度</h1>
                <div className={style['lc-list']}>
                  <p className={style['lc-list-item']}>
                  • 多风格报告单展示检测结果；原版显示检测结果，可批量操作
                  </p>
                  <p className={style['lc-list-item']}>
                  • 多维度统计报表；多级分层管理
                  </p>
                </div>
              </Col>
              <Col md={8} xs={24}>
                <div className={style['lc-card']}>
                  <p className={style['lc-card-title']}>用户登录</p>
                  <p className={style['lc-card-label']}>海量对比资源、迅捷检测速度</p>
                  <div className={style['lc-card-inputs']}>
                    <Input size="large" className={style['lc-ci-input']} placeholder="请输入用户名" />
                    <Input size="large" type="password" className={style['lc-ci-input']} placeholder="请输入密码" />
                  </div>
                  <p className={style['lc-ci-button']}>登&nbsp;&nbsp;录</p>
                  <div className={style['lc-ci-labels']}>
                    <span className={style['lc-ci-label']}>忘记密码</span>
                    <span className={style['lc-ci-gap']}>|</span>
                    <Link to="/reg">
                      <span className={style['lc-ci-label']}>立即注册</span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;