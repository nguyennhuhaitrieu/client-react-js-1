import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { getTextSpeechData, saveTextSpeechData } from '../actions/vimActions';
import TextToSpeechApi from '../services/textToSpeechApi';

function* getTextSpeechSaga(action) {
  const text = action.payload;
  // try {
  const { data } =  yield call([TextToSpeechApi, TextToSpeechApi.getTextToSpeech], { text });
  yield put(saveTextSpeechData(data));
  // } catch (e) {
  // do nothing
  // }
}

export default function* () {
  yield all([
    takeLatest(getTextSpeechData, getTextSpeechSaga),
  ]);
}
