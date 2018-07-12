import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCoinsData } from '../actions/coins';

class App extends Component {

    componentDidMount() {
        if (!this.props.hasFetchedCoins) this.props.dispatch(getCoinsData());
    }

    renderCoin(coin) {

        // CHECK IF THE PERCENTAGE CHANGE IS UP OR DOWN
        var changetype = "down";
        if(coin.quotes.USD.percent_change_24h >= 0) changetype = "up";

        // RETURN THE COIN CARD
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={coin.id}>
                <div className="coin">
                    <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/" + coin.id + ".png"} alt={coin.name} />
                    <div className="details">
                        <div className="name">{coin.name}</div>
                        <div className="price">${coin.quotes.USD.price} <span className={"change " + changetype}>{coin.quotes.USD.percent_change_24h}%</span></div>
                    </div>
                </div>
            </div>
        );
    }
  
    render() {
        if(!this.props.coins.list.data)
        {
            return (
                <div className="loading"></div>
            )
        }
        else
        {
            const coins = this.props.coins.list.data;
            return (
                <div>


                    <div className="container-fluid coins">
                        <div className="row coins-inner">
                            { coins.map(this.renderCoin) }
                        </div>
                    </div>

                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Website branded & powered by <a href="https://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a></p>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        coins: state.coins,
        hasFetchedCoins: state.coins.hasFetched
    };
};

export default connect(mapStateToProps)(App);
