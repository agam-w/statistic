import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from '../constants';

export interface UserState {
  loading?: boolean;
  error?: string;
  userInfo: {
    username?: string;
    email?: string;
    token?: string;
  };
}

interface UserAction {
  type: string;
  payload?: string;
}

export const userLoginReducer = (
  state: UserState = { userInfo: {} },
  action: UserAction
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {
        userInfo: {
          username: '',
          email: '',
          token: ''
        }
      };
    default:
      return state;
  }
};
