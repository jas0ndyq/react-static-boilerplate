import React from 'react';
import { Icon } from 'antd';
import './table.css';
// import '../../static/css/common-style.css';

class Table extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
    this.state = { $index: 0 };
  }

  tableLeftRoad () {
    this.setState((state) => {
      return { $index: state.$index - 1 };
    });
  }

  tableRightRoad () {
    this.setState((state) => {
      return { $index: state.$index + 1 };
    });
  }

  render () {
    const list = this.props.list;
    const _this = this;
    const _nums = +this.props.scrollNum;
    return (
      <div className="cspm-content">
        <table>
          <thead>
            <tr>
              {this.props.colum.map((c, l) => {
                if(_nums) {
                  if(l < _this.props.arrayIndex) {
                    return (
                      <th width={c.width} key={l}>{c.title}</th>
                    );
                  }
                }
                else {
                  return (
                    <th key={l}>{c.title}</th>
                  );
                }
              })}
              {_nums && (
                <th>
                  {this.state.$index > 0 ? (
                    <Icon onClick={this.tableLeftRoad.bind(this)} 
                      className="cur"
                      type="left" theme="outlined" />
                  ) : (
                    <Icon className="not-allow"
                      type="left" theme="outlined" />
                  )}
                </th>
              )}
              {list[0].array.map((item, index) => {
                if(index < (_this.state.$index + _nums) && 
                  index >= _this.state.$index &&
                  _nums ) {
                  return (
                    <th key={index}>{item.key}</th>
                  );
                }
              })}
              {_nums && (
                <th>
                  {this.state.$index + _nums < list[0].array.length ? (
                    <Icon onClick={this.tableRightRoad.bind(this)} 
                      className="cur"
                      type="right" theme="outlined" />
                  ) : (
                    <Icon className="not-allow" 
                      type="right" theme="outlined" />
                  )}
                </th>
              )}
              {this.props.colum.map((c, l) => {
                if(_nums) {
                  if(l > _this.props.arrayIndex) {
                    return (
                      <th key={l}>{c.title}</th>
                    );
                  }
                }
              })}
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  {this.props.colum.map((c, l) => {
                    if(_nums) {
                      if(l < _this.props.arrayIndex) {
                        if(c.render) {
                          return <td key={l}>
                            {c.render(item[c.dataIndex], index)}
                          </td>;
                        }
                        else return (
                          <td key={l}>{item[c.dataIndex]}</td>
                        );
                      }
                    }
                    else {
                      if(c.render) {
                        return <td key={l}>
                          {c.render(item[c.dataIndex], index)}
                        </td>;
                      }
                      else return (
                        <td key={l}>{item[c.dataIndex]}</td>
                      );
                    }
                  })}
                  {_nums && (<td></td>)}
                  {item.array.map((_item, _index) => {
                    if(_index < (_this.state.$index + _nums) &&
                      _index >= _this.state.$index &&
                      _nums) {
                      return (
                        <td key={_index}>{_item.value}</td>
                      );
                    }
                  })}
                  {_nums && ( <td></td>)}
                  {this.props.colum.map((c, l) => {
                    if(_nums) {
                      if(l > _this.props.arrayIndex) {
                        if(c.render) {
                          return <td key={l}>
                            {c.render(item[c.dataIndex], index)}
                          </td>;
                        }
                        else return (
                          <td key={l}>{item[c.dataIndex]}</td>
                        );
                      }
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
