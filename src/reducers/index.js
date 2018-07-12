import { combineReducers } from 'redux';

import coins from './coins';

const rootReducer = combineReducers({
    coins: coins,
});

export default rootReducer;