const path = require('path');
const nodeExternals = require('webpack-node-externals');
const rulesMaker = require('./webpack/rules');
const UglfifyJSPlugin = require('uglifyjs-webpack-plugin');
const makePluginSet = require('./webpack/plugins');
const { NODE_ENV, CLIENT_PORT } = require('./config');

const outputPath = path.resolve('./dist');
const publicPath = NODE_ENV !== 'production' ? '/public/' : '/public/';
const resolve = {
  extensions: ['.js', '.jsx'],
};

const clientConfig = {
  name: 'client',
  entry: {
    bundle: [
      'babel-polyfill',
      NODE_ENV !== 'production' &&
        `webpack-hot-middleware/client?name=client&&path=http://localhost:${CLIENT_PORT}/__webpack_hmr`,
      './src/entry/client',
    ].filter(Boolean),
  },
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  optimization: {
    minimizer: [
      new UglfifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          topLevel: true,
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  output: {
    path: outputPath,
    filename: NODE_ENV === 'production' ? 'scripts/[name].[chunkHash].js' : 'scripts/[name].js',
    publicPath,
    sourceMapFilename: 'sourceMaps/[file].map',
    chunkFilename:
      NODE_ENV === 'production' ? 'scripts/[name].[chunkHash].js' : 'scripts/[name].js',
  },
  devtool: NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  module: {
    rules: rulesMaker({ server: false }),
  },
  resolve,
  plugins: makePluginSet('client'),
  node: {
    fs: 'empty',
  },
};

const serverConfig = {
  name: 'server',
  entry: {
    server: ['babel-polyfill', './src/server'].filter(Boolean),
  },
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: outputPath,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath,
    sourceMapFilename: 'sourceMaps/[file].map',
  },
  devtool: NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  module: {
    rules: rulesMaker({ server: true }),
  },
  resolve,
  plugins: makePluginSet('server'),
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: true,
    __filename: true,
  },
  context: path.resolve(__dirname),
};

module.exports = [clientConfig, serverConfig];
