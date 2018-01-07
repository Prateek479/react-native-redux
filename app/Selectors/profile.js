/**
 * The my profile state selectors
 */
import { createSelector } from 'reselect';

const selectProfile = state => state.get('profile');

const selectProfileData = () =>
  createSelector(selectProfile, profile => profile.toJS()['profile']);

const selectLoading = () =>
  createSelector(selectProfile, profile => profile.toJS()['isLoading']);

const selectError = () =>
  createSelector(selectProfile, profile => profile.toJS()['error']);


export {
  selectProfile,
  selectProfileData,
  selectLoading,
  selectError,
};
