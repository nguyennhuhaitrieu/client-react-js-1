// @flow
import { handleActions } from 'redux-actions';

import {
  saveTranslateTextData,
} from '../actions/vimActions';

export default handleActions({
  [saveTranslateTextData]: (state, action) => {
    const { data } = action.payload;

    return {
      ...data,
    };
  },
}, {});
