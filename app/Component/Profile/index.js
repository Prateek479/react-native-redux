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
    top:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: 0, filterContainerPos: 0 };
  }

  componentWillMount() {
    this.props.fetchProfile({'abc':'def'});
  }
  render() {
    const  {navigation, profile, isLoading} = this.props;
    return isLoading ? (
      <StyledView isLoading={true} />
    ) : (
      <View>
        <Header hasHamburger navigation={navigation} title={'Profile'} />
          <StyledView style={styles.container}>
          {
            profile.results && profile.results.length > 0 ? 
            profile.results.map((p, i)=>(
              <Text key={i}>{p.name}</Text> 
            )): 
            <Text>Here not it is</Text> 
          }
          </StyledView>
      </View>
    );
  }
};


