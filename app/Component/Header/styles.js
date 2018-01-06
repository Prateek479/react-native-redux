import { StyleSheet, Platform } from 'react-native';
import colors from '../../Themes/colors';
import { width } from '../../Themes/dimensions';
import { isIos } from '../../Utils/platform';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.darkGrey.tertiary2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: isIos ? 70 : 60,
    paddingTop: isIos ? 15 : 0,
    width: width,
    alignSelf: 'flex-start',
    ...Platform.select({
      android: {},
      ios: {
        bottom: 0,
      },
    }),
  },
  iconbackground: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  titleContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    paddingTop: isIos ? 15 : 0,
  },
});
