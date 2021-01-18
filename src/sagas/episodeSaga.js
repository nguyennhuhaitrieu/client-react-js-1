import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { getFilmEpisodeData, saveFilmEpisodeData } from '../actions/vimActions';
import EpisodeApi from '../services/episodeApi';

function* getFilmEpisodeSaga(action) {
  const { film_id } = action.payload;
  const currentPage = null ? 1 : action.payload.currentPage;
  try {
    const { data } = yield call([EpisodeApi, EpisodeApi.getEpisode], { film_id, currentPage });
    yield put(saveFilmEpisodeData(data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getFilmEpisodeData, getFilmEpisodeSaga),
  ]);
}
