'use strict'
import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'


// !! converte para booleano

const AppContent = ({ userinfo, repos, starred, handleSearch, showrepos, showstarred, botaorepos, botaostar, isFetching, ajaxError }) => (
    <div className='app'>
        {!!ajaxError && <div>Usuário inexistente</div>}
        <Search isDisabled={isFetching} handleSearch={handleSearch} />
        <br />
        {isFetching && <div>Carregando...</div>}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions botaostar={botaostar} botaorepos={botaorepos} />}
        {!!showrepos &&
            <Repos
            className='repos'
            titulo='Repositórios:'
            repos={repos}
        />}
        {!(!!repos.length) && !!showrepos && <div> Sem repositórios </div>}
        {!!showstarred &&
            <Repos
            className='starred'
            titulo='Favoritos:'
            repos={starred}
        />}
        {!(!!starred.length) && showstarred && <div> Sem favoritos </div>}
    </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    showrepos: PropTypes.bool.isRequired,
    showstarred: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    botaorepos: PropTypes.func.isRequired,
    botaostar: PropTypes.func.isRequired

}

export default AppContent