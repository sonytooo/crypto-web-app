import {combineReducers} from 'redux';
import prices from './pricesReducer';
import trades from './tradesReducer';

export default combineReducers({
    prices,
    trades
});