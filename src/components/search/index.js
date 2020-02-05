'use strict'
import React, { PropTypes } from 'react'
import style from './search.css'

const Search = ({ handleSearch, isDisabled }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      disabled={isDisabled}
      onKeyUp={handleSearch}

    />
  </div>

)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

// Descobrir qual o número que alguma tecla representa:
// onKeyUp={(e) => {
// const keyCode = e.which || e.KeyCode
// console.log(keyCode)
//             }}

export default Search
