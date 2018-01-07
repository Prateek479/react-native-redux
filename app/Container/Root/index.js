import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from 'Navigation';
import store from 'Store';

import { getAsyncInjectors } from 'Utils/asyncInjectors';
import profileReducer from 'Reducer/profile';
import counterReducer from 'Reducer/counter';

import profileSaga from 'Sagas/profile';
// import authSaga from './containers/Auth/sagas';

import config from 'Config';

// Needed for redux-saga es6 generator support
/**
 * Provides an entry point into our application.  Bot
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

const { injectReducer, injectSagas } = getAsyncInjectors(store);
injectReducer('profileReducer', profileReducer);
injectSagas(profileSaga);


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
};

