import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import colors from 'Themes/colors';
import { styles } from './styles';

const Spinner = ({ size, addedStyle }) => (
  <View style={[styles.spinnerStyle, addedStyle]}>
    <ActivityIndicator size={size || 'large'} color={colors.red.primary} />
  </View>
);

Spinner.propTypes = {
  addedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  size: PropTypes.string,
};

export default Spinner;
