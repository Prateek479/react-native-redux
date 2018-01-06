import { StyleSheet } from 'react-native';
import colors from 'Themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkNavyBlue.primary,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    paddingHorizontal: 16,
  },
});

export const overlayStyle = {
  container: {
    backgroundColor: colors.black.primary,
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,
  },
};
