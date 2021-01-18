import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getLevelAdminData, saveLevelAdminData,
  newLevelAdminData,
  updateLevelAdminData,
  levelAdminSelectedData,
  saveLevelAdminSelectedData,
  deleteLevelAdminData,
  saveDeleteLevelAdminData,
  getAllLevelAdminData,
} from '../actions/adminActions';

import history from '../utils/history';
import LevelAdminApi from '../services/levelAdminApi';

function* getLevelAdminSaga(action) {
  try {
    const { data } = yield call([LevelAdminApi, LevelAdminApi.getLevel], action.payload);

    yield put(saveLevelAdminData(data));
  } catch (e) {
    // do nothing
  }
}

function* newLevelAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([LevelAdminApi, LevelAdminApi.createLevel], values);
    toast.success(data.success, { containerId: 'toastContainerId' });
    yield history.push('/admin/levels');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* updateLevelAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([LevelAdminApi, LevelAdminApi.updateLevel], values);
    toast.success(`Level: ${data.name} is Updated Success`, { containerId: 'toastContainerId' });
    yield history.push('/admin/levels');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* levelAdminSelectedSaga(action) {
  try {
    const levelId = action.payload;
    const { data } = yield call([LevelAdminApi, LevelAdminApi.getSelectedLevel], levelId);
    yield put(saveLevelAdminSelectedData(data));
  } catch (e) {
    // do nothing
  }
}

function* deleteLevelAdminSaga(action) {
  try {
    const { levelId } = action.payload;
    const { data } = yield call([LevelAdminApi, LevelAdminApi.deleteLevel], levelId);
    yield put(saveDeleteLevelAdminData(data));
    toast.success('Delete Level Success', { containerId: 'toastContainerId' });
  } catch (e) {
  // do nothing
  }
}

function* getAllLevelAdminSaga(action) {
  try {
    const { data } = yield call([LevelAdminApi, LevelAdminApi.getAllLevel], action.payload);
    yield put(saveLevelAdminData(data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getLevelAdminData, getLevelAdminSaga),
    takeLatest(newLevelAdminData, newLevelAdminSaga),
    takeLatest(levelAdminSelectedData, levelAdminSelectedSaga),
    takeLatest(updateLevelAdminData, updateLevelAdminSaga),
    takeLatest(deleteLevelAdminData, deleteLevelAdminSaga),
    takeLatest(getAllLevelAdminData, getAllLevelAdminSaga),
  ]);
}
