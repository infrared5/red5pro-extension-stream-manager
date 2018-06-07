import path from 'path'
import webpack from 'webpack'
import pkg from './package.json'

const banner = `
  ${pkg.name} - ${pkg.description}
  Author: ${pkg.author}
  Version: ${pkg.version}
  Url: ${pkg.homepage}
`;

const buildDir = path.join(process.cwd(), 'build', `red5pro-extension-stream-manager-${pkg.version}`, 'lib', 'red5pro')
const distDir = path.join(process.cwd(), 'dist', `red5pro-extension-stream-manager-${pkg.version}`, 'lib', 'red5pro')
const PROD = (process.env.NODE_ENV === 'production')
const STAGING = (process.env.NODE_ENV === 'staging')

let plugins = [
  new webpack.BannerPlugin(banner),
  new webpack.DefinePlugin({
    "SDK_VERSION": JSON.stringify(pkg.version),
    "LOG_LEVEL": PROD ? JSON.stringify('error') : JSON.stringify('debug')
  })
]

if(PROD || STAGING) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      debug: false
  }))
}

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: [path.join(process.cwd(), 'src', 'js', 'index.js')],
  output: {
    library: 'red5prosdk_ext_stream_manager',
    libraryTarget: 'umd',
    path: PROD ? distDir : buildDir,
    filename: (PROD || STAGING) ? 'red5pro-extension-stream-manager.min.js' : 'red5pro-extension-stream-manager.js'
  },
  devtool: (PROD || STAGING) ? '' : '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: plugins
}
