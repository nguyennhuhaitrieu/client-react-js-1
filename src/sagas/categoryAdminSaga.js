import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getCategoryAdminData, saveCategoryAdminData,
  newCategoryAdminData,
  updateCategoryAdminData,
  categoryAdminSelectedData,
  saveCategoryAdminSelectedData,
  deleteCategoryAdminData,
  saveDeleteCategoryAdminData,
  getAllCategoryAdminData,
} from '../actions/adminActions';

import history from '../utils/history';
import CategoryAdminApi from '../services/categoryAdminApi';

function* getCategoryAdminSaga(action) {
  try {
    const { data } = yield call([CategoryAdminApi, CategoryAdminApi.getCategory], action.payload);
    yield put(saveCategoryAdminData(data));
  } catch (e) {
    // do nothing
  }
}

function* newCategoryAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([CategoryAdminApi, CategoryAdminApi.createCategory], values);
    toast.success(data.success, { containerId: 'toastContainerId' });
    yield history.push('/admin/categories');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* updateCategoryAdminSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const { data } = yield call([CategoryAdminApi, CategoryAdminApi.updateCategory], values);
    toast.success(`Category: ${data.name} is Updated Success`, { containerId: 'toastContainerId' });
    yield history.push('/admin/categories');
  } catch (e) {
    const { error } = e.response.data;
    setErrors({ api: error });
  }
}

function* categoryAdminSelectedSaga(action) {
  try {
    const categoryId = action.payload;
    const { data } = yield call([CategoryAdminApi, CategoryAdminApi.getSelectedCategory], categoryId);
    yield put(saveCategoryAdminSelectedData(data));
  } catch (e) {
    // do nothing
  }
}

function* deleteCategoryAdminSaga(action) {
  try {
    const { categoryId } = action.payload;
    const { data } = yield call([CategoryAdminApi, CategoryAdminApi.deleteCategory], categoryId);
    yield put(saveDeleteCategoryAdminData(data));
  } catch (e) {
  // do nothing
  }
}

function* getAllCategoryAdminSaga(action) {
  try {
    const { data } = yield call([CategoryAdminApi, CategoryAdminApi.getAllCategory], action.payload);
    yield put(saveCategoryAdminData(data));
  } catch (e) {
    // do nothing
  }
}

export default function* () {
  yield all([
    takeLatest(getCategoryAdminData, getCategoryAdminSaga),
    takeLatest(newCategoryAdminData, newCategoryAdminSaga),
    takeLatest(categoryAdminSelectedData, categoryAdminSelectedSaga),
    takeLatest(updateCategoryAdminData, updateCategoryAdminSaga),
    takeLatest(deleteCategoryAdminData, deleteCategoryAdminSaga),
    takeLatest(getAllCategoryAdminData, getAllCategoryAdminSaga),
  ]);
}
