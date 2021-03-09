import { BINIANCE, BITFINEX, HUOBI, KRAKEN } from '../../constants/common';
import {SET_HUOBI_PRICE, SET_BINANCE_PRICE, SET_BITFINEX_PRICE, SET_KRAKEN_PRICE, SET_PAIR, SET_PAIR_PRICE_LOADING} from '../types';

const INITIAL_STATE = {
    loading: false,
    symbol: null,
    prices: [
      { price: null, error: null, exchange: HUOBI },
      { price: null, error: null, exchange: BINIANCE },
      { price: null, error: null, exchange: BITFINEX },
      { price: null, error: null, exchange: KRAKEN },
    ]
};

const setExchangePrice = (prices, payload) => {
  const i = prices.findIndex((e) => e.exchange === payload.exchange);
  prices[i] = payload;
  return prices;
}

const pricesReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case SET_HUOBI_PRICE:
      return {...state, prices: setExchangePrice(state.prices, {...action.payload, exchange: HUOBI})};
    case SET_BINANCE_PRICE:
      return {...state, prices: setExchangePrice(state.prices, {...action.payload, exchange: BINIANCE})};
    case SET_BITFINEX_PRICE:
      return {...state, prices: setExchangePrice(state.prices, {...action.payload, exchange: BITFINEX})};
    case SET_KRAKEN_PRICE:
      return {...state, prices: setExchangePrice(state.prices, {...action.payload, exchange: KRAKEN})};
    case SET_PAIR: 
      return {...state, symbol: action.payload.symbol}
    case SET_PAIR_PRICE_LOADING:
      return {...state, loading: action.payload}
    default:
      return state;
  }
};

export default pricesReducer;
