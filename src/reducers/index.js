import { combineReducers } from 'redux';

import userConnectionsData from './../Pages/Dashboard/reducer';
import userDetail from './../Pages/Login/reducer';

const rootReducer = combineReducers({
    userConnectionsData,
    userDetail
});

export default rootReducer;