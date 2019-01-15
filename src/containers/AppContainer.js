import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

class AppContainer extends Component {

  constructor () {
    super();
    this.onRouterUpdate = this.onRouterUpdate.bind(this);
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired,
  }

  onRouterUpdate (e) {
    window.scrollTo(0, 0);
  }

  render () {
    const { history, routes, routerKey, store } = this.props;

    return (
      <Provider store={store}>
        <Router onUpdate={this.onRouterUpdate} history={history} children={routes} key={routerKey} />
      </Provider>
    );
  }
}

export default AppContainer;
