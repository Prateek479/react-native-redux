import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import fontStyle from '../../Themes/fonts';

const propTypes = {
  //TODO: oneOfType is being used because in runtime style will be compiled
  // and sent as number(Stylesheet.create) prop but in case of test cases
  // it will sent as object as compilation will not be done.
  addedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
  ellipse: PropTypes.string,
  i18nKey: PropTypes.string,
  i18nValue: PropTypes.object,
  isTextValueOveri18n: PropTypes.bool,
  isUnderline: PropTypes.bool,
  lines: PropTypes.number,
  onPress: PropTypes.func,
  textStyle: PropTypes.string,
  upperCase: PropTypes.bool,
  wrapStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

const StyledText = props => {
  const styling = fontStyle[props.textStyle] || fontStyle['h4MedWhiteP'];
  const underline = props.isUnderline && <View style={styles.textUnderline} />;
  let children = props.value
  ? value
  : props.children;
  if (props.upperCase) {
    children = children && children.toUpperCase();
  }
  return (
    <View style={props.wrapStyle}>
      <Text
        onPress={props.onPress}
        style={[styles.transparentText, styling.style, props.addedStyle]}
        letterSpacing={styling.props.letterSpacing}
        lineHeight={styling.props.lineHeight}
        allowFontScaling={false}
        ellipsizeMode={props.ellipse}
        numberOfLines={props.lines}
      >
       {children}
      </Text>
      {underline}
    </View>
  );
};

StyledText.propTypes = propTypes;

StyledText.defaultProps = {
  letterSpacing: 0,
  isUnderline: false,
};

export default StyledText;
