import React, { useState, useEffect } from 'react';
import '../scss/style.scss';
import { render } from 'react-dom';

export default class Block extends React.Component {
    constructor(props) {
      super(props)
      this.state = {       
        message: 'Сказочное заморское яство',
        colorMassage: '',
        checked: false,
        changeColor: '',
        classDisablet: ''
      }
    }

    componentDidMount() {
        if (this.props.feed === false) {
            this.setState ({ changeColor: 'disablet', classDisablet: 'opacity02' })
        }
    }

    changeBlock(key) {
        if (key == 'click') {
            if(this.state.checked) {
            this.setState ({ checked: !this.state.checked, changeColor: 'hover' })
            }
            else {
                this.setState ({ checked: !this.state.checked, changeColor: 'checked' })
            }
        }
        else if (key == 'enter') {
            if(this.state.checked) {
                this.setState ({ changeColor: 'checked', message: 'Сказочное заморское яство', colorMassage: '' })
            }
            else {
                this.setState ({ changeColor: 'hover' })
            }
        }
        else if (key == 'leave') {
            if(this.state.checked) {
                this.setState ({ changeColor: 'checkedhover', message: 'Котэ не одобряет?', colorMassage: 'checkedhover ' })
            }
            else {
                this.setState ({ changeColor: '' })
            }
        }      
    }

    render() {
    return (
        <div className = "block"> 
            <div className = {"blockInside " + this.state.changeColor}
                onClick = {this.props.feed ? () => this.changeBlock.bind(this)('click') : null} 
                onMouseEnter = {this.props.feed ? () => this.changeBlock.bind(this)('enter') : null}
                onMouseLeave = {this.props.feed ? () => this.changeBlock.bind(this)('leave') : null}>
                <div className = "blockText">
                    <p className = {"textInside " + this.state.colorMassage + this.state.classDisablet}>{this.state.message}</p>
                    <h1 className = {this.state.classDisablet}>Нямушка</h1>
                    <h3 className = {this.state.classDisablet}>{this.props.filling}</h3>
                    <p className = {"textInside bottom " + this.state.classDisablet}>{this.props.buns}</p>
                </div>
                <img src = "./img/cat.svg" alt="Кот" className = {this.state.classDisablet}></img>
                <div className = {"circle " + this.state.changeColor}>
                    <p className = "textCircle">{this.props.weight}</p>
                    <p className = "textCircle weight">кг</p>
                </div>                
            </div>
            { !this.props.feed ? <p className = "textOutside disabletText">Печалька, {this.props.filling} закончился.</p> :
                this.state.checked ? <p className = "textOutside">{this.props.footerMessage}</p> : 
                <p className = "textOutside">Чего сидишь? Порадуй котэ, <a href="#" className = {this.state.changeColor}
                onClick = {() => this.changeBlock.bind(this)('click')} 
                onMouseEnter = {() => this.changeBlock.bind(this)('enter')}
                onMouseLeave = {() => this.changeBlock.bind(this)('leave')}>купи.</a></p> }
        </div>
    )}
}