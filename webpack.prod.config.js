'use strict' // ?

const path = require('path') // ?
const webpack = require('webpack')
const validate = require('webpack-validator') // Ver erros na linha do webpack (se não tiver, os erros aparecem em outros locais)

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'), // Cria o diretorio dist
    filename: '[name]-[hash].js' // Nome do arquivo criado no diretorio acima // hash serve para fazer coisas com cache, uma vez q cada alteração o muda
  },
  plugins: [
    crp,
    styles,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }

    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false } // não gera warnings quando form comprimir o código para gerar o bundle

    }),

    new webpack.optimize.DedupePlugin(), // impede duas dependencias diferentes usarem o mesmo arquivo duas vezes, aumenta a otimização

    new webpack.optimize.OccurenceOrderPlugin(), // Os arquivos mais leves são carregados primeiro

    new HtmlPlugin({ // altera o index.html
      title: 'GitHub App',
      inject: false,
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.js$/, // Tods arquivos que terminam com 'js'
      exclude: /node_modules/, // Não vai procurar os arquivos nessa pasta, pois tem mt coisa nela e ela é inútil ao babel ---> melhora de performance
      include: /src/, // Nosso diretório onde tem nossos arquivos
      loader: 'babel'
    },
    {
      test: /\.css$/,
      exclude: /node_modules|(search|style)\.css/,
      include: /src/,
      loader: styles.extract('style', 'css') // Vai usar o css loader, então extrai para o valor que tá na const extracttext... e se der problema, usa o style (desse primeiro argumento)

    }, {
      test: /(search|style)\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loader: crp.extract('style', 'css')

    }]
  }
})
