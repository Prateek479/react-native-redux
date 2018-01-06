import { StyleSheet } from 'react-native';
import colors from './colors';

export const titleStyle = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
});

export const headerStyle = StyleSheet.create({
  headerBackground: {
    backgroundColor: colors.darkGrey.tertiary2,
  },
  noBackground: {
    backgroundColor: colors.darkGrey.tertiary2,
  },
  headerTitle: {
    alignItems: 'center',
  },
  appVersion: {
    paddingLeft: 3,
    paddingRight: 1,
    paddingVertical: 0,
    marginLeft: 5,
    marginTop: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.white.tertiary,
  },
});

export const menuStyle = StyleSheet.create({
  menuIcon: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
