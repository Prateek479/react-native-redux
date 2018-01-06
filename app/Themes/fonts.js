import { Platform } from 'react-native';
import colors from './colors';

export const fontFamily = {
  bold: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'HelveticaNeueBold',
  light: Platform.OS === 'ios' ? 'HelveticaNeue-Light' : 'HelveticaNeueLight',
  medium:
    Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
  regular: 'HelveticaNeue',
  thin: Platform.OS === 'ios' ? 'HelveticaNeue-Thin' : 'HelveticaNeueThin',
};

export const fontSize = {
  h1: 53.3,
  h2: 24,
  h3: 16,
  h4: 13.3,
  h5: 11,
  h6: 10.7,
  h7: 9.3,
  h8: 8,
  h9: 20.1,
  h10: 15.9,
  h11: 14.1,
  h12: 12,
  h13: 11.7,
  h14: 9.9,
  h15: 9,
  h16: 18,
  h17: 17,
  h18: 50,
};

const fontStyle = {
  h1MedDarkGreyP: {
    style: {
      fontSize: fontSize.h1,
      fontFamily: fontFamily.medium,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 19.6,
    },
  },
  h1RegDarkGreyP: {
    style: {
      fontSize: fontSize.h1,
      fontFamily: fontFamily.regular,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 19.6,
    },
  },
  h1LtWhiteT: {
    style: {
      fontSize: fontSize.h1,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 19.6,
    },
  },
  h7BoldWhiteT: {
    style: {
      fontSize: fontSize.h7,
      fontFamily: fontFamily.bold,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 4,
      lineHeight: 5,
    },
  },
  h1RegGreyS2: {
    style: {
      fontSize: fontSize.h1,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 4,
      lineHeight: 5,
    },
  },
  h1LtDarkGreyP: {
    style: {
      fontSize: fontSize.h1,
      fontFamily: fontFamily.light,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 19.6,
    },
  },
  h2LtDarkGreyP: {
    style: {
      fontSize: fontSize.h2,
      fontFamily: fontFamily.light,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 19.6,
    },
  },
  h2LtGreyS: {
    style: {
      fontSize: fontSize.h2,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 5.3,
    },
  },
  h2TnWhiteP: {
    style: {
      fontSize: fontSize.h2,
      fontFamily: fontFamily.thin,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.24,
      lineHeight: 53,
    },
  },
  h3LtDarkGreyP: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.light,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 3.6,
    },
  },
  h3MedWhiteS: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.medium,
      color: colors.white.secondary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 32,
    },
  },
  h3RegGreyP: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.regular,
      color: colors.grey.primary,
    },
    props: {
      letterSpacing: 0.2,
    },
  },
  h3RegWhiteS: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.regular,
      color: colors.white.secondary,
    },
    props: {
      letterSpacing: 0.2,
      lineHeight: 32,
    },
  },
  h5MedWhiteP: {
    style: {
      fontSize: fontSize.h5,
      fontFamily: fontFamily.medium,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: -8,
    },
  },
  h6MedWhiteP: {
    style: {
      fontSize: fontSize.h6,
      fontFamily: fontFamily.medium,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: -8,
    },
  },
  h3LtWhiteT: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 5.3,
    },
  },
  h3RegGreySO: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
      opacity: colors.grey.secondaryOpacity,
    },
    props: {
      letterSpacing: 0.01,
    },
  },
  h3RegGreyS: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 5.3,
    },
  },
  h3RegGreyS2: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.2,
    },
  },
  h3RegGreyS3: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 1,
      lineHeight: 5.3,
    },
  },
  h3LtWhiteP: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.light,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 5.3,
    },
  },
  h3LtBlueP: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.light,
      color: colors.darkNavyBlue.primary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 5.3,
    },
  },
  h3LtWhiteS: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.light,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.2,
      lineHeight: 24,
    },
  },
  h4LtWhiteS: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.light,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.2,
      lineHeight: 24,
    },
  },
  h4MedWhiteTO: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiaryOpacity,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: -8,
    },
  },
  h4MedWhiteP: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.medium,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: -8,
    },
  },
  h4MedWhiteT: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 0.1,
      lineHeight: 5.3,
    },
  },
  h4MedWhiteT2: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 2.5,
      lineHeight: 0,
    },
  },
  h4RegGreyP: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.grey.primary,
    },
    props: {
      letterSpacing: 0.3,
    },
  },
  h4RegGreyP2: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.grey.primary,
    },
    props: {
      letterSpacing: 0.01,
    },
  },
  h4RegGreyP3: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.grey.primary,
    },
    props: {
      letterSpacing: 4,
    },
  },
  h4RegGreyS: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 5.3,
    },
  },
  h4RegGreyS2: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 5.3,
    },
  },
  h4RegWhiteT: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -8,
    },
  },
  h4RegWhiteP: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.1,
      lineHeight: 5.3,
    },
  },
  h4RegWhiteP2: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: -8,
    },
  },
  h4RegWhiteP3: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.1,
      lineHeight: 14.7,
    },
  },
  h4RegWhiteP4: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.regular,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.3,
      lineHeight: 29.3,
    },
  },
  h4LtWhiteP: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.light,
      color: colors.grey.primary,
    },
    props: {
      letterSpacing: 0.27,
      lineHeight: 18,
    },
  },
  h4LtWhiteP1: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.light,
      color: colors.grey.primary,
    },
    props: {
      letterSpacing: 0.3,
      lineHeight: 18.7,
    },
  },
  h4LtGreyS: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 5.3,
    },
  },
  h4LtGreyS2: {
    style: {
      fontSize: fontSize.h9,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 5.3,
    },
  },
  h4LtWhiteT: {
    style: {
      fontSize: fontSize.h2,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
      backgroundColor: 'transparent',
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 24.2,
    },
  },
  h4LtDarkGreyP: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.light,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 6.3,
    },
  },
  h5RegGreyS: {
    style: {
      fontSize: fontSize.h5,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: -5.7,
    },
  },
  h5RegGreyS2: {
    style: {
      fontSize: fontSize.h5,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.01,
      lineHeight: 5,
    },
  },
  h5RegGreyS3: {
    style: {
      fontSize: fontSize.h5,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.1,
      lineHeight: 17.3,
    },
  },
  h5RegYellow: {
    style: {
      fontSize: fontSize.h5,
      fontFamily: fontFamily.regular,
      color: colors.yellow.primary,
    },
    props: {
      letterSpacing: 0.1,
      lineHeight: 17.3,
    },
  },
  h5RegRedP: {
    style: {
      fontSize: fontSize.h5,
      fontFamily: fontFamily.regular,
      color: colors.red.primary,
    },
    props: {
      letterSpacing: 0.1,
      lineHeight: 17.3,
    },
  },
  h6RegWhiteP: {
    style: {
      fontSize: fontSize.h6,
      fontFamily: fontFamily.regular,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -5.3,
    },
  },
  h8RegGreyS: {
    style: {
      fontSize: fontSize.h8,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -5.3,
    },
  },
  h6RegGreyS: {
    style: {
      fontSize: fontSize.h6,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -5.3,
    },
  },
  h6RegDarkGreyS: {
    style: {
      fontSize: 20,
      fontFamily: fontFamily.regular,
      color: colors.darkGrey.secondary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -5.3,
    },
  },
  h6RegRedP: {
    style: {
      fontSize: fontSize.h6,
      fontFamily: fontFamily.regular,
      color: colors.red.primary,
      paddingHorizontal: 10,
      paddingVertical: 7,
    },
    props: {
      letterSpacing: 17.3,
      lineHeight: 0.1,
    },
  },
  h6MedRedP: {
    style: {
      fontSize: fontSize.h6,
      fontFamily: fontFamily.medium,
      color: colors.red.primary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -5.3,
    },
  },
  h6MedGreyS: {
    style: {
      fontSize: fontSize.h6,
      fontFamily: fontFamily.medium,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.21,
      lineHeight: 5.3,
    },
  },
  h6LtDarkGreyP: {
    style: {
      fontSize: fontSize.h6,
      fontFamily: fontFamily.light,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 1.1,
      lineHeight: 8.9,
    },
  },
  h7BdWhiteT: {
    style: {
      fontSize: fontSize.h7,
      fontFamily: fontFamily.bold,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: 6.3,
    },
  },
  h7MedGreyS: {
    style: {
      fontSize: fontSize.h7,
      fontFamily: fontFamily.medium,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -4,
    },
  },
  h7MedDarkGreyP: {
    style: {
      fontSize: fontSize.h7,
      fontFamily: fontFamily.medium,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 1.1,
      lineHeight: 10.3,
    },
  },
  h8MedDarkGreyP: {
    style: {
      fontSize: fontSize.h8,
      fontFamily: fontFamily.medium,
      color: colors.darkGrey.primary,
    },
    props: {
      letterSpacing: 1.1,
      lineHeight: 11.6,
    },
  },
  h8MedWhiteT: {
    style: {
      fontSize: fontSize.h8,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 0.06,
      lineHeight: -2.7,
    },
  },
  h2LtWhiteP: {
    style: {
      fontSize: fontSize.h2,
      fontFamily: fontFamily.light,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 5.3,
    },
  },
  h2LtWhiteP2: {
    style: {
      fontSize: fontSize.h3,
      fontFamily: fontFamily.light,
      color: colors.white.primary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 5.3,
    },
  },
  h2LtWhiteT: {
    style: {
      fontSize: fontSize.h2,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 9.7,
    },
  },
  h4MedGreyS: {
    style: {
      fontSize: fontSize.h4,
      fontFamily: fontFamily.medium,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 5.3,
    },
  },
  h15BoldWhiteT: {
    style: {
      fontSize: fontSize.h8,
      fontFamily: fontFamily.bold,
      color: colors.white.tertiary,
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: 5.3,
    },
  },
  h15LtWhiteP: {
    style: {
      fontSize: fontSize.h8,
      fontFamily: fontFamily.light,
      color: colors.white.primary,
    },
    props: {
      lineHeight: 9.7,
    },
  },
  h2LtWhiteT2: {
    style: {
      fontSize: fontSize.h2,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 9.7,
    },
  },
  h9LtWhiteP: {
    style: {
      fontSize: fontSize.h9,
      fontFamily: fontFamily.light,
      color: colors.white.primary,
    },
    props: {
      lineHeight: 8.1,
    },
  },
  h9LtGreyS: {
    style: {
      fontSize: fontSize.h9,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
      backgroundColor: 'transparent',
    },
    props: {
      lineHeight: 21,
    },
  },
  h10LtWhiteT: {
    style: {
      fontSize: fontSize.h10,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 6.7,
    },
  },
  h10BdWhiteT: {
    style: {
      fontSize: fontSize.h10,
      fontFamily: fontFamily.bold,
      color: colors.white.tertiary,
      backgroundColor: 'transparent',
    },
    props: {
      lineHeight: 21,
    },
  },
  h10MedWhiteT: {
    style: {
      fontSize: fontSize.h10,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
      backgroundColor: 'transparent',
    },
    props: {
      lineHeight: 6.7,
    },
  },
  h10LtGreyS: {
    style: {
      fontSize: fontSize.h10,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
      backgroundColor: 'transparent',
    },
    props: {
      lineHeight: 21,
    },
  },
  h11MedWhiteT: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.4,
    },
  },
  h11MedWhiteT2: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h11MedWhiteT3: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 5.6,
      letterSpacing: 0.1,
    },
  },
  h11MedWhiteT3O: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiaryOpacity,
    },
    props: {
      lineHeight: 5.6,
      letterSpacing: 0.1,
    },
  },
  h11LtWhiteT: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 7,
      letterSpacing: 0.1,
    },
  },
  h11LtGreyS: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
    },
    props: {
      lineHeight: 7,
    },
  },

  h11LtGreyS2: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
    },
    props: {
      lineHeight: 5.6,
      letterSpacing: 0.1,
    },
  },
  h11MedRedP: {
    style: {
      fontSize: fontSize.h11,
      fontFamily: fontFamily.medium,
      color: colors.red.primary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h12LtWhiteT: {
    style: {
      fontSize: fontSize.h12,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h12LtGreyS: {
    style: {
      fontSize: fontSize.h12,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h12MedGreyS: {
    style: {
      fontSize: fontSize.h12,
      fontFamily: fontFamily.medium,
      color: colors.grey.secondary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h12MedWhiteT: {
    style: {
      fontSize: fontSize.h12,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 0,
      letterSpacing: 2.5,
    },
  },
  h13LtGreyS: {
    style: {
      fontSize: fontSize.h13,
      fontFamily: fontFamily.light,
      color: colors.grey.secondary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h13LtWhiteT: {
    style: {
      fontSize: fontSize.h13,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h13LtRedP: {
    style: {
      fontSize: fontSize.h13,
      fontFamily: fontFamily.light,
      color: colors.red.primary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h13MedRedP: {
    style: {
      fontSize: fontSize.h13,
      fontFamily: fontFamily.medium,
      color: colors.red.primary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.1,
    },
  },
  h14MedGreyS: {
    style: {
      fontSize: fontSize.h14,
      fontFamily: fontFamily.medium,
      color: colors.grey.secondary,
    },
    props: {
      lineHeight: 3.9,
      letterSpacing: 0.1,
    },
  },
  h8MedWhiteT2: {
    style: {
      fontSize: fontSize.h8,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 0,
      letterSpacing: 0,
    },
  },
  h14RegGreyS: {
    style: {
      fontSize: fontSize.h14,
      fontFamily: fontFamily.medium,
      color: colors.grey.secondary,
    },
    props: {
      lineHeight: 3.9,
      letterSpacing: 0.1,
    },
  },
  h16LtCoolGreyP: {
    style: {
      fontSize: fontSize.h16,
      fontFamily: fontFamily.light,
      color: colors.coolGrey.primary,
    },
    props: {
      lineHeight: 4.7,
      letterSpacing: 0.07,
    },
  },
  h17LtWhiteT: {
    style: {
      fontSize: fontSize.h17,
      fontFamily: fontFamily.light,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 7,
      letterSpacing: 0.1,
    },
  },
  h17MedWhiteT: {
    style: {
      fontSize: fontSize.h17,
      fontFamily: fontFamily.medium,
      color: colors.white.tertiary,
    },
    props: {
      lineHeight: 7,
      letterSpacing: 0.1,
    },
  },
  h18RegGreyS2: {
    style: {
      fontSize: fontSize.h18,
      fontFamily: fontFamily.regular,
      color: colors.grey.secondary,
    },
    props: {
      letterSpacing: 4,
      lineHeight: 5,
    },
  },
};
export default fontStyle;
