'use strict' // ?

const path = require('path') // ?
const webpack = require('webpack')
const validate = require('webpack-validator') // Ver erros na linha do webpack (se não tiver, os erros aparecem em outros locais)

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = validate({
  devtool: 'source-map', // Se apertar f12 -> sources, agora tem um webpack nos diretórios, facilitando debugs. (Sem isso, o erro seria no bundle, com isso, ele agora mostra diretamente no código "editável")
  entry: [
    'react-hot-loader/patch', // react hot loader necessita disso
    'webpack-dev-server/client?http://localhost:3000', // Quando iniciar o webpack, também iniciar o dev server
    'webpack/hot/only-dev-server', // Webpack irá utilizar o hot-loader apenas quando o dev-server tiver executando
    path.join(__dirname, 'src', 'index')

  ], // {src: pasta, index: arquivo} Junta o path para funcionar em qualquer dispositivo (windows usa barra invertida)
  output: {
    path: path.join(__dirname, 'dist'), // Cria o diretorio dist
    filename: '[name]-[hash].js', // Nome do arquivo criado no diretorio acima
    publicPath: '' /* Local onde o webpack server (bundle) deve ficar (salva o bundle em: /dist/bundle.js)
                                Usar o mesmo caminho, pois o trabalho será completo na index (Not certain) */
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Vamos precisar para o webpack fazer o hot-reload
    new DashboardPlugin(), // deixa as coisas no console limpas e organizadas
    new ExtractTextPlugin('[name]-[hash].css'), // hash serve para fazer coisas com cache, uma vez q cada alteração o muda

    new HtmlPlugin({ // altera o index.html
      title: 'GitHub App',
      template: path.join(__dirname, 'src', 'html', 'template-dev.html')
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
      exclude: /node_modules/,
      include: /src/,
      loaders: ['style', 'css?modules'] // Se tivesse o ExtractTextPlugin('style, css') Vai usar o css loader, então extrai para o valor que tá na const extracttext... e se der problema, usa o style (desse primeiro argumento)

    }]
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'), // toda vez que encontra um módulo que inicia com src (cuidado para o primeiro parâmetro não ser algo que esteja dentro de node_modules)
      components: path.join(__dirname, 'src', 'components') // toda vez que encontra 'components' no código, ele vai resolver esse caminho usando o caminho da app (__dirname)/src/components -> isso serve para a posição importada em app-content.js não ser relativa
    }
  }

})
