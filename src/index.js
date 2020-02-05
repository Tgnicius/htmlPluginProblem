'use strict'
import React from 'react'
/* import ReactDOM from 'react-dom'
  * import {render as reactDomRender} from 'react-dom' --> Pegar do 'react-dom' a propriedade render (1) e usá-la no meu projeto como reactDomRender(2)
 */
import { render } from 'react-dom' // Exporta a função render de 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app' // ./ significa relativamente ao arquivo (index.html no caso)
import './css/style.css' // css da página que "entra" na página através do loader

/* var React = require('react') //Importa o 'react' que foi baixado por npm
var ReactDOM = require('react-dom') //Importa o 'react-dom' também baixado por npm */
const renderApp = (NextApp) => {
  render( // se fosse import ReactDOM from 'react-dom' ao invés de import {render} from 'react-dom' ficaria ReactDOM.render

    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]') // div no index.html (quase um id, só que sem guardar nenhuma variável global que o id guarda)
  )
}

renderApp(App)

if (module.hot) { // hot-reload --> Atualiza automaticamente assim que salvar, sem precisar atualizar a página
  module.hot.accept('./app', () => { // './app' --> Arquivo principal do app que será atualizado/primeiro a atualizar
    const NextApp = require('./app').default /* Acontece uma atualização, ao invés de atualizar tudo, atualiza apenas o
    necessário --- .default serve para importar um js para es6, se não importaria o default ao invés do app */
    renderApp(NextApp)
  })
}
