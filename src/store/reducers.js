import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux/lib/reducer';
import testReducer from './reducers/articleReducer';

export const makeRootReducer = (asyncReducers) => (
  combineReducers({
    // Add sync reducers here
    testReducer,
    router,
    ...asyncReducers,
  })
);

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
