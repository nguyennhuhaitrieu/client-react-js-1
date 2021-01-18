import { createSelector } from 'reselect';
import { categorySelector } from './categoryAdminSelector';
import { genresSelector } from './genresAdminSelector';
import { levelSelector } from './levelAdminSelector';

export const selector = state => state.moviesAdmin;
export const moviesSelectedSelector = state => state.moviesSelected;

export const moviesSelector = createSelector(
  selector, moviesAdmin => ({ movies: moviesAdmin.movies }),
);

export const metaGenresSelector = createSelector(
  selector, movies => ({ meta: movies.meta }),
);

export const newMoviesFormAdminSelector = createSelector(
  categorySelector,
  metaGenresSelector,
  moviesSelectedSelector,
  genresSelector,
  levelSelector,
  (categories, meta, moviesSelected, genres, levels) => ({
    ...categories,
    ...meta,
    moviesSelected,
    ...genres,
    ...levels,
  }),
);


export const moviesAdminSelector = createSelector(
  moviesSelector,
  metaGenresSelector,
  moviesSelectedSelector,
  (movies, meta, moviesSelected) => ({
    ...movies,
    ...meta,
    moviesSelected,
  }),
);
