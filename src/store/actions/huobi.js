// import {proxy} from '../../config';
import moment from 'moment';
import formatPrice from '../../utils/formatPrice';
import {SET_HUOBI_PRICE, SET_HUOBI_TRADES, SET_HUOBI_TRADES_LOADING} from '../types';
import {setPrice, setPriceError, setTrades, setTradesError, setTradesLoading} from './common';

export const getHuobiPairPrice = (pair) => dispatch => {
    return fetch(`/huobi/market/trade?symbol=${pair.toLowerCase()}`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.status === 'error') {
            dispatch(setPriceError(data['err-code'], 'invalid-parameter', SET_HUOBI_PRICE));
        }
        if (data.status === 'ok') {
            dispatch(setPrice(data.tick.data[0].price, SET_HUOBI_PRICE));
        }
        return Promise.resolve();
    }).catch((e) => {
        dispatch(setPriceError(null, 'invalid-parameter', SET_HUOBI_PRICE));
        return Promise.resolve();
    })
}

export const getHuobiPairTrades = (pair) => dispatch => {
    dispatch(setTradesLoading(true, SET_HUOBI_TRADES_LOADING));
    fetch(`/huobi/market/history/trade?symbol=${pair.toLowerCase()}&size=50`).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.status === 'error') {
            dispatch(setTradesError(data['err-code'], 'invalid-parameter', SET_HUOBI_TRADES));
        }
        if (data.status === 'ok') {
            const trades = [];
            data.data.map((tradeGroup) => {
                tradeGroup.data.map((trade) => {
                    trades.push({
                        price: formatPrice(trade.price),
                        size: trade.amount,
                        type: trade.direction,
                        time: moment(trade.ts).format('LTS')
                    })
                })
            })
            dispatch(setTrades(trades.slice(0, 50), SET_HUOBI_TRADES));
        }
    }).catch((e) => {
        dispatch(setTradesError(null, 'invalid-parameter', SET_HUOBI_TRADES));
    })
}