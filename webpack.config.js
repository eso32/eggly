var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style1.[chunkhash].css');
const extractSCSS = new ExtractTextPlugin('style2.[chunkhash].css');

const VENDOR_LIBS = [
  "angular", "angular-route", "jquery", "angular-animate", "bootstrap"
]

module.exports = {
  entry: { //passing object passing many entry points
    bundle: './src/index.js', //called bandle.js i zaczynamy w index.js
    vendor: VENDOR_LIBS  //SEPARATE BUNDLE VENDOR.JS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' //dynamic naming - replace name with the key from entry obect
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader'])
      },
      {
        use: 'html-loader',
        test: /\.html$/,
        exclude: /node_modules/
      },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000}
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']//rozwiązuje problem podwójnego ładowania skryptów vendorów
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html' //updatuje dokumenty html -> tag script i src
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    extractCSS,
    extractSCSS //kolejność dodania ExtractPlugnów wspływa na koleność dodania linków do index.html
  ]
};

//ramrif - odpowiada za czyszczenie katalogu -> package.json -> scripts/clean
