import { createSelector } from 'reselect';

export const selector = state => state.newFilm;

export const newFilmSelector = createSelector(
  selector, newFilm => ({
    newFilms: newFilm.newFilms,
    meta: newFilm.meta,
  }),
);
