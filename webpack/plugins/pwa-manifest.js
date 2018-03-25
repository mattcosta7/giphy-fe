const WebpackPwaManifest = require('webpack-pwa-manifest');
const { NODE_ENV } = require('../../config');
const path = require('path');

module.exports = new WebpackPwaManifest({
  publicPath: NODE_ENV === 'production' ? '/' : '/',
  filename: 'manifest.json',
  name: 'Giphinator',
  short_name: 'Giphinator',
  description: 'Giphinator',
  background_color: '#ffffff',
  start_url: '/',
  theme_color: '#063861',
  fingerprints: true,
  ios: true,
  orientation: 'portrait',
  display: 'standalone',
  icons: [
    {
      src: path.resolve('./src/assets/favicon/giphy.gif'),
      sizes: [96, 128, 192, 256, 384, 512, 1024], // multiple sizes
      destination: path.join('assets'),
    },
  ],
});
