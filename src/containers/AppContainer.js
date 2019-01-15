import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import Article from '../routes/Article';

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired,
  }

  render () {
    const { history, routes, routerKey, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} key={routerKey}>
          <Route path="/reg" component={Article} />
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default AppContainer;
