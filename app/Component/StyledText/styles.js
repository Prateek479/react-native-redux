import { StyleSheet } from 'react-native';
import colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  textUnderline: {
    borderColor: colors.red.primary,
    borderBottomWidth: 1.3,
    width: 21.3,
    paddingVertical: 5,
  },
  transparentText: {
    backgroundColor: 'transparent',
  },
});
