// @flow
import { handleActions } from 'redux-actions';

import {
  saveLevelData,
} from '../actions/vimActions';

export default handleActions({
  [saveLevelData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      levels: [
        ...data,
      ],
      meta,
    };
  },
}, {});
