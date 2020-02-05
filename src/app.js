'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      showrepos: false,
      showstarred: false,
      isFetching: false,
      ajaxError: false
    }
  }

  getUrl (username, type) {
    const internalType = type ? `/${type}` : '' // Se tiver type, internalType = `/${type}`, se não, é igual a ''
    const internalUsername = username ? `/${username}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.KeyCode
    const ENTER = 13

    e.persist()

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(this.getUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following

            }
          })
        })

      ajax().get(this.getUrl(value, 'repos'))
        .then((result) => {
          this.setState({
            repos: result
          })
        })
      ajax().get(this.getUrl(value, 'starred'))
        .then((result) => {
          this.setState({
            starred: result
          })
        })

        .always(() => { // quando termina a chamada ajax realiza essa função
          this.setState({ isFetching: false }),
          this.setState({ ajaxError: false })
        })
    }
  }

  botaorepos () {
    this.setState({ showrepos: !this.state.showrepos })
  }

  botaostar () {
    this.setState({ showstarred: !this.state.showstarred })
  }

  render () {
    return (
      <AppContent
        {...this.state} // (spread operator) substitui o comentário abaixo:
        /*
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                isFetching={this.state.isFetching}
                showrepos={this.state.showrepos}
                showstarred={this.state.showstarred}
                */
        handleSearch={(e) => this.handleSearch(e)}
        botaorepos={() => this.botaorepos()}
        botaostar={() => this.botaostar()}

      />

    )
  }
}

export default App
