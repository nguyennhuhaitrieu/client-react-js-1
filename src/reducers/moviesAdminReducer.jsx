// @flow
import { handleActions } from 'redux-actions';

import {
  saveMoviesAdminData,
  saveDeleteMoviesAdminData,
} from '../actions/adminActions';

export default handleActions({
  [saveMoviesAdminData]: (state, action) => {
    let { data, metadata } = action.payload;
    if (!data) { data = action.payload; }
    return {
      movies: [
        ...data,
      ],
      meta: metadata,
    };
  },

  [saveDeleteMoviesAdminData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.movies.findIndex(movie => movie.id === id);
    return {
      ...state,
      movies: [
        ...state.movies.slice(0, index),
        ...state.movies.slice(index + 1, state.movies.length),
      ],
    };
  },
}, {});
