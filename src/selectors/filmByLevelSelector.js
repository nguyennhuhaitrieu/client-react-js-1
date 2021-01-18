import { createSelector } from 'reselect';
import { levelSelector } from './levelSelector';

export const selector = state => state.filmByLevel;

export const levelFilmsSelector = createSelector(
  selector, levelFilm => ({
    filmByLevels: levelFilm.filmByLevels,
    meta: levelFilm.meta,
  }),
);


export const filmByLevelSelector = createSelector(
  levelSelector,
  levelFilmsSelector,
  (listLevels, filmByLevels) => ({
    ...listLevels,
    filmByLevels,
  }),
);
