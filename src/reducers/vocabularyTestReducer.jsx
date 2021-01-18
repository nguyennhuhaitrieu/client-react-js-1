// @flow
import { handleActions } from 'redux-actions';

import {
  saveVocabularyTestData,
} from '../actions/vimActions';

const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

export default handleActions({
  [saveVocabularyTestData]: (state, action) => {
    const { data, meta } = action.payload;
    const resultArr = [];
    const ansArr = data.map(vocabulary => {
      const result = vocabulary.words.concat(vocabulary.word_en);
      resultArr.push(vocabulary.word_en);
      const changeResult = shuffleArray(result);
      return {
        ...vocabulary,
        words: changeResult,
      };
    });

    return {
      vocabularies: [
        ...ansArr],
      meta,
      result: resultArr,
    };
  },
}, {});
