import { createSelector } from 'reselect';

export const selector = state => state.audioTranslate;

export const audioSelector = createSelector(
  selector, audio => ({ audioContent: audio.audioContent }),
);
