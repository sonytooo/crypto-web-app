import {proxy} from '../../config';
import {setPrice, setPriceError, setTrades, setTradesLoading} from './common';
import {SET_BITFINEX_PRICE, SET_BITFINEX_TRADES, SET_BITFINEX_TRADES_LOADING} from '../types';

export const getBitfinexPairPrice = (pair) => dispatch => {
    return fetch(`${proxy}https://api.bitfinex.com/v1/pubticker/${pair}`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.message) {
            dispatch(setPriceError(data.message, 'Unknown symbol', SET_BITFINEX_PRICE));
        } else {
            dispatch(setPrice(data.last_price, SET_BITFINEX_PRICE));
        }
        return Promise.resolve();
    }).catch((e) => {
        dispatch(setPriceError(null, 'Unknown symbol', SET_BITFINEX_PRICE));
        return Promise.resolve();
    })
}

export const getBitfinexPairTrades = (pair) => dispatch => {
    dispatch(setTradesLoading(SET_BITFINEX_TRADES_LOADING));
    fetch(`${proxy}https://api.bitfinex.com/v1/trades/${pair}?limit_trades=50`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.message) {
            dispatch(setPriceError(data.message, 'Unknown symbol', SET_BITFINEX_TRADES));
        } else {
            const trades = data.map((trade) => ({
                price: trade.price,
                size: trade.amount,
                time: trade.timestamp,
                type: trade.type
            }))
            dispatch(setTrades(trades, SET_BITFINEX_TRADES));
        }
    }).catch((e) => {
        dispatch(setPriceError(null, 'Unknown symbol', SET_BITFINEX_TRADES));
    })
}