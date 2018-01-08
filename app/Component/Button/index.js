import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { buttonPropTypes, buttonDefaultProps } from './proptypes';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over: false
    };
  }

  _onMouseOver = () => {
    this.setState({ over: true });
  };

  _onMouseOut = () => {
    this.setState({ over: false });
  };

  _renderTitle = () => {
    const {
      title,
      textStyle,
      hoverTextStyle,
      hoverColor,
      buttonSize,
      buttonColor,
    } = this.props;
    const { over } = this.state;

    return (
      <Text
        style={[
          styles.text(buttonSize, buttonColor),
          textStyle,
          over && (hoverTextStyle || styles.hoverText(hoverColor))
        ]}
      >
        {title}
      </Text>
    );
  };
  
  render() {
    const {
      onPress,
      buttonSize,
      buttonColor,
      disabled,
      title,
      style,
      hoverStyle,
      hoverColor,
      touchableStyle,
    } = this.props;

    const { over } = this.state;
    const fullWidthButton = 'fullWidth';

    return (
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        style={[styles.button, buttonSize !== fullWidthButton && styles.buttonNoStretch, touchableStyle]}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
        activeOpacity={disabled ? 1 : undefined}
      >
        <View
          style={[
            styles.container(buttonSize, buttonColor),
            disabled && styles.disabledButton,
            style,
            over && (hoverStyle || styles.hoverContainer(hoverColor))]}
        >
          { title !== '' && this._renderTitle() }
        </View>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = buttonDefaultProps;
Button.propTypes = buttonPropTypes;

export default Button;
