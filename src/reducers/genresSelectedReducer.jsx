// @flow
import { handleActions } from 'redux-actions';

import {
  saveGenresAdminSelectedData,
} from '../actions/adminActions';

export default handleActions({
  [saveGenresAdminSelectedData]: (state, action) => ({
    ...action.payload,
  }),
}, {});
