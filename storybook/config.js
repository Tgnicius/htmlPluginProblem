import { configure } from '@kadira/storybook'

import '../src/css/style.css'

const req = require.context('../src/components', true, /\.story\.js$/) // pesquisa nesse diretorio tods os arquivos que terminem em .story.js

// keys é o array das coisas 'capturada' por req
function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
