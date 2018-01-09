import React, { Component } from 'react';
import {View} from 'react-native'
import PropTypes from 'prop-types';
import StyledView from 'Component/StyledView';
import colors from 'Themes/colors';
import { AppNavigator } from './appNavigator';
import StyledStatusBar from 'Component/StyledStatusBar';

// Don't change the import order for AppNavigator and Root

class AppWithNavigationState extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <StyledView style={{ paddingHorizontal: 0 }} >
        <StyledStatusBar
          translucent
          backgroundColor={colors.darkSlateBlue.secondary}
          barStyle="light-content"
          StatusBarAnimation="fade"
        />
        <AppNavigator />
      </StyledView>
    );
  }
}


export default AppWithNavigationState;
