import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { isAndroid } from 'Utils/platform';

import styles from './styles';

export const StyledStatusBar = ({ backgroundColor, ...props }) => {
  if (isAndroid && Platform.Version < 20) {
    return null;
  }
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

StyledStatusBar.propTypes = {
  backgroundColor: PropTypes.string,
};

export default StyledStatusBar;
