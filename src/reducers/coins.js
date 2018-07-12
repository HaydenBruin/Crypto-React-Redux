import { COINS_FETCH_REQUEST } from '../actions/coins';
import { COINS_FETCH_SUCCESS } from '../actions/coins';
import { COINS_FETCH_ERROR } from '../actions/coins';

const initialState = {
    list: [],
    isFetching: false,
    hasFetched: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
      case COINS_FETCH_REQUEST:
        return { ...state, isFetching: true };
      case COINS_FETCH_SUCCESS:
        return { ...state, isFetching: false, hasFetched: true, list: action };
      case COINS_FETCH_ERROR:
        return { ...state, isFetching: false, error: action };
      default:
        return state;
    }
};