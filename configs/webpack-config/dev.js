// module.exports = {
//   devtool: 'cheap-source-map',
//   entry: [
//     'webpack/hot/dev-server',
//     'webpack-dev-server/client?http://localhost:8080'
//   ],
//   output: {
//     path: __dirname + '/build',
//     publicPath: '/',
//     filename: './bundle.js'
//   },
//   module: {
//     loaders:[
//       { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
//       { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
//     ]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx'],
//   },
//   plugins: [
//     new webpack.optimize.DedupePlugin(),
//     new uglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new CopyWebpackPlugin([
//       { from: './app/index.html', to: 'index.html' },
//       { from: './app/main.css', to: 'main.css' }
//     ]),
//   ]
// };
