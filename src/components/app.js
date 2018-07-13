import React, { Component } from 'react'
import { connect } from 'react-redux';

// GET CHILDREN COMPONENTS
import CoinCard from "./coin-card";

// RETRIEVE COIN API CALL
import { getCoinsData } from '../actions/coins';

class App extends Component {

    componentDidMount() {
        if (!this.props.hasFetchedCoins) this.props.dispatch(getCoinsData());
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
                            {
                                coins.map(function(coin) {
                                    return <CoinCard key={coin.id} data={coin} />;
                                }, this)
                            }
                        </div>
                    </div>

                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Powered by <a href="https://haydenbruin.com" target="_blank" rel="noopener noreferrer">Hayden Bruin</a> - Code on <a href="https://github.com/Haydzyo/Crypto-React-Redux" target="_blank" rel="noopener noreferrer">GitHub</a></p>
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
