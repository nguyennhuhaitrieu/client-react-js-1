import { createSelector } from 'reselect';

export const selectorUser = state => state.login;
// export const selectorIsAuth = state => state.login;

export const accessTokenSelector = createSelector(
  selectorUser, login => login.token,
);


export const currentUserIdSelector = createSelector(
  selectorUser, currentUserId => currentUserId.user && currentUserId.user.id,
);

export const currentUserNameSelector = createSelector(
  selectorUser, currentUserName => currentUserName.user && currentUserName.user.full_name,
);

export const roleSelector = createSelector(
  selectorUser, currentUser => currentUser.user && currentUser.user.role,
);


export const authSelector = createSelector(
  selectorUser,
  login => ({ auth: login }),
);
