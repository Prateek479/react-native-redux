import React, { Component } from 'react';
import {View} from 'react-native'
import PropTypes from 'prop-types';
import { AppNavigator } from './appNavigator';
// Don't change the import order for AppNavigator and Root

class AppWithNavigationState extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
        <AppNavigator />
    );
  }
}


export default AppWithNavigationState;
