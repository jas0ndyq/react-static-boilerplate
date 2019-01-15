import React, { Component } from 'react';
import style from './index.module.css';

class Card extends Component {
  constructor (props){
    super(props);
  }
  render (){
    return(
      <div className={style['parent-card'] + ' clear'}
        style={{width: this.props.width + 'px',
          marginRight: this.props.right + 'px',
          borderLeft: this.props.left ? '1px solid #D6D6D6' : 'none'}}>
        {this.props.imgSrc &&
        <img className="fl" 
          src={require('./images/' + this.props.imgSrc)} />
        }
        <div className={style['col-3-content'] + ' fl'}>
          <p className={style['cont-title']}>{this.props.title}</p>
          <p className={style['cont-number']}>{this.props.value}</p>
        </div>
      </div>
    );
  }
}

export default Card;