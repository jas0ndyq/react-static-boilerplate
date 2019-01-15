import { Calendar } from 'antd';
import React, { Component } from 'react';
import School from './test';

function dateCellRender (value) {
  return <div>自定义日数据 {value.getDayOfMonth()}</div>;
}

function monthCellRender (value) {
  return <div>自定义月数据 {value.getMonth()}</div>;
}

class Cal extends Component {
  constructor (props) {
    super();
    console.log(this);
  }
  render () {
    return (
      <div>
        <School/>
        <Calendar 
          defaultValue={new Date('2018-06-01')}
          dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
          {this.props.children}
      </div>
    );
  }
};

export default Cal;