// @flow
import { handleActions } from 'redux-actions';

import {
  saveMoviesAdminSelectedData,
} from '../actions/adminActions';

export default handleActions({
  [saveMoviesAdminSelectedData]: (state, action) => ({
    ...action.payload,
  }),
}, {});
