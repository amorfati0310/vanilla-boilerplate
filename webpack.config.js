const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// const childProcess = require('child_process');
// Is build option is development
const isProduction = process.env.NODE_ENV === 'production';

const entryPath = path.join(__dirname, './src/app.js');
const outputPath = path.resolve(__dirname, 'dist');
const title = 'Vanila BoilerPlate';
const mode = process.env.NODE_ENV || 'development';

const banner = `
*     Author: Black Coffe
*     Description: Vanila BoilerPlate
*     Source: https://github.com/amorfati0310/vanilla-boilerplate
*     BuildDate: ${new Date().toLocaleString()}
*     Hash: [hash]
*     Chunkhash: [chunkhash]
*     File: [file]

`;

// netify git config error
//*     Contributor: ${childProcess.execSync('git config user.name')}
//*     Commit: ${childProcess.execSync('git rev-parse --short HEAD  ')}

module.exports = {
  mode,
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
            loader: isProduction
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
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.join(__dirname, 'src/index.html'),
      minify: isProduction
        ? {
            collapseWhitespace: true, // 빈칸 제거
            removeComments: true, // 주석 제거
          }
        : false,
      hash: isProduction,
      templateParameters: {
        env: isProduction ? '' : 'Dev',
        title,
      },
    }),
    new CleanWebpackPlugin(),
    ...(isProduction
      ? [new MiniCssExtractPlugin({filename: '[name].css'})]
      : []),
  ],
  stats: {
    colors: true,
  },
  resolve: {
    alias: {
      '@': 'src',
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  optimization: {
    minimizer: isProduction
      ? [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ]
      : [],
  },
};
