// @flow
import { handleActions } from 'redux-actions';
import {
  showUserData,
} from '../actions/vimActions';

export default handleActions({
  [showUserData]: (state, action) => ({
    user: action.payload,
  }),
}, {});
