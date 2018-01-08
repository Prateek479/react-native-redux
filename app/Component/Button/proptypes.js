import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';


export const buttonPropTypes = {
  onPress: PropTypes.func,
  buttonSize: PropTypes.string,
  disabled: PropTypes.bool,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
  touchableStyle: stylePropType,
  style: stylePropType,
  textStyle: stylePropType,
  hoverStyle: stylePropType,
  hoverTextStyle: stylePropType,
  hoverColor: PropTypes.string,
};

export const buttonDefaultProps = {
  disabled: false,
  buttonSize: 'fullWidth',
};

export default {
  buttonPropTypes,
  buttonDefaultProps
};
