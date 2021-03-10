// import {proxy} from '../../config';
import moment from 'moment';
import {setPrice, setPriceError, setTrades, setTradesLoading} from './common';
import {SET_BITFINEX_PRICE, SET_BITFINEX_TRADES, SET_BITFINEX_TRADES_LOADING} from '../types';
import formatPrice from '../../utils/formatPrice';

export const getBitfinexPairPrice = (pair) => dispatch => {
    return fetch(`/bitfinex/v1/pubticker/${pair}`).then((res) => {
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
    dispatch(setTradesLoading(true, SET_BITFINEX_TRADES_LOADING));
    fetch(`/bitfinex/v1/trades/${pair}?limit_trades=50`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.message) {
            dispatch(setPriceError(data.message, 'Unknown symbol', SET_BITFINEX_TRADES));
        } else {
            const trades = data.map((trade) => ({
                price: formatPrice(trade.price),
                size: trade.amount,
                time: moment.unix(trade.timestamp).format('LTS'),
                type: trade.type
            }))
            dispatch(setTrades(trades, SET_BITFINEX_TRADES));
        }
    }).catch((e) => {
        dispatch(setPriceError(null, 'Unknown symbol', SET_BITFINEX_TRADES));
    })
}