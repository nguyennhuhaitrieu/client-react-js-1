// @flow
import { handleActions } from 'redux-actions';

import {
  saveRemindVocabularyData,
  saveNextRemindVocabularyData,
} from '../actions/vimActions';

export default handleActions({
  [saveRemindVocabularyData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      vocabularies: data,
      meta,
    };
  },
  [saveNextRemindVocabularyData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      vocabularies: [
        ...state.vocabularies,
        ...data,
      ],
      meta,
    };
  },

}, {});
