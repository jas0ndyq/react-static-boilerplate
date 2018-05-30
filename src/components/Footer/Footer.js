import React, { Component } from 'react';
require('./Footer.css');

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <span className="footerSpan">关于</span>
        <span className="footerSpan">其他</span>
      </div>
    );
  }
}

export default Footer;