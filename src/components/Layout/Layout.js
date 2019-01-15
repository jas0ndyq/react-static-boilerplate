import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackTop } from 'antd';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer/Footer';
import MobileNav from '@components/common/MobileNav';
import classes from './Layout.css';

import { checkWidth } from '@helpers/helper';

class CoreLayout extends Component {
  constructor (props){
    super(props);
  }
  componentDidMount (){
    const body = document.body.clientHeight;
    document.getElementsByClassName('mainContainer')[0]
      .style.minHeight = body - 140 + 'px';
  }
  render (){
    const {children} = this.props;
    const device = checkWidth();
    return(
      <div className="container text-center">
        <Header path={this.props.location.pathname} />
        <div className={classes.mainContainer}>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
CoreLayout.propTypes = { children: PropTypes.element.isRequired };

export default CoreLayout;
