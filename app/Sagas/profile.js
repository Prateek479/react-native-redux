import { call, all, put, select, takeLatest } from 'redux-saga/effects';
import { callFetchProfile } from 'Utils/apis';
import {
fetchProfileAction,
  fetchProfileFailedAction,
  fetchProfileSucceededAction,
} from 'Actions/profile';


// worker Saga: will be fired on PROFILE_FETCH_REQUESTED actions
export function* fetchProfile({ shouldUpdate }) {
    const responseData = yield call(callFetchProfile);
    yield put(
      fetchProfileSucceededAction({
        responseData: responseData,
      }),
    );
}

/*
 Starts fetchBrowse on each dispatched `BROWSE_FETCH_REQUESTED` action
 */

export function* profileData() {
  // Watches for PROFILE_FETCH_REQUESTED actions and calls fetchBrowse when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  yield all([takeLatest('PROFILE_FETCH_REQUESTED', fetchProfile)]);
}

export default [profileData];
