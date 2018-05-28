import React from 'react';
import PropTypes from 'prop-types';
import classes from './Counter.css';
import { Button, Switch, Table, Icon } from 'antd';

require('antd/lib/index.css');

console.log(Button);

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render(text, record) {
    return (
      <span>
        <a href="#">操作一{record.name}</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down" />
        </a>
      </span>
    );
  }
}];
const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];

export const Counter = (props) => (
  <div>
    <Table columns={columns} dataSource={data} />
    <Switch defaultChecked={false} />
    <Button type="primary">antd 按钮</Button>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes.counterGreen}>
        {props.counter}
      </span>
    </h2>
    <button className="btn btn-default" onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className="btn btn-default" onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Counter;
