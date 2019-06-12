import { UPDATE_USER_DETAIL_CONST } from './action';

export default function reducer(state = {}, action) {
    switch (action.type) {
      case UPDATE_USER_DETAIL_CONST:
        return Object.assign({}, state, {
            data: action.payload
        })
      default:
        return state;
    }
  }