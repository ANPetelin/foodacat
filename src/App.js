import React from 'react';
import Block from './Block';
import '../scss/style.scss';

const HEADER = 'Ты сегодня покормил кота?';
const getData = () => {
    return { 
        feeds: [
            { 
                availability: true,
                filling: 'с фуа-гра',
                buns: 'мышь в подарок',
                count: '10',
                weight: '0,5',
                footerMessage: 'Печень утки разварная с артишоками.'
            },
            { 
                availability: true,
                filling: 'с рыбой',
                buns: '2 мыши в подарок',
                count: 40,
                weight: '2',
                footerMessage: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
            },
            { 
                availability: false,
                filling: 'с курой',
                buns: '5 мышей в подарок заказчик доволен',
                count: 100,
                weight: '5',
                footerMessage: 'Филе из цыплят с трюфелями в бульоне.'
            }
        ]
    };
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feeds: []
        }
    }

    componentDidMount() {
        let newFeeds = getData();        
        this.setState ({ feeds: newFeeds.feeds })
    }

    render() {
        return (
            <div>
                <p className="header">{HEADER}</p>
                <div className="container">
                    {this.state.feeds.map((feed, index) => (
                        <div key={index}>
                            <Block feed={feed} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default App;
