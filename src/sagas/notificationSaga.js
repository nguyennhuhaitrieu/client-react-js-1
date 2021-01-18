import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { getNotificationData, saveNotificationData, readNotificationData, saveReadNotificationData } from '../actions/vimActions';
import NotificationApi from '../services/notificationApi';

function* getNotificationSaga(action) {
  try {
    const { data } = yield call([NotificationApi, NotificationApi.getNotification], action.payload);
    yield put(saveNotificationData(data));
  } catch (e) {
  // do nothing
  }
}

function* readNotificationSaga(action) {
  const { data: values, setReadClass, readClass } = action.payload;
  try {
    const { data } = yield call([NotificationApi, NotificationApi.readNotification], { values });
    yield put(saveReadNotificationData(data));
  } catch (e) {
  // do nothing
  } finally {
    setReadClass(readClass);
  }
}

export default function* () {
  yield all([
    takeLatest(getNotificationData, getNotificationSaga),
    takeLatest(readNotificationData, readNotificationSaga),
  ]);
}
