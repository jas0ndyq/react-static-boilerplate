import React, { Component } from 'react';
import style from './index.module.css';
import { serveGuid } from '@helpers/helper';

class Chart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      id: serveGuid()
    };
  }
  // componentDidMount () {
  //   this.setState({
  //     isLoaded: true
  //   });
  //   var myChart = echarts.init(document.getElementById(this.state.id));
  //   // 使用刚指定的配置项和数据显示图表。
  //   myChart.setOption(this.props.option);
  // }
  componentDidUpdate () {
    var myChart = echarts.init(document.getElementById(this.state.id));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.props.option);
  }
  render () {

    return (
      <div id={this.state.id}  className={style['chart-container']}>

      </div>
    );
  }
}

export default Chart;