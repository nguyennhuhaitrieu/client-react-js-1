// @flow
import { handleActions } from 'redux-actions';
import {
  saveListUserData,
} from '../actions/vimActions';

import {
  saveDeleteUserAdminData,
} from '../actions/adminActions';


export default handleActions({

  [saveListUserData]: (state, action) => {
    const { data, metadata } = action.payload;
    return {
      users: [
        ...data,
      ],
      metadata,
    };
  },

  [saveDeleteUserAdminData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.users.findIndex(user => user.id === id);
    return {
      ...state,
      users: [
        ...state.users.slice(0, index),
        ...state.users.slice(index + 1, state.users.length),
      ],
    };
  },

}, {});
