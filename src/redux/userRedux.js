import axios from 'axios';

// --- S E L E C T O R S --- //
export const getLoginStatus = ({ user }) => user.login;
export const getUserData = ({ user }) => user.data;

// --- A C T I O N   N A M E   C R E A T O R --- //
const caName = (name) => `app/login/${name}`;

// --- A C T I O N   T Y P E S --- //
const LOGIN = caName('LOGIN');
const LOGOUT = caName('LOGOUT');
const USER = caName('USER');

// --- A C T I O N   C R E A T O R S --- //
export const caLogin = (payload) => ({ payload, type: LOGIN });
export const caLogout = (payload) => ({ payload, type: LOGOUT });
export const caUser = (payload) => ({ payload, type: USER });

// --- T H U N K   C R E A T O R S --- //
export const caLoginDB = (user) => {
  return (dispatch, getState) => {
    axios
      .post(`http://dictionairy.webster2020.usermd.net/users/login`, user)
      // .post(`http://localhost:8000/users/login`, user)
      .then((res) => {
        console.log('redux login OK');
        console.log(res.data);
        dispatch(caLogin(true));
        dispatch(caUser(res.data));
      })
      .catch((err) => {
        console.log('redux login ERROR');
        console.log(err);
        dispatch(caLogin(false));
      });
  };
};

// --- R E D U C E R --- //
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...statePart,
        login: action.payload,
      };
    }
    case USER: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...statePart,
        login: action.payload,
      };
    }
    default:
      return statePart;
  }
};
