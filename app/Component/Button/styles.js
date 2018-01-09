import colors from 'Themes/colors';
import { Platform } from 'react-native';

const sizeOptions = {
  fullWidth: {
    padding: 50,
    height: 54,
  },
  large: {
    padding: 50,
    height: 54,
  },
  medium: {
    padding: 25,
    height: 45,
  },
  small: {
    padding: 16.5,
    height: 35,
  }
};

const colorOptions = {
  primary: {
    background: colors.facebook,
    text: colors.white.primary,
    border: colors.white.primary,
    hoverBackground: colors.coolGrey.primary,
    hoverText: colors.black.primary,
    hoverBorder: colors.green.primary
  }
};

export default {
  button: {

  },
  buttonNoStretch: {
    alignItems: 'flex-start'
  },
  container: ( buttonSize, buttonColor) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    height: sizeOptions[buttonSize].height,
    paddingLeft: sizeOptions[buttonSize].padding,
    paddingRight: sizeOptions[buttonSize].padding,
    borderWidth: 1,
    borderColor: buttonColor,
    backgroundColor: colorOptions['primary'].background
  }),

  disabledButton: {
    opacity: 0.5
  },
  text: (buttonSize, customColor) => ({
    fontFamily:  Platform.OS === 'ios' ? 'HelveticaNeue-Light': 'HelveticaNeueLight',
    fontSize: 10,
    color: colorOptions['primary'].text
  }),
  hoverContainer: (customHoverColor) => ({
    borderColor: customHoverColor || colorOptions['primary'].hoverBorder,
    backgroundColor: colorOptions['primary'].hoverBackground
  }),
  hoverText: (customHoverColor) => ({
    color: colorOptions['primary'].hoverText
  })
};
