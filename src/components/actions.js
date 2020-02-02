'use strict'
import React, { PropTypes } from 'react'

const Actions = ({ botaorepos, botaostar }) => (
    <div className='actions'>
        <button onClick={botaorepos}>Ver repositórios</button>
        <button onClick={botaostar} style={{ marginLeft: '20px' }}>Ver favoritos</button>
    </div>
)

Actions.propTypes = {
    botaorepos: PropTypes.func.isRequired,
    botaostar: PropTypes.func.isRequired
}

export default Actions