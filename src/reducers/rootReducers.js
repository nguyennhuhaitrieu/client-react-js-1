// @flow
import { combineReducers } from 'redux';
import login from './loginReducer';
import newFilm from './newFilmReducer';
import hotFilm from './hotFilmReducer';
import level from './levelReducer';
import filmByLevel from './filmByLevelReducer';
import category from './categoryReducer';
import selectedFilm from './filmSelectedReducer';
import episodeFilm from './episodeReducer';
import translate from './translateReducer';
import listUser from './listUserReducer';
import selectedUser from './userReducer';
import audioTranslate from './textToSpeechReducer';
import remindVocabulary from './remindVocabularyReducer';
import isRemindVocabulary from './isRemindReducer';
import comment from './commentReducer';
import modalSelected from './modalSelectedReducer';
import notification from './notificationReducer';
import currentRateMovie from './currentRateReducer';
import categoryFilm from './categoryFilmReducer';
import vocabularyTest from './vocabularyTestReducer';
import categoryAdmin from './categoryAdminReducer';
import categorySelected from './categorySelectedReducer';
import genresAdmin from './genresAdminReducer';
import genresSelected from './genresSelectedReducer';
import levelAdmin from './levelAdminReducer';
import levelSelected from './levelSelectedReducer';
import moviesAdmin from './moviesAdminReducer';
import moviesSelected from './moviesSelectedReducer';
import subtitlesAdmin from './subtitlesAdminReducer';
import subtitlesSelected from './subtitlesSelectedReducer';

const rootReducer = combineReducers({
  login,
  newFilm,
  hotFilm,
  level,
  filmByLevel,
  category,
  selectedFilm,
  episodeFilm,
  translate,
  listUser,
  selectedUser,
  audioTranslate,
  remindVocabulary,
  isRemindVocabulary,
  comment,
  modalSelected,
  notification,
  currentRateMovie,
  categoryFilm,
  vocabularyTest,
  categoryAdmin,
  categorySelected,
  genresAdmin,
  genresSelected,
  levelAdmin,
  levelSelected,
  moviesAdmin,
  moviesSelected,
  subtitlesAdmin,
  subtitlesSelected,
});

export default rootReducer;
