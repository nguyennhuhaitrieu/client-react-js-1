import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { login, loginUserData, logout, logoutUserData } from '../actions/vimActions';
import AuthApi from '../services/authApi';

function* loginSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const response = yield call([AuthApi, AuthApi.login], values);
    yield put(loginUserData(response.data));
  } catch (e) {
    setErrors({ api: e.response.data.message });
  }
}

function* logoutSaga() {
  try {
    yield put(logoutUserData({}));
  } catch (e) {
  // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(login, loginSaga),
    takeLatest(logout, logoutSaga),
  ]);
}
