import {getBinancePairPrice} from './binance';
import {getBitfinexPairPrice} from './bitfinex';
import {getHuobiPairPrice} from './huobi';
import {getKrakenPairPrice} from './kraken';
import {SET_PAIR, SET_PAIR_PRICE_LOADING} from '../types';
import formatPrice from '../../utils/formatPrice';

export const getPairPrices = (pair) => async dispatch => {
    dispatch(setPairPricesLoading(true));
    await Promise.all([
        dispatch(getBinancePairPrice(pair)),
        dispatch(getHuobiPairPrice(pair)),
        dispatch(getBitfinexPairPrice(pair)),
        dispatch(getKrakenPairPrice(pair))
    ]);
    dispatch(setPairPricesLoading(false));
}

export const setPrice = (price, type) => dispatch => {
    dispatch({
        type,
        payload: {
            price: formatPrice(price),
            error: null
        }
    });
}


export const setTrades = (trades, type) => dispatch => {
    dispatch({
        type,
        payload: {
            trades,
            error: null,
            loading: false
        }
    });
}

export const setPriceError = (code, invalidPairCode, type) => dispatch => {
    dispatch({
        type,
        payload: {
            price: null,
            loading: false,
            error: code === invalidPairCode ? 'Unsupported crypto pair' : 'An unexpected error has occurred'
        }
    });
}

export const setTradesError = (code, invalidPairCode, type) => dispatch => {
    dispatch({
        type,
        payload: {
            trades: [],
            loading: false,
            error: code === invalidPairCode ? 'Unsupported crypto pair' : 'An unexpected error has occurred'
        }
    });
}

export const setPair = (symbol) => dispatch => {
    dispatch({
        type: SET_PAIR,
        payload: {
            symbol,
        }
    });
}

export const setPairPricesLoading = (isLoading) => dispatch => {
    dispatch({
        type: SET_PAIR_PRICE_LOADING,
        payload: isLoading
    });
}

export const setTradesLoading = (isLoading, type) => dispatch => {
    dispatch({
        type,
        payload: isLoading
    });
}



