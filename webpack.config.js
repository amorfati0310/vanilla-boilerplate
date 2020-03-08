const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Is build option is development
/*eslint-disable */
const IS_DEV = process.env.NODE_ENV === 'dev';

const entryPath = path.join(__dirname, './src/app.js');
const outputPath = path.join(__dirname, 'dist');

module.exports = (env, options) => {
  const config = {
    entry: {
      app: entryPath,
    },
    output: {
      filename: '[name].bundle.js',
      path: outputPath,
    },
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       commons: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendors',
    //         chunks: 'all',
    //       },
    //     },
    //   },
    // },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader:
                process.env.NODE_ENV === 'production'
                  ? MiniCssExtractPlugin.loader // 프로덕션 환경
                  : 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {modules: true},
            },
            {loader: 'sass-loader'},
          ],
        },
        {
          test: /\.m?(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
          },
        },
      ],
    },
    plugins: [
      //   new webpack.DefinePlugin({
      //     IS_DEV,
      //   }),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        title: 'Custom template',
        template: path.join(__dirname, 'src/index.html'),
        minify:
          process.env.NODE_ENV === 'production'
            ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              }
            : false,
        hash: process.env.NODE_ENV === 'production',
      }),
    ],
    stats: {
      colors: true,
    },
    devtool: 'source-map',
    devServer: {
      overlay: true,
      stats: 'errors-only',
    },
  };

  return config;
};
