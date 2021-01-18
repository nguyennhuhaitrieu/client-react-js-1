import { createSelector } from 'reselect';
import { categorySelector } from './categorySelector';

export const selector = state => state.categoryFilm;

export const categoryFilmSelector = createSelector(
  selector,
  categorySelector,
  (categoryFilm, categories) => ({
    filmByCategory: categoryFilm.filmByCategory,
    meta: categoryFilm.meta,
    ...categories,
  }),
);
