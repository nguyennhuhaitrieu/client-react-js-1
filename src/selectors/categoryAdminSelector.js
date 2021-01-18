import { createSelector } from 'reselect';

export const selector = state => state.categoryAdmin;
export const categorySelectedSelector = state => state.categorySelected;

export const categorySelector = createSelector(
  selector, category => ({ categories: category.categories }),
);

export const metaCategorySelector = createSelector(
  selector, category => ({ meta: category.meta }),
);

export const categoryAdminSelector = createSelector(
  categorySelector,
  metaCategorySelector,
  categorySelectedSelector,
  (category, meta, categorySelected) => ({
    ...category,
    ...meta,
    categorySelected,
  }),
);
