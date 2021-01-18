// @flow
import { handleActions } from 'redux-actions';

import {
  saveSelectedFilmData,
} from '../actions/vimActions';

export default handleActions({
  [saveSelectedFilmData]: (state, action) => ({
    ...action.payload,
  }),
}, {});
