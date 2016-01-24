module.exports = {
  noParse: /highlight\.js\/lib\/languages\/.*\.js/,
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
  }, {
    test: /\.json$/,
    loader: 'json'
  }, {
    test: /\.css$/,
    loader: 'style!css'
  }, {
    test: /\.less$/,
    loader: 'style!css?localIdentName=[path][name]---[hash:base64:5]!less'
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=10000&minetype=application/font-woff'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file'
  }]
};