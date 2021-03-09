import {proxy} from '../../config';
import {setPrice, setPriceError, setTrades, setTradesError} from './common';
import {SET_BINANCE_PRICE, SET_BINANCE_TRADES} from '../types';

export const getBinancePairPrice = (pair) => dispatch => {
    return fetch(`${proxy}https://api.binance.com/api/v3/ticker/price?symbol=${pair}`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.code) {
            dispatch(setPriceError(data.code, -1121, SET_BINANCE_PRICE));
        } else {
            dispatch(setPrice(data.price, SET_BINANCE_PRICE));
        }
        return Promise.resolve();
    }).catch((e) => {
        dispatch(setPriceError(null, -1121, SET_BINANCE_PRICE));
        return Promise.resolve();
    })
}

export const getBinancePairTrades = (pair) => dispatch => {
    fetch(`${proxy}https://api.binance.com/api/v3/trades?symbol=${pair}&limit=50`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.code) {
            dispatch(setTradesError(data.code, -1121, SET_BINANCE_TRADES));
        } else {
            const trades = data.reverse().map((trade) => ({
                price: trade.price,
                type: trade.isBuyerMaker ? 'sell' : 'buy',
                size: trade.qty,
                time: trade.time
            }))
            dispatch(setTrades(trades, SET_BINANCE_TRADES));
        }
    }).catch((e) => {
        dispatch(setTradesError(null, -1121, SET_BINANCE_TRADES));
    })
}