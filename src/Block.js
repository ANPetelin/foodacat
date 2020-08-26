import React from 'react';
import '../scss/style.scss';


const BRAND = 'Нямушка';
const DEFAULT_CAPTION = 'Сказочное заморское яств';
const CHECKED_HOVER_CAPTION = 'Котэ не одобряет?';
export default class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          caption: DEFAULT_CAPTION,
          colorTopMessage: '',
          checked: false,
          classColorDetail: 'colorDefault'
        }
      }

    static getDerivedStateFromProps(props, state) {
        let newBuns = props.feed.buns.split(' ');
        let newCountMouse = null;
        if(isNaN(newBuns[0]))  {
            newBuns = newBuns.join(' ');
        }
        else {
            newCountMouse = newBuns[0];
            delete newBuns[0];
            newBuns = newBuns.join(' ');
        }
        return {
            classColorDetail: props.feed.availability ? state.classColorDetail : 'disabled',
            countMouse: newCountMouse,
            buns: newBuns           
        }
    }

    changeBlock(key) {
        if (key === 'click') {
            this.setState ({ 
                checked: !this.state.checked, 
                classColorDetail: this.state.checked ? 'hover' : 'checked'
            });
        }
        else if (key === 'enter') {
            if(this.state.checked) {
                this.setState ({ classColorDetail: 'checkedhover', caption: DEFAULT_CAPTION, colorTopMessage: ' '})
            }
            else {
                this.setState ({ classColorDetail: 'hover' })
            }
        }
        else if (key === 'leave') {
            if(this.state.checked) {
                this.setState ({ classColorDetail: 'checked', caption: CHECKED_HOVER_CAPTION, colorTopMessage: 'checkedhover'})
            }
            else {
                this.setState ({ classColorDetail: 'colorDefault' })
            }
        }
    }

    render() {
        const feed = this.props.feed;       
        const renderBlockText = () => (
            <div className = "block__inside__text">
                <p className = {"block__inside__text__information " + this.state.colorTopMessage + (feed.availability ? '' : 'block__disabled')}>{this.state.caption}</p>
                <p className = {"block__inside__text__brand " + (feed.availability ? '' : 'block__disabled')}>{BRAND}</p>
                <p className = {"block__inside__text__filling " + (feed.availability ? '' : 'block__disabled')}>{feed.filling}</p>
                <p className = {`block__inside__text__information block__inside__text__information__bottom__text ${feed.availability ? '' : 'block__disabled'}`}>
                    <b>{feed.count}</b> порций <b>{this.state.countMouse}</b>{this.state.buns}</p>
            </div>
        );

        const renderCircle = () => (
            <div className = {"block__inside__circle " + this.state.classColorDetail}>
                <p className = "block__inside__circle__text">{feed.weight}</p>
                <p className = "block__inside__circle__text block__inside__circle__text__weight">кг</p>
            </div>
        );

        const renderBlockFooter = () => (
            !feed.availability
                ? <p className = "text__outside disabled__text__outside">Печалька, {feed.filling} закончился.</p>
                : this.state.checked 
                    ? <p className = "text__outside">{feed.footerMessage}</p>
                    :  <p className = "text__outside">Чего сидишь? Порадуй котэ,
                            <a href="#" className = {this.state.classColorDetail}
                                onClick = {() => this.changeBlock.call(this, 'click')} 
                                onMouseEnter = {() => this.changeBlock.call(this, 'enter')}
                                onMouseLeave = {() => this.changeBlock.call(this, 'leave')}>купи.
                            </a>
                        </p>
        );

        return (
            <div className = "block"> 
                <div className = {"block__inside " + this.state.classColorDetail}
                    onClick = {feed.availability ? () => this.changeBlock.call(this, 'click') : null} 
                    onMouseEnter = {feed.availability ? () => this.changeBlock.call(this, 'enter') : null}
                    onMouseLeave = {feed.availability ? () => this.changeBlock.call(this, 'leave') : null}>
                    {renderBlockText()}
                    <img src = "./img/cat.svg" alt="Кот" className = {feed.availability ? '' : 'block__disabled'}></img>
                    {renderCircle()}
                </div>
                {renderBlockFooter()}
            </div>
        );
    }
}
