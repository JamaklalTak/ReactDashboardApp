import axios from 'axios';

export const GET_USER_LOGGED_IN_CONST = 'GET_USER_LOGGED_IN';

export function getUserLoggedIn(data) {
    return {
        type: GET_USER_LOGGED_IN_CONST,
        payload: data
    };
}

export function fetchUserDetail(username, password) {
    return (dispatch) => {
        return axios.get(`http://localhost:3000/data?username=${username}&password=${password}`)
            .then((json) => {
                dispatch(getUserLoggedIn(json.data));
            });
    };
}