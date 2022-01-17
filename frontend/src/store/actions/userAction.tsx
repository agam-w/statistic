import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_SUCCESS
      });

      const response = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          email,
          password
        })
      });

      if (response.status !== 200) {
        alert('wrong username or password!');
        return;
      }

      const data = await response.json();
      const userData = {
        username: data.userInfo.username,
        email: data.userInfo.email,
        token: data
      };

      // pass this data to the reducers in the payload of the action
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

export const logout =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    localStorage.removeItem('userInfo');
    dispatch({
      type: USER_LOGOUT
    });
  };
