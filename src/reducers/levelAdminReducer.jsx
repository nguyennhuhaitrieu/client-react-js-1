// @flow
import { handleActions } from 'redux-actions';

import {
  saveLevelAdminData,
  saveDeleteLevelAdminData,
} from '../actions/adminActions';

export default handleActions({
  [saveLevelAdminData]: (state, action) => {
    let { data, metadata } = action.payload;
    if (!data) { data = action.payload; }
    return {
      levels: [
        ...data,
      ],
      meta: metadata,
    };
  },

  [saveDeleteLevelAdminData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.levels.findIndex(level => level.id === id);
    return {
      ...state,
      levels: [
        ...state.levels.slice(0, index),
        ...state.levels.slice(index + 1, state.levels.length),
      ],
    };
  },
}, {});
