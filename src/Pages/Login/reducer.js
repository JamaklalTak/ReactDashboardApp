import { GET_USER_LOGGED_IN_CONST } from './action';

export default function reducer(state = {}, action) {
    switch (action.type) {
      case GET_USER_LOGGED_IN_CONST:
        return Object.assign({}, state, {
            data: action.payload
        })
      default:
        return state;
    }
  }