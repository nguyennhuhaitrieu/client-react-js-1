// @flow
import { handleActions } from 'redux-actions';

import {
  saveHotFilmData,
} from '../actions/vimActions';

export default handleActions({
  [saveHotFilmData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      hotFilms: [
        ...data,
      ],
      meta,
    };
  },
}, {});
