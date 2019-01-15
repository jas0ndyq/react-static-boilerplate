import React, { Component } from 'react';
import { Breadcrumb, Icon, Table, Modal, Button } from 'antd';

class School extends Component {
  constructor (props) {
    super();
    this.props = props;
    this.PassReset = this.PassReset.bind(this);
    this.state = {
      data: [],
      visible: false,
      loading: false
    };
  }

  fetchPost () {
    const _data = [];
    for(let i = 0 ; i < 99 ; i++ ) {
      _data.push({
        order: i,
        'u_name': `布吉岛${i + 1}号`,
        'c_name': `萌萌${i + 1}号公仔`,
        phone: `133xxxxxxx${i}`,
        address: '省 / 市 /区 地址',
        login: `admin${i}`
      });
    };
    this.setState({
      data: _data
    });
  }

  componentDidMount () {
    this.fetchPost();
  }

  EditOpenDialog () {
    alert();
  }

  PassReset () {
    console.log('aaa');
    this.setState({ visible: true });
  }
  
  render () {
    let _this = this
  
    const columns = [{
      title: '序号',
      dataIndex: 'order',
      key: 'order',
      className: 'text-center'
    }, {
      title: '用户名',
      dataIndex: 'u_name',
      key: 'u_name'
    }, {
      title: '联系人姓名',
      dataIndex: 'c_name',
      key: 'c_name',
    }, {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '学校地址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '登录名',
      dataIndex: 'login',
      key: 'login',
    }, {
      title: '操作',
      key: 'operation',
      className: 'normal-td-width',
      render (text, record, index) {
        console.log(_this, this);
        return (
          <span>
            <a className="inlineblock edit-mess-btn" 
              onClick={_this.EditOpenDialog}>
              编辑
            </a> 
            <a className="inlineblock ml-10 reset-pass-btn" 
              onClick={_this.PassReset}>
              重置密码
            </a>
          </span>
        );
      }
    }];

    const pagination = {
      total: this.state.data.length,
      showSizeChanger: true,
      defaultPageSize: 15,
      pageSize: 15,
      onShowSizeChange (current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange (current) {
        console.log('Current: ', current);
      }
    };

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>当前位置：首页</Breadcrumb.Item>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
          <Breadcrumb.Item href="/">学校管理</Breadcrumb.Item>
        </Breadcrumb>
        <div className="manage-container mt-10">
          <div className="search-location clear">
            <input className="search-keyword fl" 
              placeholder="请输入学校名称 / 电话" 
              type="text" 
              maxLength="20" /> 
            <span className="fl search-btn ml-10 cp">搜索</span>
            <span className="fr drop-in-btn ml-10 cp">批量添加</span>
            <span className="fr add-to-btn ml-10 cp">
              <Icon type="plus" />添加用户
            </span>
          </div>
        </div>
        <div className="mt-10">
          <Table columns={columns} 
            dataSource={this.state.data} 
            pagination={pagination} 
            bordered />
        </div>
        <Modal ref="modal"
          visible={this.state.visible}
          title="对话框标题" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" 
              onClick={this.handleCancel}>返 回</Button>,
            <Button key="submit" type="primary" size="large" 
              loading={this.state.loading} 
              onClick={this.handleOk}>
              提 交
            </Button>
          ]}>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>
      </div>
    );
  }
}

export default School;