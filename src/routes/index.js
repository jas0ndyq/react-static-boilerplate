// We only need to import the modules necessary for initial render
import Layout from '../components/Layout';
import Home from './Home';
import NotFound from './NotFound';
import counterRoute from './Counter';
import echartsRoute from './Echarts/index';
import Article from './Article/index';
import Calendar from './Calender/index';

require('antd/lib/index.css');

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: Layout,
  indexRoute: Home,
  childRoutes: [
    counterRoute(store),
    { path: '/echarts', component: echartsRoute },
    { path: '/article', component: Article },
    { path: '/calendar', component: Calendar },
    NotFound,
  ],
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
