// @flow
import { handleActions } from 'redux-actions';

import {
  loginUserData,
  logoutUserData,
} from '../actions/vimActions';

export default handleActions({
  [loginUserData]: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      ...user,
    };
  },

  [logoutUserData]: () => {
    const user = {};
    return {
      user,
    };
  },
}, {});
