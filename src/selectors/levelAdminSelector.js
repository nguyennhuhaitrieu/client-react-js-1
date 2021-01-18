import { createSelector } from 'reselect';

export const selector = state => state.levelAdmin;
export const levelSelectedSelector = state => state.levelSelected;

export const levelSelector = createSelector(
  selector, level => ({ levels: level.levels }),
);

export const metaLevelSelector = createSelector(
  selector, level => ({ meta: level.meta }),
);

export const levelAdminSelector = createSelector(
  levelSelector,
  metaLevelSelector,
  levelSelectedSelector,
  (level, meta, levelSelected) => ({
    ...level,
    ...meta,
    levelSelected,
  }),
);
