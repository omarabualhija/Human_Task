import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, TYPOGRAPHY} from '../theme';
import {translate} from '../I18n';
import {isRTL} from '../common';
import useThemeApp from '../hooks/useThemeApp';
interface Iprops extends TextProps {
  children: React.ReactNode;
  size: keyof typeof $sizeStyles;
  style?: StyleProp<TextStyle>;
}

const HeadingApp = ({children, size, style}: Iprops) => {
  let {theme} = useThemeApp();

  const $rtlStyle: TextStyle = isRTL ? {writingDirection: 'rtl'} : {};
  const $defultStyle: TextStyle = {
    color: theme == 'dark' ? COLORS.white : COLORS.text,
  };
  const $styles = [$rtlStyle, $sizeStyles[size], $defultStyle, style];
  return <Text style={$styles}>{translate(String(children))}</Text>;
};

export default HeadingApp;

const $sizeStyles = {
  xxl: {fontSize: 36, lineHeight: 44, fontFamily: TYPOGRAPHY.fonts.Roboto.bold},
  xl: {fontSize: 24, lineHeight: 34, fontFamily: TYPOGRAPHY.fonts.Roboto.bold},
  lg: {fontSize: 20, lineHeight: 32, fontFamily: TYPOGRAPHY.fonts.Roboto.bold},
  md: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: TYPOGRAPHY.fonts.Roboto.normal,
  },
  sm: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: TYPOGRAPHY.fonts.Roboto.normal,
  },
  xs: {fontSize: 14, lineHeight: 21, fontFamily: TYPOGRAPHY.fonts.Roboto.light},
  xxs: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: TYPOGRAPHY.fonts.Roboto.light,
  },
};
