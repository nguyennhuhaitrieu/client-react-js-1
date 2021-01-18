// @flow
import { handleActions } from 'redux-actions';

import {
  saveCategoryAdminSelectedData,
} from '../actions/adminActions';

export default handleActions({
  [saveCategoryAdminSelectedData]: (state, action) => ({
    ...action.payload,
  }),
}, {});
