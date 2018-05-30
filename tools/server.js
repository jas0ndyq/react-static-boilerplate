const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('../webpack.config');
const compiler = webpack(config);
const express = require('express');
const app = express();

const hotMiddleware = require('webpack-hot-middleware')(compiler);

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    // hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(middleware(compiler, {
  stats: {
    colors: true,
    chunks: false
  }
}));
app.use(hotMiddleware)
app.use('/static/', express.static('./build/static'))
app.listen(9000, () => console.log('Example app listening on port 9000!'))