import { Calendar } from 'antd';
import React, { Component } from 'react';


function dateCellRender (value) {
  return <div>自定义日数据 {value.getDayOfMonth()}</div>;
}

function monthCellRender (value) {
  return <div>自定义月数据 {value.getMonth()}</div>;
}

export default () => {
  return (
    <Calendar 
      defaultValue={new Date('2018-06-01')}
      dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  );
}