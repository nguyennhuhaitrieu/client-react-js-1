import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getMoviesAdminData, saveMoviesAdminData,
  newMoviesAdminData,
  updateMoviesAdminData,
  moviesAdminSelectedData,
  saveMoviesAdminSelectedData,
  deleteMoviesAdminData,
  saveDeleteMoviesAdminData,
  getAllMoviesAdminData,
} from '../actions/adminActions';

import history from '../utils/history';
import MoviesAdminApi from '../services/moviesAdminApi';

function* getMoviesAdminSaga(action) {
  try {
    const { data } = yield call([MoviesAdminApi, MoviesAdminApi.getMovies], action.payload);
    yield put(saveMoviesAdminData(data));
  } catch (e) {
    // do nothing
  }
}

function* newMoviesAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([MoviesAdminApi, MoviesAdminApi.createMovies], values);
    toast.success(`${data.title_en} is created Success`, { containerId: 'toastContainerId' });
    yield history.push('/admin/movies');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* updateMoviesAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([MoviesAdminApi, MoviesAdminApi.updateMovies], values);
    toast.success(`Movies: ${data.title_en} is Updated Success`, { containerId: 'toastContainerId' });
    yield history.push('/admin/movies');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* moviesAdminSelectedSaga(action) {
  try {
    const moviesId = action.payload;
    const { data } = yield call([MoviesAdminApi, MoviesAdminApi.getSelectedMovies], moviesId);
    yield put(saveMoviesAdminSelectedData(data));
  } catch (e) {
    // do nothing
  }
}

function* deleteMoviesAdminSaga(action) {
  try {
    const { moviesId } = action.payload;
    const { data } = yield call([MoviesAdminApi, MoviesAdminApi.deleteMovies], moviesId);
    yield put(saveDeleteMoviesAdminData(data));
  } catch (e) {
  // do nothing
  }
}

function* getAllMoviesAdminSaga(action) {
  try {
    const { data } = yield call([MoviesAdminApi, MoviesAdminApi.getAllMovies], action.payload);
    yield put(saveMoviesAdminData(data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getMoviesAdminData, getMoviesAdminSaga),
    takeLatest(newMoviesAdminData, newMoviesAdminSaga),
    takeLatest(moviesAdminSelectedData, moviesAdminSelectedSaga),
    takeLatest(updateMoviesAdminData, updateMoviesAdminSaga),
    takeLatest(deleteMoviesAdminData, deleteMoviesAdminSaga),
    takeLatest(getAllMoviesAdminData, getAllMoviesAdminSaga),
  ]);
}
