'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preloaders = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'standard'
  }]
  return newConfig
}
