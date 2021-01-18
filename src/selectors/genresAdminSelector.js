import { createSelector } from 'reselect';

export const selector = state => state.genresAdmin;
export const genresSelectedSelector = state => state.genresSelected;

export const genresSelector = createSelector(
  selector, genresAdmin => ({ genres: genresAdmin.genres }),
);

export const metaGenresSelector = createSelector(
  selector, genres => ({ meta: genres.meta }),
);

export const genresAdminSelector = createSelector(
  genresSelector,
  metaGenresSelector,
  genresSelectedSelector,
  (genres, meta, genresSelected) => ({
    ...genres,
    ...meta,
    genresSelected,
  }),
);
