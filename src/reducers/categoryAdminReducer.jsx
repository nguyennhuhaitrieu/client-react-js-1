// @flow
import { handleActions } from 'redux-actions';

import {
  saveCategoryAdminData,
  saveDeleteCategoryAdminData,
} from '../actions/adminActions';

export default handleActions({
  [saveCategoryAdminData]: (state, action) => {
    let { data, metadata } = action.payload;
    if (!data) { data = action.payload; }
    return {
      categories: [
        ...data,
      ],
      meta: metadata,
    };
  },

  [saveDeleteCategoryAdminData]: (state, action) => {
    const data = action.payload;
    const { id } = data;
    const index = state.categories.findIndex(category => category.id === id);
    return {
      ...state,
      categories: [
        ...state.categories.slice(0, index),
        ...state.categories.slice(index + 1, state.categories.length),
      ],
    };
  },
}, {});
