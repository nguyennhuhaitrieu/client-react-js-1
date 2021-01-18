// @flow
import { handleActions } from 'redux-actions';

import {
  saveIsRemindData,
} from '../actions/vimActions';

export default handleActions({
  [saveIsRemindData]: (state, action) => ({
    isRemind: action.payload,
  })
  ,
}, {});
