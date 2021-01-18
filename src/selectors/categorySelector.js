import { createSelector } from 'reselect';

export const selector = state => state.category;

export const categorySelector = createSelector(
  selector, category => ({ categories: category.categories }),
);
