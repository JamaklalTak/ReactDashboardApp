const data = require('./../../Assets/MockData/userData.json');
export const GET_USER_CONNECTIONS_DATA_CONST = 'GET_USER_CONNECTIONS_DATA';


export function getUserAllConnectionData (payload=data) {
    return {
        type: GET_USER_CONNECTIONS_DATA_CONST,
        // promise: client => client.get('http://localhost:3000/data'),
        payload: payload
    };
  }
