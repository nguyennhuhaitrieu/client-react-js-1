// @flow
import { handleActions } from 'redux-actions';

import {
  saveFilmData,
} from '../actions/vimActions';

export default handleActions({
  [saveFilmData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      newFilms: [
        ...data,
      ],
      meta,
    };
  },
}, {});
