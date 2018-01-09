import { StyleSheet, StatusBar } from 'react-native';
import { isIos } from 'Utils/platform';

const STATUSBAR_HEIGHT = isIos ? 20 : StatusBar.currentHeight;

export const styles = StyleSheet.create({
  statusBar: { height: STATUSBAR_HEIGHT },
});

export default styles;
