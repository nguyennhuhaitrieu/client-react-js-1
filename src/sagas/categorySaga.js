import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { getCategoryData, saveCategoryData } from '../actions/vimActions';
import CategoryApi from '../services/categoryApi';

function* getCategorySaga() {
  try {
    const { data } = yield call([CategoryApi, CategoryApi.getCategory], {});
    yield put(saveCategoryData(data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getCategoryData, getCategorySaga),
  ]);
}
