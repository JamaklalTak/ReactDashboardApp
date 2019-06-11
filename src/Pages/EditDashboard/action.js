import axios from 'axios';

export const UPDATE_USER_DETAIL_CONST = 'UPDATE_USER_DETAIL';

export function getUpdatedData(data) {
    return {
        type: UPDATE_USER_DETAIL_CONST,
        payload: data
    };
}

export function updateUserDetail(userId, options) {
    return (dispatch) => {
        return axios.put(`http://localhost:3000/data?id=${userId}`, options)
            .then((json) => {
                dispatch(getUpdatedData(json.data));
            });
    };
}