import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { getTranslateTextData, saveTranslateTextData } from '../actions/vimActions';
import googleTranslateApi from '../services/googleTranslateApi';

function* getTranslateTextSaga(action) {
  const q = action.payload;
  try {
    const { data } =  yield call([googleTranslateApi, googleTranslateApi.getTextTranslate], { q });
    yield put(saveTranslateTextData(data));
  } catch (e) {
  // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getTranslateTextData, getTranslateTextSaga),
  ]);
}
