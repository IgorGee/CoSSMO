const cssLoaderWithModules =
    'css?modules&localIdentName=[name]__[local]___[hash:base64:5]'

export default {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', cssLoaderWithModules, 'postcss', 'sass'] },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=0&interlaced=false'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  postcss: () => [require('autoprefixer'), require('lost')],
  sassLoader: {
    data: '@import "' + require('path').resolve(__dirname, 'theme/_theme.scss') + '";'
  }
}
