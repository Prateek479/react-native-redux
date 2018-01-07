/* eslint-disable no-undef*/
import * as _ from 'lodash';
import config from 'Config';
import callApi from 'Utils/request';
/*
 * App Apis
 *
 * Follow this format:
 * export const API_CONSTANT = `${base}/api end point`;
 */

// Endpoint could be local as well if we're serving jsons
const endpointLocation = 'remote';

const urls = {
  remote: {
    'profile': 'people/1/',
  },
  local: {},
};

function getEndpoint(endpoint) {
  if (urls[endpointLocation][endpoint]) {
    return config.api.host + urls[endpointLocation][endpoint];
  }
  return null;
}

/**
 * API triggered for fetching user subscribed/Profile
 * @return {obejct} of packages
 */
function callFetchProfile(profileId, settings = {}) {
  return callApi(getEndpoint('profile'), {
    query: { profileId },
    method: 'get',
    timeout: settings.timeout,
    // removeAuthorizationHeader: true,
    // otherConfig: { shouldHandleErrors: false },
  });
}

// function buyOrSubscribePackage(selectedPackage, toBeSubscribedTo = false) {
//   return callApi(getEndpoint('buy-subscribe-package') + selectedPackage.id, {
//     method: 'put',
//     data: { toBeSubscribedTo },
//     timeout: config.timeout.query,
//     otherConfig: { shouldHandleErrors: true },
//   });
// }


/**
 * API triggerd for validates if user already exist in Auth0 database
 * @msisdn string msisdn to be validated
 * @return {object} with key userExists with a bool value
 */
// function getNumberStatus(msisdn) {
//   return callApi(getEndpoint('identity-find'), {
//     method: 'post',
//     timeout: config.timeout.query,
//     data: { msisdn },
    
//   });
// }


/**
 * API triggered for fetching select video details
 * @return {object} with key currentContent.
 */
// function dislikeContent(videoId) {
//   return callApi(_.replace(getEndpoint('like-content'), 'videoId', videoId), {
//     method: 'delete',
//     timeout: config.timeout.query,
//     removeAuthorizationHeader: false,
//   });
// }
export {
  callFetchProfile,
};
