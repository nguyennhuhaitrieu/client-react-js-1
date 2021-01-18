import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getSubtitlesAdminData, saveSubtitlesAdminData,
  newSubtitlesAdminData,
  updateSubtitlesAdminData,
  subtitlesAdminSelectedData,
  saveSubtitlesAdminSelectedData,
  deleteSubtitlesAdminData,
  saveDeleteSubtitlesAdminData,
} from '../actions/adminActions';

import history from '../utils/history';
import SubtitlesAdminApi from '../services/subtitlesAdminApi';

function* getSubtitlesAdminSaga(action) {
  try {
    const { data } = yield call([SubtitlesAdminApi, SubtitlesAdminApi.getSubtitles], action.payload);
    yield put(saveSubtitlesAdminData(data));
  } catch (e) {
    // do nothing
  }
}

function* newSubtitlesAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([SubtitlesAdminApi, SubtitlesAdminApi.createSubtitles], values);
    toast.success(`${data.title} is created Success`, { containerId: 'toastContainerId' });
    yield history.push('/admin/subtitles');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* updateSubtitlesAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([SubtitlesAdminApi, SubtitlesAdminApi.updateSubtitles], values);
    toast.success(`Subtitles: ${data.title} is Updated Success`, { containerId: 'toastContainerId' });
    yield history.push('/admin/subtitles');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* subtitlesAdminSelectedSaga(action) {
  try {
    const subtitlesId = action.payload;
    const { data } = yield call([SubtitlesAdminApi, SubtitlesAdminApi.getSelectedSubtitles], subtitlesId);
    yield put(saveSubtitlesAdminSelectedData(data));
  } catch (e) {
    // do nothing
  }
}

function* deleteSubtitlesAdminSaga(action) {
  try {
    const { subtitlesId } = action.payload;
    const { data } = yield call([SubtitlesAdminApi, SubtitlesAdminApi.deleteSubtitles], subtitlesId);
    yield put(saveDeleteSubtitlesAdminData(data));
  } catch (e) {
  // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getSubtitlesAdminData, getSubtitlesAdminSaga),
    takeLatest(newSubtitlesAdminData, newSubtitlesAdminSaga),
    takeLatest(subtitlesAdminSelectedData, subtitlesAdminSelectedSaga),
    takeLatest(updateSubtitlesAdminData, updateSubtitlesAdminSaga),
    takeLatest(deleteSubtitlesAdminData, deleteSubtitlesAdminSaga),
  ]);
}
