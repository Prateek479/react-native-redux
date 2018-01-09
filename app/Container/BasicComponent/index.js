import React, { PropTypes } from 'react';
import {StyleSheet, Text, View , Button} from 'react-native';
import StyledView from 'Component/StyledView';
import Header from 'Component/Header'
import ButtonComponent from 'Component/Button'

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
    backgroundColor: '#fff',

  },
});
const _onPress = () =>{
  console.log('i press')
}

 const BasicComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header hasHamburger hasSearch navigation={navigation} title={'Components'} />
      <StyledView style={styles.container}>
        <View >
          <Text>Buttton Component </Text>  
          <ButtonComponent title="Button Name" onPress={_onPress} />     
        </View> 
      </StyledView>
    </View>
  );
};


export default BasicComponent;
