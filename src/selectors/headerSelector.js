import { createSelector } from 'reselect';
import { currentUserIdSelector, currentUserNameSelector, accessTokenSelector, roleSelector } from './authSelector';
import { modalSelector } from './modalSelector';
import { isRemindSelector, remindVocabularySelector } from './remindVocabularySelector';

export const headerSelector = createSelector(
  currentUserIdSelector,
  currentUserNameSelector,
  accessTokenSelector,
  remindVocabularySelector,
  isRemindSelector,
  modalSelector,
  roleSelector,
  (currentUserID, currentUserName, token, listVocabularies, isRemind, modalSelected, role) => ({
    currentUserID,
    currentUserName,
    token,
    listVocabularies,
    isRemind,
    ...modalSelected,
    role,
  }),
);
