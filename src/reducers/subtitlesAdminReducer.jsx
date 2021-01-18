// @flow
import { handleActions } from 'redux-actions';

import {
  saveSubtitlesAdminData,
  saveDeleteSubtitlesAdminData,
} from '../actions/adminActions';

export default handleActions({
  [saveSubtitlesAdminData]: (state, action) => {
    const { data, metadata } = action.payload;
    return {
      subtitles: [
        ...data,
      ],
      meta: metadata,
    };
  },

  [saveDeleteSubtitlesAdminData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.subtitles.findIndex(movie => movie.id === id);
    return {
      ...state,
      subtitles: [
        ...state.subtitles.slice(0, index),
        ...state.subtitles.slice(index + 1, state.subtitles.length),
      ],
    };
  },
}, {});
