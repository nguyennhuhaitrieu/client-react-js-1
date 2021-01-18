import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';

import {
  getFilmData,
  saveFilmData,
  getHotFilmData,
  saveHotFilmData,
  getFilmByLevelData,
  saveFilmByLevelData,
  getSelectedFilmData,
  saveSelectedFilmData,
  getCurrentRateData,
  saveCurrentRateData,
  ratingMovieData,
  getCategoryFilmData,
  saveCategoryFilmData,
} from '../actions/vimActions';
import FilmApi from '../services/filmApi';

function* getFilmSaga(action) {
  try {
    const currentPage = action.payload;
    const { data } = yield call([FilmApi, FilmApi.getFilm], { currentPage });
    yield put(saveFilmData(data));
  } catch (e) {
    // do nothing
  }
}

function* getHotFilmSaga() {
  try {
    const { data } = yield call([FilmApi, FilmApi.getHotFilm], {});
    yield put(saveHotFilmData(data));
  } catch (e) {
    // do nothing
  }
}

function* getHFilmByLevelSaga(action) {
  try {
    const { currentPage } = action.payload;
    const { level } = action.payload;
    const { data } = yield call([FilmApi, FilmApi.getFilmByLevel], { currentPage, level });
    yield put(saveFilmByLevelData(data));
  } catch (e) {
    // do nothing
  }
}
function* getSelectedFilmSaga(action) {
  try {
    const id = action.payload;
    const { data } = yield call([FilmApi, FilmApi.getSelectedFilm], { id });
    yield put(saveSelectedFilmData(data));
  } catch (e) {
    // do nothing
  }
}

function* getCurrentRateSaga(action) {
  try {
    const { data } = yield call([FilmApi, FilmApi.getCurrentRate], action.payload);
    yield put(saveCurrentRateData(data));
  } catch (e) {
    // do nothing
  }
}

function* ratingMovieSata(action) {
  try {
    const { data } = yield call([FilmApi, FilmApi.ratingMovie], action.payload);
    yield put(saveCurrentRateData(data));
  } catch (e) {
    // do nothing
  }
}

function* getCategoryFilmSaga(action) {
  try {
    const { data } = yield call([FilmApi, FilmApi.getFilmByCategory], action.payload);
    yield put(saveCategoryFilmData(data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getFilmData, getFilmSaga),
    takeLatest(getHotFilmData, getHotFilmSaga),
    takeLatest(getFilmByLevelData, getHFilmByLevelSaga),
    takeLatest(getSelectedFilmData, getSelectedFilmSaga),
    takeLatest(getCurrentRateData, getCurrentRateSaga),
    takeLatest(ratingMovieData, ratingMovieSata),
    takeLatest(getCategoryFilmData, getCategoryFilmSaga),
  ]);
}
