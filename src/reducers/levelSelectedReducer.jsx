// @flow
import { handleActions } from 'redux-actions';

import {
  saveLevelAdminSelectedData,
} from '../actions/adminActions';

export default handleActions({
  [saveLevelAdminSelectedData]: (state, action) => ({
    ...action.payload,
  }),
}, {});
