'use strict' // ?

const path = require('path') // ?
const webpack = require('webpack')
const validate = require('webpack-validator') // Ver erros na linha do webpack (se não tiver, os erros aparecem em outros locais)

const HtmlPlugin = require('html-webpack-plugin')


module.exports = validate({
    devtool: 'source-map', // Se apertar f12 -> sources, agora tem um webpack nos diretórios, facilitando debugs. (Sem isso, o erro seria no bundle, com isso, ele agora mostra diretamente no código "editável")
    entry: [
        'react-hot-loader/patch', // react hot loader necessita disso
        'webpack-dev-server/client?http://localhost:3000', // Quando iniciar o webpack, também iniciar o dev server
        'webpack/hot/only-dev-server', // Webpack irá utilizar o hot-loader apenas quando o dev-server tiver executando
        path.join(__dirname, 'src', 'index'),

    ],// {src: pasta, index: arquivo} Junta o path para funcionar em qualquer dispositivo (windows usa barra invertida)
    output: {
        path: path.join(__dirname, 'dist'), // Cria o diretorio dist
        filename: 'bundle.js', // Nome do arquivo criado no diretorio acima
        publicPath: '' /* Local onde o webpack server (bundle) deve ficar (salva o bundle em: /dist/bundle.js)
                                Usar o mesmo caminho, pois o trabalho será completo na index (Not certain)*/ 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Vamos precisar para o webpack fazer o hot-reload
        new HtmlPlugin({ // altera o index.html
            title: 'GitHub App',
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
            exclude: /node_modules/,
            include: /src/,
            loaders: ['style', 'raw']

        }]
    }
})
