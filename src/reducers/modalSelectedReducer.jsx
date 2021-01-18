// @flow
import { handleActions } from 'redux-actions';

import {
  saveModalSelectedData,
} from '../actions/vimActions';

export default handleActions({
  [saveModalSelectedData]: (state, action) => ({
    modalSelected: action.payload,
  })
  ,
}, {});
