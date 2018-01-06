import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Spinner from 'Component/Spinner';
import { styles, overlayStyle } from './styles';

const propTypes = {
  //TODO: oneOfType is being used because in runtime style will be compiled
  // and sent as number(Stylesheet.create) prop but in case of test cases
  // it will sent as object as compilation will not be done.
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};
//Always remember that the overlay for our spinner
//should be the last view injected
export const StyledView = props => (
  <View style={[styles.container, props.style]} behavior="height">
    {props.children}
    {props.isLoading && (
      <View style={overlayStyle.container}>
        <Spinner />
      </View>
    )}
  </View>
);

StyledView.propTypes = propTypes;

export default StyledView;
