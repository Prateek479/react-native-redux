import React, { PropTypes } from 'react';
import AppWithNavigationState from 'Navigation';
import {StyleSheet, Text, View } from 'react-native';



/**
 * Provides an entry point into our application.  
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootNative.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 const Root = () => {
  return <AppWithNavigationState />;
};


export default Root;
