import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchDataAction from '../../store/actions/fetchArticle';
import Upload from 'rc-upload';

const Item = (props) => {
  return (
    <li>
      <span>{props.title}</span>
    </li>
  );
};

class Article extends Component {
  constructor (props) {
    super();
    this.props = props;
    this.state = {
      sessionList: []
    };
    console.log(this);
  }

  fetchPost () {
    this.props.fetchStart(1, 10);
  }

  componentDidMount () {
    window.sessionStorage.setItem('list', '[1,2,3]');
    this.setState({
      sessionList: JSON.parse(window.sessionStorage.getItem('list'))
    });
    if (this.props.fetchStatus.list.length > 0) {
      return;
    }
    this.fetchPost();
  }

  render () {
    const { list } = this.props.fetchStatus;
    return (
      <div className="article-container">
        <Upload component="div" style={{'display': 'inline-block'}}>
          <a>上传</a>
        </Upload>
        {
          this.state.sessionList.map(item => {
            return <p key={item}>{item}</p>;
          })
        }
        {
          list.map(item => {
            return <Item key={item._id} title={item.desc} />;
          })
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    fetchStatus: state.testReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchStart: (page, rows)=> {
      dispatch(fetchDataAction(page, rows));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);