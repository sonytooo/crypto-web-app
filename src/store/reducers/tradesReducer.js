import {SET_HUOBI_TRADES, SET_BINANCE_TRADES, SET_BITFINEX_TRADES, SET_KRAKEN_TRADES} from '../types';

const INITIAL_STATE = {
    huobi: { trades: [], error: null, loading: false },
    binance: { trades: [], error: null, loading: false },
    kraken: {trades: [], error: null, loading: false },
    bitfinex: { trades: [], error: null, loading: false },
};

const tradesReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case SET_HUOBI_TRADES:
      return {...state, huobi: action.payload};
    case SET_BINANCE_TRADES:
      return {...state, binance: action.payload};
    case SET_BITFINEX_TRADES:
      return {...state, bitfinex: action.payload};
    case SET_KRAKEN_TRADES:
      return {...state, kraken: action.payload};
    default:
      return state;
  }
};

export default tradesReducer;
