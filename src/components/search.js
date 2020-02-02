'use strict'
import React, { PropTypes } from 'react'


const Search = ({ handleSearch, isDisabled }) => (
    <div className='search'>
        <input
            className='search-bar'
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