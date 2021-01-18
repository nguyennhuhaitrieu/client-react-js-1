import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import {
  markVocabularyData,
  saveVocabularyData,
  getRemindVocabularyData,
  saveRemindVocabularyData,
  getVocabularyTestData,
  saveVocabularyTestData,
  getNextRemindVocabularyData,
  saveNextRemindVocabularyData,
} from '../actions/vimActions';
import VocabularyApi from '../services/vocabularyApi';

function* markVocabularySaga(action) {
  const { setAlertVocabulary } = action.payload;
  try {
    const { data } =  yield call([VocabularyApi, VocabularyApi.markVocabulary], action.payload);
    yield put(saveVocabularyData(data));
    setAlertVocabulary('Mark Vocabulary Success');
  } catch (e) {
    setAlertVocabulary(e.response.data.error);
  }
}

function* getRemindVocabularySaga(action) {
  try {
    const response = yield call([VocabularyApi, VocabularyApi.getUserVocabulary], action.payload);
    yield put(saveRemindVocabularyData(response.data));
  } catch (e) {
  // do nothing
  }
}

function* getVocabularyTestSaga(action) {
  try {
    const { data } = yield call([VocabularyApi, VocabularyApi.getVocabularyTest], action.payload);
    yield put(saveVocabularyTestData(data));
  } catch (e) {
  // do nothing
  }
}

function* getNextRemindVocabularySaga(action) {
  try {
    const { data } = yield call([VocabularyApi, VocabularyApi.getUserVocabulary], action.payload);
    yield put(saveNextRemindVocabularyData(data));
  } catch (e) {
  // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(markVocabularyData, markVocabularySaga),
    takeLatest(getRemindVocabularyData, getRemindVocabularySaga),
    takeLatest(getVocabularyTestData, getVocabularyTestSaga),
    takeLatest(getNextRemindVocabularyData, getNextRemindVocabularySaga),
  ]);
}
