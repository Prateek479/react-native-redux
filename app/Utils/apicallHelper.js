import { assign } from 'lodash';
import moment from 'moment';
import { getMSISDNFromToken } from './jwtHelper';
import {
  getTokenFromKeychainAction,
  setTokenInKeychainAction,
} from './keychainHelper';
import { getDataFromAsyncStore } from './asyncstorageHelper';

export function createTransactionId(token) {
  /* TransactionId has 4 components as per break-down below
   * ApplicationId + Timestamp + Last 5 digits of MSISDN + Changeable Digit
   * A008 + 151216125801799 + 12345 + 0
   * https://mdltel.atlassian.net/wiki/display/TVA/9.+UXP+Transaction+ID+Specification
   */
  const appId = 'A008';
  const msisdn = getMSISDNFromToken(token);
  const msisdnString = msisdn ? msisdn.toString() : '00000';
  const msisdnStripped = msisdnString.substr(msisdnString.length - 5);
  const timeStamp = moment().format('YYMMDDHHmmssSSS');
  const changeableDigit = '0';
  return [appId, timeStamp, msisdnStripped, changeableDigit].join('');
}

export function setPromotedTokenInKeyChain(token) {
  return getTokenFromKeychainAction()
    .then(tokenInKeychain => {
      const promotedToken = assign(tokenInKeychain, { idToken: token });
      return setTokenInKeychainAction(promotedToken);
    })
    .catch(() => {
      const tokenInKeychain = JSON.stringify({ idToken: token });
      return setTokenInKeychainAction(tokenInKeychain);
    });
}

/**
 * Passed a JSON returns in query format
 */
export function queryParams(params) {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
}

export async function getRequiredItems(freshTokenPromise) {
  // token and freshTokenPromise flag
  let token = null;
  let freshTokenPromiseValue = false;
  try {
    token = await getTokenFromKeychainAction();
    freshTokenPromiseValue = await getDataFromAsyncStore(freshTokenPromise);
  } catch (error) {
    //
  }
  return { token, freshTokenPromise: freshTokenPromiseValue };
}
