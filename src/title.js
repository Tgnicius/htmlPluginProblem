'use strict'
import React from 'react'

// Arrow function, não precisa de return e fica mais limpa

const Title = ({ name, lastname }) => <h1>Olá {`${name} ${lastname}`}!</h1>

Title.defaultProps = {
    name: 'desconhecido',
    lastname: 'sem sobrenome'
}

// Function normal, não tão limpa quanto a arrow function

// const Title = React.createClass({
//     getDefaultProps: function () { // Padrão quando não estão atribuídas (Bom para propriedades não obrigatórias)
//         return {
//             name: 'desconhecido',
//             lastname: 'sem sobrenome',
//             idade: 0,
//             maeidade:0
//         }
// 
//     },
// 
//    render: function () {
//        return (
//            <h1>Olá, {this.props.name} {this.props.lastname}.</h1> // this.props é para pegar uma propriedade e 'name' é uma prop definida em app
// 
//        )
//    }
// 
// })


export default Title
