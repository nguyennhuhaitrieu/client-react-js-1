import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getGenresAdminData,
  saveGenresAdminData,
  newGenresAdminData,
  updateGenresAdminData,
  genresAdminSelectedData,
  saveGenresAdminSelectedData,
  deleteGenresAdminData,
  saveDeleteGenresAdminData,
  getAllGenresAdminData,
} from '../actions/adminActions';

import history from '../utils/history';
import GenresAdminApi from '../services/genresAdminApi';

function* getGenresAdminSaga(action) {
  try {
    const { data } = yield call([GenresAdminApi, GenresAdminApi.getGenres], action.payload);
    yield put(saveGenresAdminData(data));
  } catch (e) {
    // do nothing
  }
}

function* newGenresAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([GenresAdminApi, GenresAdminApi.createGenres], values);
    toast.success(data.success, { containerId: 'toastContainerId' });
    yield history.push('/admin/genres');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* updateGenresAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([GenresAdminApi, GenresAdminApi.updateGenres], values);
    toast.success(`Genres: ${data.name} is Updated Success`, { containerId: 'toastContainerId' });
    yield history.push('/admin/genres');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* GenresAdminSelectedSaga(action) {
  try {
    const GenresId = action.payload;
    const { data } = yield call([GenresAdminApi, GenresAdminApi.getSelectedGenres], GenresId);
    yield put(saveGenresAdminSelectedData(data));
  } catch (e) {
    // do nothing
  }
}

function* deleteGenresAdminSaga(action) {
  try {
    const { genresId } = action.payload;
    const { data } = yield call([GenresAdminApi, GenresAdminApi.deleteGenres], genresId);
    yield put(saveDeleteGenresAdminData(data));
    toast.success('Delete Genres Success', { containerId: 'toastContainerId' });
  } catch (e) {
  // do nothing
  }
}

function* getAllGenresAdminSaga(action) {
  try {
    const { data } = yield call([GenresAdminApi, GenresAdminApi.getAllGenres], action.payload);
    yield put(saveGenresAdminData(data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getGenresAdminData, getGenresAdminSaga),
    takeLatest(newGenresAdminData, newGenresAdminSaga),
    takeLatest(genresAdminSelectedData, GenresAdminSelectedSaga),
    takeLatest(updateGenresAdminData, updateGenresAdminSaga),
    takeLatest(deleteGenresAdminData, deleteGenresAdminSaga),
    takeLatest(getAllGenresAdminData, getAllGenresAdminSaga),
  ]);
}
