import { createSelector } from 'reselect';

export const selector = state => state.hotFilm;

export const hotFilmSelector = createSelector(
  selector, hotFilm => ({ hotFilms: hotFilm.hotFilms }),
);
