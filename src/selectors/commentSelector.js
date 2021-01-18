import { createSelector } from 'reselect';

export const selector = state => state.comment;

export const commentSelector = createSelector(
  selector, comments => ({ listComments: comments }),
);
