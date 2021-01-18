import { createSelector } from 'reselect';

export const selector = state => state.listUser;
export const listUserSelector = createSelector(
  selector, listUser => ({ listUser: listUser.users, meta: listUser.metadata }),
);
