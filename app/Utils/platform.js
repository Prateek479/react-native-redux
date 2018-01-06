import { Platform } from 'react-native';

export const platform = Platform.OS;

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
