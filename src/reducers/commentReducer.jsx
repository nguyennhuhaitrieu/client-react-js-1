// @flow
import { handleActions } from 'redux-actions';

import {
  saveCommentData,
  saveNewCommentData,
  saveEditCommentData,
  saveDeleteCommentData,
} from '../actions/vimActions';

export default handleActions({
  [saveCommentData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      comments: [
        ...data,
      ],
      meta,
    };
  },
  [saveNewCommentData]: (state, action) => {
    const data = action.payload;
    return {
      ...state,
      comments: [
        ...state.comments,
        data,
      ],
    };
  },

  [saveEditCommentData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.comments.findIndex(comment => comment.id === id);

    return {
      ...state,
      comments: [
        ...state.comments.slice(0, index),
        data,
        ...state.comments.slice(index + 1, state.comments.length),
      ],
    };
  },

  [saveDeleteCommentData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.comments.findIndex(comment => comment.id === id);

    return {
      ...state,
      comments: [
        ...state.comments.slice(0, index),
        ...state.comments.slice(index + 1, state.comments.length),
      ],
    };
  },
}, {});
