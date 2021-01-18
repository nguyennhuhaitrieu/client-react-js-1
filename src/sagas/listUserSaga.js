import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getListUserData,
  saveListUserData,
  deleteUserData,
  newUserData,
  editUserData,
  showUserData,
  updateUserData,
} from '../actions/vimActions';
import {
  resetPasswordAdmin,
  saveDeleteUserAdminData,
} from '../actions/adminActions';

import history from '../utils/history';

import UserApi from '../services/userApi';

function* getListUserSaga(action) {
  try {
    const currentPage = !action.payload ? 1 : action.payload;
    const { data } = yield call([UserApi, UserApi.getUser], currentPage);
    yield put(saveListUserData(data));
  } catch (e) {
    // do nothing
  }
}

function* deleteUserSaga(action) {
  try {
    const { userId } = action.payload;
    const { data } = yield call([UserApi, UserApi.deleteUser], userId);
    yield put(saveDeleteUserAdminData(data));
    toast.success('Users is Deleted Success', { containerId: 'toastContainerId' });
  } catch (e) {
    // do nothing
  }
}

function* newUserSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([UserApi, UserApi.postUser], values);
    toast.success(data.success, { containerId: 'toastContainerId' });
    yield history.push('/admin/users');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* editUserSaga(action) {
  try {
    const userId = action.payload;
    const { data } = yield call([UserApi, UserApi.editUser], userId);
    yield put(showUserData(data));
  } catch (e) {
    // do nothing
  }
}

function* updateUserSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    yield call([UserApi, UserApi.updateUser], values);
    toast.success('Users is Updated Success', { containerId: 'toastContainerId' });
    yield history.push('/admin/users');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* resetPasswordAdminSaga(action) {
  try {
    const userId = action.payload;
    const data = { id: userId, password: '$2y$10$RtcqOaKlgc13ZkG6xWP4dO/FMLyYNmqUjZWKdeEz1.O261gBWV66y' };
    yield call([UserApi, UserApi.updateUser], data);
    toast.success('Reset Password Success', { containerId: 'toastContainerId' });
  } catch (e) {
  // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getListUserData, getListUserSaga),
    takeLatest(deleteUserData, deleteUserSaga),
    takeLatest(newUserData, newUserSaga),
    takeLatest(editUserData, editUserSaga),
    takeLatest(updateUserData, updateUserSaga),
    takeLatest(resetPasswordAdmin, resetPasswordAdminSaga),
  ]);
}
