'use strict'
import React, { PropTypes } from 'react'
import './repos.css'

const Repos = ({ className, titulo, repos }) => (
  <div className={className}>
    <h2>{titulo}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}><a href={repo.html_url}>{repo.name}</a></li>

      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  titulo: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
