import { createSelector } from 'reselect';

export const selector = state => state.level;

export const levelSelector = createSelector(
  selector, level => ({ listLevels: level }),
);
