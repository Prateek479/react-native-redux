import React, { PropTypes } from 'react';
import {StyleSheet, Text, View , Button} from 'react-native';
import StyledView from 'Component/StyledView';
import Header from 'Component/Header'

/**
 * Provides an entry point into our application.  
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * HomeNative.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    top:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 const Home = ({navigation}) => {
  return (
    <View>
      <Header hasHamburger hasSearch navigation={navigation} title={'Home'} />
      <StyledView style={styles.container}>
        <Text>Here is you home page </Text>       
      </StyledView>
    </View>
  );
};


export default Home;
