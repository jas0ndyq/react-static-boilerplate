import React, { Component } from 'react';
import style from './index.module.css';
import { Link } from 'react-router';
import { Input } from 'antd';

class Reg extends Component {
  render () {
    return (
      <div className={style['reg']}>
        <div className={style['reg-back']}></div>
        <div className={style['reg-main']}>
          <div className={style['rm-top'] + ' clear'}>
            <p className={style['rm-top-left'] + ' fl'}>新用户注册</p>
            <p className={style['rm-top-right'] + ' fr'}>我已注册，现在就<Link className={style['rm-tr-link']} to="/login">登录></Link></p>
          </div>
          <div className={style['rm-inputs']}>
            <div className={style['rm-input'] + ' rm-input-item'}>
              <Input className={style['rm-input-detail']} addonBefore="&nbsp;用&nbsp;户&nbsp;名&nbsp;&nbsp;&nbsp;" placeholder="用户名由6-12位数字、字母、特殊字符组成" />
            </div>
            <div className={style['rm-input'] + ' rm-input-item'}>
              <Input className={style['rm-input-detail']} addonBefore="&nbsp;邮&nbsp;&emsp;&nbsp;箱&nbsp;&nbsp;&nbsp;" placeholder="请输入邮箱" />
            </div>
            <div className={style['rm-input'] + ' rm-input-item'}>
              <Input type="password" className={style['rm-input-detail']} addonBefore="&nbsp;密&nbsp;&emsp;&nbsp;码&nbsp;&nbsp;&nbsp;" placeholder="请输入密码" />
            </div>
            <div className={style['rm-input'] + ' rm-input-item'}>
              <Input type="password" className={style['rm-input-detail']} addonBefore="&nbsp;确认密码&nbsp;" placeholder="请确认密码" />
            </div>
          </div>
          <div className={style['rm-submit']}>
            <span className={style['rm-submit-button']}>立即注册</span>
          </div>
        </div>
        <div className={style['reg-footer']}>
          <p className={style['rf-title']}>Copyright 2018 Science China Press Co., Ltd. 《中国科学》杂志社有限责任公司 版权所有</p>
          <p className={style['rf-subtitle']}>京ICP备xxxxxxx号-1</p>
        </div>
      </div>
    );
  }
}

export default Reg;