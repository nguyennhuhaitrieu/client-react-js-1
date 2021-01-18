import { all, fork } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga';
import filmSaga from './filmSaga';
import levelSaga from './levelSaga';
import categorySaga from './categorySaga';
import episodeSaga from './episodeSaga';
import translateSaga from './translateSaga';
import listUserSaga from './listUserSaga';
import TextToSpeechSaga from './speechToTextSaga';
import vocabularySaga from './vocabularySaga';
import commentSaga from './commentSaga';
import notificationSaga from './notificationSaga';
import getCategoryAdminSaga from './categoryAdminSaga';
import getGenresAdminSaga from './genresAdminSaga';
import getLevelAdminSaga from './levelAdminSaga';
import getMoviesAdminSaga from './moviesAdminSaga';
import getSubtitlesAdminSaga from './subtitlesAdminSaga';

export default function* () {
  yield all([
    fork(loginSaga),
    fork(signupSaga),
    fork(filmSaga),
    fork(levelSaga),
    fork(categorySaga),
    fork(episodeSaga),
    fork(translateSaga),
    fork(TextToSpeechSaga),
    fork(listUserSaga),
    fork(vocabularySaga),
    fork(commentSaga),
    fork(notificationSaga),
    fork(getCategoryAdminSaga),
    fork(getGenresAdminSaga),
    fork(getLevelAdminSaga),
    fork(getMoviesAdminSaga),
    fork(getSubtitlesAdminSaga),
  ]);
}
