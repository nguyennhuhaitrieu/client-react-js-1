// eslint-disable-next-line import/no-extraneous-dependencies
import keyMirror from 'fbjs/lib/keyMirror';

const AdminActionTypes = keyMirror({
  GET_CATEGORY_ADMIN_DATA: undefined,
  SAVE_CATEGORY_ADMIN_DATA: undefined,
  NEW_CATEGORY_ADMIN_DATA: undefined,
  UPDATE_CATEGORY_ADMIN_DATA: undefined,
  CATEGORY_ADMIN_SELECTED_DATA: undefined,
  SAVE_CATEGORY_ADMIN_SELECTED_DATA: undefined,
  DELETE_CATEGORY_ADMIN_DATA: undefined,
  SAVE_DELETE_CATEGORY_ADMIN_DATA: undefined,
  RESET_PASSWORD_ADMIN: undefined,
  SAVE_DELETE_USER_ADMIN_DATA: undefined,
  // genres
  GET_GENRES_ADMIN_DATA: undefined,
  SAVE_GENRES_ADMIN_DATA: undefined,
  NEW_GENRES_ADMIN_DATA: undefined,
  UPDATE_GENRES_ADMIN_DATA: undefined,
  GENRES_ADMIN_SELECTED_DATA: undefined,
  SAVE_GENRES_ADMIN_SELECTED_DATA: undefined,
  DELETE_GENRES_ADMIN_DATA: undefined,
  SAVE_DELETE_GENRES_ADMIN_DATA: undefined,
  // level
  GET_LEVEL_ADMIN_DATA: undefined,
  SAVE_LEVEL_ADMIN_DATA: undefined,
  NEW_LEVEL_ADMIN_DATA: undefined,
  UPDATE_LEVEL_ADMIN_DATA: undefined,
  LEVEL_ADMIN_SELECTED_DATA: undefined,
  SAVE_LEVEL_ADMIN_SELECTED_DATA: undefined,
  DELETE_LEVEL_ADMIN_DATA: undefined,
  SAVE_DELETE_LEVEL_ADMIN_DATA: undefined,

  // movies
  GET_MOVIES_ADMIN_DATA: undefined,
  SAVE_MOVIES_ADMIN_DATA: undefined,
  NEW_MOVIES_ADMIN_DATA: undefined,
  UPDATE_MOVIES_ADMIN_DATA: undefined,
  MOVIES_ADMIN_SELECTED_DATA: undefined,
  SAVE_MOVIES_ADMIN_SELECTED_DATA: undefined,
  DELETE_MOVIES_ADMIN_DATA: undefined,
  SAVE_DELETE_MOVIES_ADMIN_DATA: undefined,

  // Get all
  GET_ALL_CATEGORY_ADMIN_DATA: undefined,
  GET_ALL_GENRES_ADMIN_DATA: undefined,
  GET_ALL_LEVEL_ADMIN_DATA: undefined,

  // Subtitles
  GET_SUBTITLES_ADMIN_DATA: undefined,
  SAVE_SUBTITLES_ADMIN_DATA: undefined,
  NEW_SUBTITLES_ADMIN_DATA: undefined,
  UPDATE_SUBTITLES_ADMIN_DATA: undefined,
  SUBTITLES_ADMIN_SELECTED_DATA: undefined,
  SAVE_SUBTITLES_ADMIN_SELECTED_DATA: undefined,
  DELETE_SUBTITLES_ADMIN_DATA: undefined,
  SAVE_DELETE_SUBTITLES_ADMIN_DATA: undefined,

  GET_ALL_MOVIES_ADMIN_DATA: undefined,
});

export default AdminActionTypes;
