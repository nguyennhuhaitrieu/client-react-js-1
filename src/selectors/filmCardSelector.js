import { createSelector } from 'reselect';
import { authSelector } from './authSelector';

export const Rateselector = state => state.currentRateMovie;

export const currentRateMovieSelector = createSelector(
  Rateselector, currentRateMovie => currentRateMovie,
);

export const filmCardSelector = createSelector(
  authSelector,
  currentRateMovieSelector,
  (auth, currentRate) => ({
    ...auth,
    currentRate,
  }),
);
