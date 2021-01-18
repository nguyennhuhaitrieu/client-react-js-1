import { createSelector } from 'reselect';

export const selector = state => state.modalSelected;


export const modalSelector = createSelector(
  selector, modalSelected => modalSelected,
);
