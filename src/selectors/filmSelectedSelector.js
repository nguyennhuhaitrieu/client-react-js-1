import { createSelector } from 'reselect';

export const selector = state => state.selectedFilm;

export const filmSelectedSelector = createSelector(
  selector, film => ({ selectedFilm: film }),
);
