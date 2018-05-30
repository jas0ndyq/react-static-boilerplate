const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const args = process.argv.slice(2);
const DEBUG = !(args[0] === '--release');
const VERBOSE = args[0] === '--verbose';

/**
 * Webpack configuration (core/main.js => build/bundle.js)
 * http://webpack.github.io/docs/configuration.html
 */
const config = {

  // The base directory
  context: path.resolve(__dirname, './src'),

  // The entry point for the bundle
  entry: {
    app: [
      './main.js',
    ],
    vendor: [ 
      'es5-shim',
      'es5-shim/es5-sham',
      'babel-polyfill',
      'es6-promise',
      'fetch-detector',
      'fetch-ie8',
      'fetch-jsonp',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk',
    ],
    '../tools/dev-client.js':'../tools/dev-client.js'
  },

  // Options affecting the output of the compilation
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[name].js',
    sourcePrefix: '  ',
  },

  // Switch loaders to debug or release mode
  debug: DEBUG,
  cache: DEBUG,

  // Developer tool to enhance debugging, source maps
  // http://webpack.github.io/docs/configuration.html#devtool
  // devtool: DEBUG ? 'source-map' : false,
  devtool: false,

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
    children: false,
  },

  // The list of plugins for Webpack compiler
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      __DEV__: DEBUG,
      __BASENAME__: JSON.stringify(process.env.BASENAME || ''),
    }),
    new ExtractTextPlugin(
      'assets/styles.css',
      {
        minimize: !DEBUG,
        allChunks: true,
      }
    ),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: !DEBUG ? {
        collapseWhitespace: true,
      } : null,
      hash: true,
      inject: true
    }),

  ],

  // Options affecting the normal modules
  module: {
    preLoaders: (!DEBUG) ? [
      {
        test: /\.jsx?$/, 
        loader: "eslint-loader", 
        include: [
          path.resolve(__dirname, './src'),
        ]
      }
    ]:[],
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: [['import', { libraryName: 'antd'}]]
        },
      },
      {
        test: /\.css/,
        loader: DEBUG ? 
                'style-loader!css-loader?-autoprefixer&modules=true&localIdentName=[local]': 
                ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?-autoprefixer&modules=true&localIdentName=[local]'
                  )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?-autoprefixer!sass-loader'
        ),
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: 'assets/resource/[name].[hash].[ext]',
          limit: 100,
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3|ogg)$/,
        loader: 'file-loader',
        query: {
          name: 'assets/resource/[name].[hash].[ext]',
        },
      },
    ],
  },

  // Alias
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      routes: path.resolve(__dirname, './src/routes/'),
      services: path.resolve(__dirname, './src/services/'),
      store: path.resolve(__dirname, './src/store/'),
    },
  },
}

// Optimize the bundle in release (production) mode
if (!DEBUG) {
  config.plugins.push(new webpack.optimize.DedupePlugin())
}
else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NoErrorsPlugin())
  config.entry['../tools/dev-client.js'] = '../tools/dev-client.js'
}

// https://github.com/jun0205/react-static-boilerplate/issues/14
// Must always Uglify somehow or it won't work in IE8
const uglyOptions = !DEBUG ? {
  compress: {
    warnings: VERBOSE,
    screw_ie8: false,
  },
  mangle: { screw_ie8: false },
  output: { screw_ie8: false },
} : {
    mangle: false,
    compress: {
      drop_debugger: false,
      warnings: VERBOSE,
      screw_ie8: false,
    },
    output: {
      beautify: true,
      comments: true,
      bracketize: true,
      indent_level: 2,
      keep_quoted_props: true,
      screw_ie8: false,
    },
  }

config.plugins.push(new webpack.optimize.UglifyJsPlugin(uglyOptions))

if (!DEBUG) {
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
  config.module.loaders
    .find(x => x.loader === 'babel-loader').query.plugins
    .unshift(
    'transform-react-remove-prop-types',
    'transform-react-constant-elements',
    'transform-react-inline-elements',
    'transform-es3-modules-literals',
    'transform-es3-member-expression-literals',
    'transform-es3-property-literals'
    )
}

module.exports = config
