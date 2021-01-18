// @flow
import { handleActions } from 'redux-actions';

import {
  saveTextSpeechData,
} from '../actions/vimActions';

export default handleActions({
  [saveTextSpeechData]: (state, action) => {
    const { audioContent } = action.payload;

    return {
      audioContent,
    };
  },
}, {});
