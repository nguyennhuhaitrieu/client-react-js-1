// @flow
import { handleActions } from 'redux-actions';

import {
  saveSubtitlesAdminSelectedData,
} from '../actions/adminActions';

export default handleActions({
  [saveSubtitlesAdminSelectedData]: (state, action) => ({
    ...action.payload,
  }),
}, {});
