import { createSelector } from 'reselect';
import { modalSelector } from './modalSelector';

export const selector = state => state.notification;

export const notificationSelector = createSelector(
  selector,
  modalSelector,
  (notification, modalSelected) => ({
    notifications: notification.notifications,
    meta: notification.meta,
    ...modalSelected,
  }),
);
