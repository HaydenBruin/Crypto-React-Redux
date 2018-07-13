import React, { Component } from 'react'

class CoinCard extends Component {
  
    openCoinOverlay(coinid)
    {
        var overlay = document.querySelector('.coinoverlay-' + coinid);
        overlay.classList.add('coinactive');
    }

    closeCoinOverlay(coinid)
    {
        var overlay = document.querySelector('.coinoverlay-' + coinid);
        overlay.classList.remove('coinactive');
    }

    render() {
        // SET COIN VALUES
        var coin = this.props.data;

        // CHECK IF THE PERCENTAGE CHANGE IS UP OR DOWN
        var changetype = "down";
        if(coin.quotes.USD.percent_change_24h >= 0) changetype = "up";

        // RETURN THE COIN CARD
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="coin" onClick={() => this.openCoinOverlay(coin.id)}>
                    <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/" + coin.id + ".png"} alt={coin.name} />
                    <div className="details">
                        <div className="name">{coin.name}</div>
                        <div className="price">${coin.quotes.USD.price} <span className={"change " + changetype}>{coin.quotes.USD.percent_change_24h}%</span></div>
                    </div>
                </div>
                <div className={"coinoverlay coinoverlay-" + coin.id}>
                    <div className="overlay-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <img src={"https://s2.coinmarketcap.com/static/img/coins/128x128/" + coin.id + ".png"} alt={coin.name} />
                                    <div className="details">
                                        <div className="name">{coin.name}</div>
                                        <div className="price">${coin.quotes.USD.price} <span className={"change " + changetype}>{coin.quotes.USD.percent_change_24h}%</span></div>
                                        <div className="detail">
                                            <div className="title">Volume 24h</div>
                                            <div className="value">{coin.quotes.USD.volume_24h}</div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">Market Cap</div>
                                            <div className="value">{coin.quotes.USD.market_cap}</div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">Percent Change 1H</div>
                                            <div className="value">{coin.quotes.USD.percent_change_1h}</div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">Percent Change 24H</div>
                                            <div className="value">{coin.quotes.USD.percent_change_24h}</div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">Percent Change 7D</div>
                                            <div className="value">{coin.quotes.USD.percent_change_7d}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="close" onClick={() => this.closeCoinOverlay(coin.id)}>X</div>
                </div>
            </div>
        );
    }
}

export default CoinCard;
