import { createSelector } from 'reselect';
import { categorySelector } from './categoryAdminSelector';
import { genresSelector } from './genresAdminSelector';
import { levelSelector } from './levelAdminSelector';
import { moviesSelector } from './moviesAdminSelector';

export const selector = state => state.subtitlesAdmin;
export const subtitlesSelectedSelector = state => state.subtitlesSelected;

export const subtitlesSelector = createSelector(
  selector, subtitlesAdmin => ({ subtitles: subtitlesAdmin.subtitles }),
);

export const metaGenresSelector = createSelector(
  selector, subtitles => ({ meta: subtitles.meta }),
);

export const newSubtitlesFormAdminSelector = createSelector(
  categorySelector,
  metaGenresSelector,
  subtitlesSelectedSelector,
  genresSelector,
  levelSelector,
  (categories, meta, subtitlesSelected, genres, levels) => ({
    ...categories,
    ...meta,
    subtitlesSelected,
    ...genres,
    ...levels,
  }),
);


export const subtitlesAdminSelector = createSelector(
  subtitlesSelector,
  metaGenresSelector,
  subtitlesSelectedSelector,
  moviesSelector,
  (subtitles, meta, subtitlesSelected, movies) => ({
    ...subtitles,
    ...meta,
    subtitlesSelected,
    ...movies,
  }),
);
