export const COINS_FETCH_REQUEST = 'COINS_FETCH_REQUEST';
export const COINS_FETCH_SUCCESS = 'COINS_FETCH_SUCCESS';
export const COINS_FETCH_ERROR = 'COINS_FETCH_ERROR';

export function fetchCoins() {
    return {
        type: COINS_FETCH_REQUEST
    };
}
  
export function fetchCoinsSuccess(data) {
    return {
        type: COINS_FETCH_SUCCESS,
         data
    };
}
  
export function fetchCoinsError(error) {
    return {
        type: COINS_FETCH_ERROR,
        error
    };
}

export function getCoinsData() {
    return dispatch => {
        dispatch(fetchCoins());
        return fetch('https://crypto.haydenbruin.com/api/load-crypto-currency.php', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => dispatch(fetchCoinsSuccess(response)))
        .catch(err => dispatch(fetchCoinsError(err)));
    };
}