import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { signup, loginUserData } from '../actions/vimActions';
import SignupApi from '../services/signupApi';

function* signupSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const response =  yield call([SignupApi, SignupApi.signup], values);
    yield put(loginUserData(response.data));
  } catch (e) {
    setErrors({ api: e.response.data.message });
  }
}

export default function* () {
  yield all([
    takeLatest(signup, signupSaga),
  ]);
}
