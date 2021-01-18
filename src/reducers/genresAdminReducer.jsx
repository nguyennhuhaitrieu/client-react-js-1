// @flow
import { handleActions } from 'redux-actions';

import {
  saveGenresAdminData,
  saveDeleteGenresAdminData,
} from '../actions/adminActions';

export default handleActions({
  [saveGenresAdminData]: (state, action) => {
    let { data, metadata } = action.payload;
    if (!data) { data = action.payload; }
    return {
      genres: [
        ...data,
      ],
      meta: metadata,
    };
  },

  [saveDeleteGenresAdminData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.genres.findIndex(genres => genres.id === id);
    return {
      ...state,
      genres: [
        ...state.genres.slice(0, index),
        ...state.genres.slice(index + 1, state.genres.length),
      ],
    };
  },
}, {});
