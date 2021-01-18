import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import {
  getCommentData,
  saveCommentData,
  addCommentData,
  saveNewCommentData,
  editCommentData,
  saveEditCommentData,
  deleteCommentData,
  saveDeleteCommentData,
} from '../actions/vimActions';
import CommentApi from '../services/commentApi';

function* getCommentSaga(action) {
  try {
    const { data } = yield call([CommentApi, CommentApi.getComment], action.payload);
    yield put(saveCommentData(data));
  } catch (e) {
  // do nothing
  }
}

function* addCommentSaga(action) {
  const { resetForm, setErrors, values } = action.payload;
  try {
    const { data } = yield call([CommentApi, CommentApi.addComment], { values });
    yield put(saveNewCommentData(data));
    resetForm({ content: '' });
  } catch (e) {
  // do nothing
    setErrors({ ...e.response.data.error });
  }
}

function* editCommentSaga(action) {
  const { resetForm, setErrors, values } = action.payload;
  try {
    const { data } = yield call([CommentApi, CommentApi.editComment], { values });

    yield put(saveEditCommentData(data));
    resetForm({ content: '' });
  } catch (e) {
  // do nothing
    setErrors({ ...e.response.data.error });
  }
}

function* deleteCommentSaga(action) {
  try {
    const { data } = yield call([CommentApi, CommentApi.deleteComment], action.payload);
    yield put(saveDeleteCommentData(data));
  } catch (e) {
  // do nothing
  }
}


export default function* () {
  yield all([
    takeLatest(getCommentData, getCommentSaga),
    takeLatest(addCommentData, addCommentSaga),
    takeLatest(editCommentData, editCommentSaga),
    takeLatest(deleteCommentData, deleteCommentSaga),
  ]);
}
