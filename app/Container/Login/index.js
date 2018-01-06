import React, { PropTypes } from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import StyledView from 'Component/StyledView';
import Header from 'Component/Header'


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
    top:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 const Login = ({ navigation }) => {
  return (
    <View>
      <Header hasBack navigation={navigation} title={'Login'} />
      <StyledView style={styles.container}>
        <Text>Here is you Login page </Text>
      </StyledView>  
    </View>
  );
};


export default Login;
