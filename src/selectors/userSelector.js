import { createSelector } from 'reselect';

export const selector = state => state.selectedUser;

export const getUserSelector = createSelector(
  selector,
  user => ({ user: user.user })
);
