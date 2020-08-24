import React from 'react';
import Block from './Block';
import '../scss/style.scss';

let getData = () => {
    let data = { feeds: [
        { availability: true,
            filling: 'с фуа-гра',
            buns: '10 порций мышь в подарок',
            weight: '0,5',
            footerMessage: 'Печень утки разварная с артишоками.' },
        { availability: true,
            filling: 'с рыбой',
            buns: '40 порций 2 мыши в подарок',
            weight: '2',
            footerMessage: 'Головы щучьи с чесноком да свежайшая сёмгушка.' },        
        { availability: false,
            filling: 'с курой',
            buns: '100 порций 5 мышей в подарок заказчик доволен',
            weight: '5',
            footerMessage: 'Филе из цыплят с трюфелями в бульоне.' }
    ]}
    return data;
}


class App extends React.Component {
    constructor() {
        super()
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
            <div className="body">
                <h2>Ты сегодня покормил кота?</h2>
                <div className="container">
                    {this.state.feeds.map((feed, index) => {
                        return (<div key={index}>
                        <Block 
                        feed={feed.availability}
                        filling={feed.filling}
                        buns={feed.buns}
                        weight={feed.weight}
                        footerMessage={feed.footerMessage} /></div>);
                    })}
                </div>
            </div>
        )
    }
}

export default App;