/**
 * fetchProfile action triggered for
 * getting the list of user initiated
 */
  export function fetchProfileAction(data) {
    return {
      type: 'PROFILE_FETCH_REQUESTED',
      data,
    };
  }
  
  /**
   * fetchProfileSucceeded action triggered after
   * getting the list of user active successfully
   */
  export function fetchProfileSucceededAction(data) {
    return {
      type: 'PROFILE_FETCH_SUCCEEDED',
      data,
    };
  }
  
  /**
   * fetchProfileFailedAction action triggered when there is an error
   * in getting the list of user  
   */
  export function fetchProfileFailedAction(error) {
    return {
      type: 'PROFILE_FETCH_FAILED',
      error,
    };
  }
  