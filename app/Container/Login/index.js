import React, { PropTypes } from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';


/**
 * Provides an entry point into our application.  
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * LoginNative.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 const Login = () => {
  return (
    <View style={styles.container}>
        <Text>Here is you Login page </Text>
        
    </View>
  );
};


export default Login;
