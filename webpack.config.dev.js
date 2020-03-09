const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    overlay: true,
    stats: 'errors-only',
    contentBase: './dist',
    hot: true,
  },
});
