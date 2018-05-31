import React, {
  Component
} from 'react';
require('./index.css');

class EchartContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount () {
    this.setState({
      isLoaded: true
    });
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: 50, name: '完成率' }]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  render () {
    return ( 
      <div className="echart-container">
        this is container 
        <div id="main" className="echart-main"></div> 
      </div>
    );
  }
}

export default EchartContainer;