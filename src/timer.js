'use strict'
import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }
        this.timer;
    }

    componentWillReceiveProps(nextProps) { // Acontece quando um elemento recebe um novo props (O primeiro prop não serve)
        console.log('componentWillRecieveProps timer', this.props, nextProps) //this.props é o antigo e nextProps é o novo
    }

    shouldComponentUpdate(nextProps, nextState) { // Toda vez que o componente for atualizado, erá feita essa func
        // console.log('shouldComponentUpdate timer', 'nextProps =', nextProps.time, 'nextState =', nextState.time, 'this.props = ', this.props.time)
        // return true -> render() ocorre / false -> render() não ocorre. Bom para controlar quando é para o render() ocorrer
        return this.props.time !== nextProps.time

    }
        
    componentWillUpdate(nextProps, nextState) { // Assim que o render() for ser atualizado, essa função será realizada
       console.log('componentWillUpdate timer', 'nextProps =', nextProps.time, 'nextState =', nextState.time, 'this.props = ', this.props.time)

    }

    componentDidUpdate(prevProps, prevState) { // Assim que o componente/render() atualizou
        console.log('componentDidUpdate timer', 'prevProps =', prevProps.time, 'prevState =', prevState.time, 'this.props = ', this.props.time)


    }

    componentDidMount() { // Onde se criam algumas coisas no timer
        this.timer = setInterval(() => { this.setState({ time: this.state.time + 1 }) }, 1000)
    }

    componentWillUnmount() { // Onde destroem essas coisas para não dar erro
        clearInterval(this.timer) // Não dá erro quando está hide, pois ele não "existe", então essa func para o timer
    }

    render() {
        return <div>Timer: {this.state.time}</div>
    }
}



export default Timer