const webpack = require('webpack');
const { extractPluginMaker } = require('./extract-text-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const pwaManifest = require('./pwa-manifest');
const { CLIENT_PORT, NODE_ENV, GIPHY_API_KEY } = require('../../config');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const CompressionPlugin = require('compression-webpack-plugin');
const FaviconPlugin = require('favicons-webpack-plugin');

const pluginSets = {
  client: {
    development: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      extractPluginMaker({
        disable: true,
      }),
      new webpack.ProvidePlugin({
        Promise: 'bluebird',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.CLIENT_PORT': CLIENT_PORT,
        'process.env.GIPHY_API_KEY': JSON.stringify(GIPHY_API_KEY),
      }),
      new FaviconPlugin({
        logo: './src/assets/favicon/giphy.gif',
        prefix: 'assets/icon/',
        emitStats: false,
        statsFilename: 'iconstats-[hash].json',
        persistentCache: true,
        background: false,
        title: 'giphinator',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      }),
      new HTMLWebpackPlugin({
        template: 'src/index.html',
        alwaysWriteToDisk: true,
      }),
      new HtmlWebpackHarddiskPlugin(),
      pwaManifest,
      new SWPrecacheWebpackPlugin({
        cacheId: 'giphinator',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: '/index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      }),
    ],
    production: [
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      extractPluginMaker({
        production: true,
      }),
      new webpack.ProvidePlugin({
        Promise: 'bluebird',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.CLIENT_PORT': CLIENT_PORT,
        'process.env.GIPHY_API_KEY': JSON.stringify(GIPHY_API_KEY),
      }),
      new StatsWriterPlugin({
        filename: 'stats.json', // Default
        fields: null,
      }),
      new FaviconPlugin({
        logo: './src/assets/favicon/giphy.gif',
        prefix: 'assets/icon/[hash]-',
        emitStats: false,
        statsFilename: 'iconstats-[hash].json',
        persistentCache: true,
        inject: true,
        background: false,
        title: 'giphinator',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      }),
      new HTMLWebpackPlugin({
        template: 'src/index.html',
        alwaysWriteToDisk: true,
      }),
      new HtmlWebpackHarddiskPlugin(),
      pwaManifest,
      new SWPrecacheWebpackPlugin({
        cacheId: 'giphinator',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: '/index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      }),
      new CssoWebpackPlugin(),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
      }),
    ],
  },
  server: {
    development: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      extractPluginMaker(),
      new webpack.ProvidePlugin({
        Promise: 'bluebird',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.CLIENT_PORT': CLIENT_PORT,
        'process.env.GIPHY_API_KEY': JSON.stringify(GIPHY_API_KEY),
      }),
    ],
    production: [
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      extractPluginMaker({
        production: true,
      }),
      new webpack.ProvidePlugin({
        Promise: 'bluebird',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.CLIENT_PORT': CLIENT_PORT,
        'process.env.GIPHY_API_KEY': JSON.stringify(GIPHY_API_KEY),
      }),
    ],
  },
};

module.exports = (type) => {
  const env = process.env.NODE_ENV || 'development';
  if (!pluginSets[type]) {
    throw new Error('Invalid type for plugin set');
  } else if (!pluginSets[type][env]) {
    throw new Error('Invalid environment for plugin set');
  }
  return pluginSets[type][env];
};
