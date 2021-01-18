import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { getLevelData, saveLevelData } from '../actions/vimActions';
import LevelApi from '../services/levelApi';

function* getLevelSaga(action) {
  try {
    const response = yield call([LevelApi, LevelApi.getLevel], {});
    yield put(saveLevelData(response.data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getLevelData, getLevelSaga),
  ]);
}
