import Layout from '../components/Layout';
import NotFound from './NotFound';
// 业务路由
// 首页
import Index from '@routes/User/Index';

require('../static/css/global.css');
require('../static/css/cover.css');

export const createRoutes = (store) => ({
  path: '/',
  component: Layout,
  indexRoute: {
    component: Index,
  },
  childRoutes: [NotFound, ],
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
