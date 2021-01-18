// @flow
import { handleActions } from 'redux-actions';

import {
  saveFilmEpisodeData,
} from '../actions/vimActions';

export default handleActions({
  [saveFilmEpisodeData]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      episode: [
        ...data,
      ],
      meta,
    };
  },
}, {});
