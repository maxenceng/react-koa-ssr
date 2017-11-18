import path from 'path'
import webpack from 'webpack'

import { WDS_PORT, IS_PROD, STATIC_PATH } from './src/utils/config'

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: IS_PROD ? '/static/' : `http://localhost:${WDS_PORT}/${STATIC_PATH}/`,
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/, loader: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      { test: /\.(jpg|eot|svg|ttf|woff|woff2)$/, loader: ['url-loader'], exclude: /node_modules/ },
    ],
  },
  devtool: IS_PROD ? false : 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
