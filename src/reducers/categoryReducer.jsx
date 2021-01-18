// @flow
import { handleActions } from 'redux-actions';

import {
  saveCategoryData,
} from '../actions/vimActions';

export default handleActions({
  [saveCategoryData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      categories: [
        ...data,
      ],
      meta,
    };
  },
}, {});
