// @flow
import { handleActions } from 'redux-actions';

import {
  saveCategoryFilmData,
} from '../actions/vimActions';

export default handleActions({
  [saveCategoryFilmData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      filmByCategory: [
        ...data,
      ],
      meta,
    };
  },
}, {});
