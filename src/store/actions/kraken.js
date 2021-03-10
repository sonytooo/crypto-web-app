import {proxy} from '../../config';
import {setPrice, setPriceError, setTrades, setTradesError, setTradesLoading} from './common';
import {SET_KRAKEN_PRICE, SET_KRAKEN_TRADES, SET_KRAKEN_TRADES_LOADING} from '../types';

export const getKrakenPairPrice = (pair) => dispatch => {
    return fetch(`${proxy}https://api.kraken.com/0/public/Ticker?pair=${pair}`).then((res) => {
        return res.json();
    }).then((data) => {
        if (!!data.error.length) {
            dispatch(setPriceError(data.error[0], 'EQuery:Unknown asset pair', SET_KRAKEN_PRICE));
        } else {
            dispatch(setPrice(data.result[Object.keys(data.result)[0]].c[0], SET_KRAKEN_PRICE));
        }
        return Promise.resolve();
    }).catch((e) => {
        dispatch(setPriceError(null, 'EQuery:Unknown asset pair', SET_KRAKEN_PRICE));
        return Promise.resolve();
    })
}

export const getKrakenPairTrades = (pair) => dispatch => {
    dispatch(setTradesLoading(true, SET_KRAKEN_TRADES_LOADING));
    fetch(`${proxy}https://api.kraken.com/0/public/Trades?pair=${pair}`).then((res) => {
        return res.json();
    }).then((data) => {
        if (!!data.error.length) {
            dispatch(setTradesError(data.error[0], 'EQuery:Unknown asset pair', SET_KRAKEN_TRADES));
        } else {
            const trades = data.result[Object.keys(data.result)[0]];
            const reducedTrades = trades.slice(Math.max(trades.length - 50, 0)).reverse();
            const normalizedTrades = reducedTrades.map((trade) => ({
                price: trade[0],
                size: trade[1],
                type: trade[3] === 's' ? 'sell' : 'buy',
                time: trade[2]
            }))
            dispatch(setTrades(normalizedTrades, SET_KRAKEN_TRADES));
        }
    }).catch((e) => {
        dispatch(setTradesError(null, 'EQuery:Unknown asset pair', SET_KRAKEN_TRADES));
    })
}