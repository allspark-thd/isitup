var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    vendor: './src/main/script/vendors.ts',
    main: './src/main/script/main.browser.ts'
  },
  output: {
  	path: './src/main/resources/static/',
  	filename: '[name].bundle.js',
  	sourceMapFilename: '[name].map',
  	chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: root('./src/main/script/'),
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          root('node_modules/rxjs')
        ]
      }

    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
          query: {
              doTypeCheck: true,
              resolveGlobs: false,
              externals: ['typings/main.d.ts']
          },
          include: path.resolve('./src/main/script/'),
          exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [root('./src/main/script/index.html')]
      }
    ]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(false),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    new HtmlWebpackPlugin({
      template: './src/main/script/index.html'
    })
  ],
  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}