'use strict'
import React from 'react'

const Button = ({ children, handleClick }) => ( // children -> conteúdo posto entre as tags de abertura e fechadura do componente
  <button className='main-button' onClick={handleClick}>{children}</button>
)

Button.propTypes = { // assert em py3. Dá erro se o parâmetro não for do tipo citado (bom para saber onde está algum erro)

  handleClick: React.PropTypes.func // React.PropTypes.func.isRequired -> Dá erro se estiver vazio também, ou seja, func obrigatória
} // Os tipos de PropTypes estão nesse link: https://reactjs.org/docs/typechecking-with-proptypes.html

export default Button
