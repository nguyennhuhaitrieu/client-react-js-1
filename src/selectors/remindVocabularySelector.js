import { createSelector } from 'reselect';
import { authSelector } from './authSelector';

export const selectorRemindVocabularies = state => state.remindVocabulary;

export const VocabularyRemindSelector = createSelector(
  selectorRemindVocabularies, remindVocabulary => ({ listVocabularies: remindVocabulary.vocabularies }),
);

export const selector = state => state.vocabularyTest;

export const isRemindVocabularySelector = state => state.isRemindVocabulary;


export const remindVocabularySelector = createSelector(
  selector, remindVocabulary => remindVocabulary,
);

export const isRemindSelector = createSelector(
  isRemindVocabularySelector, isRemindVocabulary => isRemindVocabulary.isRemind,
);

export const vocabulariesSelector =  createSelector(
  VocabularyRemindSelector,
  isRemindSelector,
  (listVocabularies = {}, isRemind) => ({
    ...listVocabularies,
    isRemind,
  }),
);

export const vocabularyRemindSelector =  createSelector(
  authSelector,
  selectorRemindVocabularies,
  (auth, listVocabularies) => ({
    ...auth,
    listVocabularies,
  }),
);
