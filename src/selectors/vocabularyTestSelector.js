import { createSelector } from 'reselect';
import { authSelector } from './authSelector';

export const selector = state => state.vocabularyTest;

export const vocabularyTestSelector =  createSelector(
  authSelector,
  selector,
  (auth, vocabularyTest) => ({
    ...auth,
    vocabularyTest,
  }),
);
