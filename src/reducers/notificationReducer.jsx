// @flow
import { handleActions } from 'redux-actions';

import {
  saveNotificationData,
  saveReadNotificationData,
} from '../actions/vimActions';

export default handleActions({
  [saveNotificationData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      notifications: [
        ...data,
      ],
      meta,
    };
  },

  [saveReadNotificationData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.notifications.findIndex(comment => comment.id === id);

    return {
      ...state,
      notifications: [
        ...state.notifications.slice(0, index),
        data,
        ...state.notifications.slice(index + 1, state.notifications.length),
      ],
    };
  },
}, {});
