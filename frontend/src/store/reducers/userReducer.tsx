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
    firstName?: string;
    lastName?: string;
  };
}

interface UserAction {
  type: string;
  payload?: string;
}

export const userLoginReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
