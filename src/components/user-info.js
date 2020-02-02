'use strict'
import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        <table>
            <tbody>
                <tr>
                    <td>
                        <img style={{ height: '200px', width: '200px', justifyContent: 'left' }} src={userinfo.photo} />
                    </td>
                    <td>
                        <h1 style={{ marginLeft: '20px' }} className='username'><a href={`https://github.com/${userinfo.login}`}>
                            {userinfo.username} </a></h1>


                        <ul style={{ marginLeft: '20px' }} className='repos-info'>
                            <li>Repositórios: {userinfo.repos} </li>
                            <li>Seguidores: {userinfo.followers} </li>
                            <li>Seguindo: {userinfo.following} </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo