import React, { PropTypes } from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import SimpleTabs from 'Navigation/tabNavigation';
import StyledView from 'Component/StyledView';
import Header from 'Component/Header'


/**
 * Provides an entry point into our application.  
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * ProfileNative.
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


 const Tab1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header hasHamburger hasSearch navigation={navigation} title={'Tab A'} />
      <StyledView style={styles.container}>
        <Text>Here is you Tab 1 page </Text>
        <Button
            onPress={() => navigation.navigate('Login', { name: 'Jordan' })}
            title="Open Login screen"
        />
      </StyledView>  
    </View>
  );
};


export default Tab1;
