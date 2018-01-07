
import { fromJS, List } from 'immutable';

const INITIAL_STATE = fromJS({
  profile: {},
  isLoading: false,
  error : null
});

function profileReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'PROFILE_FETCH_REQUESTED':
      return state .set('isLoading', true);
    case 'PROFILE_FETCH_SUCCEEDED':
      return state
        .set(
          'profile',
          fromJS(action.data.responseData) || [],
        )
        .set('isLoading', false);
    case 'PROFILE_FETCH_FAILED':
      return state
        .set('error', 'Fetching Error')
        .set('isLoading', false);
    default:
      return state
  }
}

export default profileReducer;
 