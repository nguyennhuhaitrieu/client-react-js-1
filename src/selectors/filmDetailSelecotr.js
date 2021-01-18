import { createSelector } from 'reselect';
import { filmSelectedSelector } from './filmSelectedSelector';
import { episodeSelector } from './episodeSelector';

export const film = filmSelectedSelector;
export const episodes = episodeSelector;

export const filmDetailSelector = createSelector(
  film,
  episodes,
  (selectedFilm, episodes) => ({
    selectedFilm,
    episodes,
  }),
);
