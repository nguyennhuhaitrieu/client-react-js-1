import { createSelector } from 'reselect';

export const selector = state => state.episodeFilm;

export const episodeSelector = createSelector(
  selector, episode => ({
    episodes: episode.episode,
    meta: episode.meta,
  }),
);
