// @flow
import { handleActions } from 'redux-actions';

import {
  saveFilmByLevelData,
} from '../actions/vimActions';

export default handleActions({
  [saveFilmByLevelData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      filmByLevels: [
        ...data,
      ],
      meta,
    };
  },
}, {});
