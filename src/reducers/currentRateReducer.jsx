// @flow
import { handleActions } from 'redux-actions';

import {
  saveCurrentRateData,
} from '../actions/vimActions';

export default handleActions({
  [saveCurrentRateData]: (state, action) => ({
    ...action.payload,
  }),

}, {});
