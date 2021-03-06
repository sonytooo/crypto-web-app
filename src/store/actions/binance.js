// import {proxy} from '../../config';
import moment from 'moment';
import {setPrice, setPriceError, setTrades, setTradesError, setTradesLoading} from './common';
import {SET_BINANCE_PRICE, SET_BINANCE_TRADES, SET_BINANCE_TRADES_LOADING} from '../types';
import formatPrice from '../../utils/formatPrice';

export const getBinancePairPrice = (pair) => dispatch => {
    return fetch(`/binance/api/v3/ticker/price?symbol=${pair}`).then((res) => {
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
    dispatch(setTradesLoading(true, SET_BINANCE_TRADES_LOADING));
    fetch(`/binance/api/v3/trades?symbol=${pair}&limit=50`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.code) {
            dispatch(setTradesError(data.code, -1121, SET_BINANCE_TRADES));
        } else {
            const trades = data.reverse().map((trade) => ({
                price: formatPrice(trade.price),
                type: trade.isBuyerMaker ? 'sell' : 'buy',
                size: trade.qty,
                time: moment(trade.time).format('LTS')
            }))
            dispatch(setTrades(trades, SET_BINANCE_TRADES));
        }
    }).catch((e) => {
        dispatch(setTradesError(null, -1121, SET_BINANCE_TRADES));
    })
}