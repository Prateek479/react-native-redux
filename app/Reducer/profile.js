import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  profile: {},
  isLoading: false,
});

function profileReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'PROFILE_FETCH_REQUESTED':
      return state.concat([action.text])
    default:
      return state
  }
}

  export default profileReducer;
 