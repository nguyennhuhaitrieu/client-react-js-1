import { createSelector } from 'reselect';
import { filmSelectedSelector } from './filmSelectedSelector';
import { audioSelector } from './audioSelector';
import { currentUserIdSelector, accessTokenSelector } from './authSelector';

export const selector = state => state.translate;

export const translateTextSelector = createSelector(
  selector, translateText => translateText.translations
);

export const translateSelector = createSelector(
  translateTextSelector,
  filmSelectedSelector,
  audioSelector,
  currentUserIdSelector,
  accessTokenSelector,
  (translateSelectedText, selectedFilm, audioContent, currentUserId, token) => ({
    translateSelectedText,
    ...selectedFilm,
    ...audioContent,
    currentUserId,
    token,
  }),
);
